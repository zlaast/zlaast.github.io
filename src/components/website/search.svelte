<script>
    import Fuse from 'fuse.js';
    import { onMount } from "svelte";
    import { parseDate } from '@utils/utils';
    import { url } from '@utils/consts';

    let fuse;
    let query = '';
    let results = [];
    let Database;
    const DatabaseEndpoint = `${ url }/api/database.json`;

    onMount(async function() 
    {
        const databaseResponse = await fetch(DatabaseEndpoint);
        Database = await databaseResponse.json();
        fuse = new Fuse(Database, {
            includeScore: true,
            shouldSort: true,
            keys: [
                {
                    name: "subtitle",
                    weight: 0.5
                },
                {
                    name: "title",
                    weight: 0.25
                },
                {
                    name: "project",
                    weight: 0.1
                },
                {
                    name: "category",
                    weight: 0.1
                },
                {
                    name: "excerpt",
                    weight: 0.05
                },
                {
                    name: "tags",
                    weight: 0.05
                }
            ]
        });
    });

    function search() {
        if (!fuse || !query) {
            results = [];
            return;
        }
        results = fuse.search(query).map(result => result.item);
    }
</script>

<div>

    <label class="flex w-full input border-none focus-within:outline-none focus-within:ring-0 bg-[#19191b]">
        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <svg
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2.5"
            fill="none"
            stroke="currentColor"
            >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
            </svg>
        </svg>
        <input type="search" class="grow text-lg bg-[#19191b]" placeholder="Search" bind:value={query} oninput={search} />
    </label>

    {#if results.length > 0}
        {#each results as post, index}
            <a href="/posts/{ post.url }">
               <div class="flex group items-stretch border-1 border-neutral-600 bg-[#222222] rounded-lg overflow-hidden my-5 shadow-lg/40 hover:bg-[#2b2b2b] duration-300">
                    <div class="hidden sm:flex flex-shrink-0 bg-[#2b2b2b] px-8 border-l-1 border-emerald-400">
                        <div class="flex items-center h-full">
                            <p class="text-neutral-400 text-4xl w-[50px] text-center group-hover:text-emerald-400 duration-300">{ index + 1 }</p>
                        </div>
                    </div>
                    <div class="text-neutral-200 font-normal text-xl p-5 py-6 inline">
                        <div class="text-xl">
                            { post.project }
                            <span class="text-neutral-400"> # </span>
                            { post.subtitle }
                        </div>
                        <div class="text-base my-3 text-neutral-400">
                            { post.excerpt }
                        </div>
                        <div class="text-neutral-400 text-sm">
                            <div class="flex items-center gap-1 my-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill: oklch(70.8% 0 0);transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path></svg>
                                <span>Read Time: { post.read_time } min</span>
                            </div>
                            <div class="flex items-center gap-1 my-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill: oklch(70.8% 0 0); transform: ;msFilter:;"><path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm.002 16H5V8h14l.002 12z"></path><path d="m11 17.414 5.707-5.707-1.414-1.414L11 14.586l-2.293-2.293-1.414 1.414z"></path></svg>
                                <span>{ parseDate(new Date(post.date)) }</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        {/each}
        {:else if query}
            <p>No results found</p>
        {/if}
</div>
