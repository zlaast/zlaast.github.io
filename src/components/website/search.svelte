<script>
    import Fuse from 'fuse.js'
    import { onMount } from 'svelte'
    import { parseDate } from '@utils/utils'
    import { url } from '@utils/consts'

    let fuse
    let query = ''
    let results = []
    let database = []

    const DATABASE_ENDPOINT = `${url}/api/database.json`

    onMount(async () => {
        const response = await fetch(DATABASE_ENDPOINT)
        database = await response.json()

        fuse = new Fuse(database, {
            includeScore: true,
            shouldSort: true,
            keys: [
                { name: 'subtitle', weight: 0.5 },
                { name: 'title', weight: 0.25 },
                { name: 'project', weight: 0.1 },
                { name: 'category', weight: 0.1 },
                { name: 'excerpt', weight: 0.05 },
                { name: 'tags', weight: 0.05 }
            ]
        })
    })

    function search() {
        if (!fuse || !query.trim()) {
            results = []
            return
        }

        results = fuse.search(query).map(({ item }) => item)
    }
</script>


<div>
    <!-- Search Input -->
    <label
        class="flex w-full items-center rounded-md bg-[#19191b] px-3 py-2 outline-none ring-0 focus-within:outline-none focus-within:ring-0">
        <svg
            class="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <svg
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
            </svg>
        </svg>

        <input
            type="search"
            placeholder="Search"
            bind:value={query}
            on:input={search}
            class="ml-2 grow bg-transparent text-lg text-neutral-200 outline-none ring-0 border-none focus:outline-none focus:ring-0"
        />
    </label>

    <!-- Results -->
    {#if results.length > 0}
        {#each results as post, index}
            <a href="/posts/{post.url}">
                <div
                    class="group my-5 flex items-stretch overflow-hidden rounded-lg
                           border border-neutral-600 bg-[#222222]
                           shadow-lg/40 transition-colors duration-300
                           hover:bg-[#2b2b2b]"
                >
                    <!-- Index -->
                    <div
                        class="hidden flex-shrink-0 border-l border-emerald-400
                               bg-[#2b2b2b] px-8 sm:flex"
                    >
                        <div class="flex h-full items-center">
                            <p
                                class="w-[50px] text-center text-4xl text-neutral-400
                                       transition-colors duration-300
                                       group-hover:text-emerald-400"
                            >
                                {index + 1}
                            </p>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="inline p-5 py-6 text-xl font-normal text-neutral-200">
                        <div class="text-xl">
                            {post.project}
                            <span class="text-neutral-400"> # </span>
                            {post.subtitle}
                        </div>

                        <div class="my-3 text-base text-neutral-400">
                            {post.excerpt}
                        </div>

                        <div class="text-sm text-neutral-400">
                            <div class="my-4 flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    style="fill: oklch(70.8% 0 0);"
                                >
                                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z" />
                                    <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z" />
                                </svg>
                                <span>Read Time: {post.read_time} min</span>
                            </div>

                            <div class="my-4 flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    style="fill: oklch(70.8% 0 0);"
                                >
                                    <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2z" />
                                    <path d="m11 17.414 5.707-5.707-1.414-1.414L11 14.586l-2.293-2.293-1.414 1.414z" />
                                </svg>
                                <span>{parseDate(new Date(post.date))}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        {/each}
    {:else if query}
        <p class="mt-4 text-neutral-400">No results found</p>
    {/if}
</div>

