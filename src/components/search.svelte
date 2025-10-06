<script>
    import { onMount } from "svelte";
    import Fuse from 'fuse.js';
    import { parseDate } from '@utils/utils'

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

    <label class="flex w-full input border-none">
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
        <input type="search" class="grow text-lg" placeholder="Search" bind:value={query} oninput={search} />
    </label>

    {#if results.length > 0}
        {#each results as item}
            <a href="/posts/{ item.url }">
                <div class="flex my-5 p-1 gap-4 text-neutral-200 hover:ml-3 transition-all duration-150 ease-in-out">
                    <div class="flex flex-col justify-between">
                        <h3 class="text-2xl font-kode">{ item.subtitle }</h3>
                        <div class="text-[1rem] font-bold">
                            <span class="text-rose-400">{ item.project }</span>
                            <span>·</span>
                            <span>{ parseDate(new Date(item.date)) }</span>
                        </div>
                        <hr class="my-1 text-neutral-500 border-0.5 border-dashed" />
                        <div class="flex items-center text-sm">
                            <svg class="inline mr-1" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" style="fill: white;transform: scaleX(-1);msFilter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);"><path d="M13.707 3.293A.996.996 0 0 0 13 3H4a1 1 0 0 0-1 1v9c0 .266.105.52.293.707l8 8a.997.997 0 0 0 1.414 0l9-9a.999.999 0 0 0 0-1.414l-8-8zM12 19.586l-7-7V5h7.586l7 7L12 19.586z"></path><circle cx="8.496" cy="8.495" r="1.505"></circle></svg>
                            <span class="font-bold mr-1">Tags:</span>
                            <span class="whitespace-nowrap">{ item.tags }</span>
                        </div>
                    </div>
                </div>
            </a>
        {/each}
        {:else if query}
            <p>No results found</p>
        {/if}
</div>
