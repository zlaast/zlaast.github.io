<script>
    /* RETRIEVE JSON FILES TO POPULATE MENU */
	async function fetchDatabase()
	{
		const response = await fetch("/api/database.json");
		const database = await response.json();

		return database;
	}

    let searchInput = "";
    let results = new Set();
    let output = [];

    let query = window.location.href.split('?query=')[1];
    if (query != undefined)
    {
        query = query.replace('+', ' ');
        searchInput = query;
        search();
    }

    async function search()
    {
        let database = await fetchDatabase();

        let resultsList = document.getElementById("page-results-list");
		resultsList.style.paddingBottom = '0.75rem';

        results.clear();
        database.forEach(entry => {
            if (entry.title.toLowerCase().includes(searchInput.toLowerCase()) || entry.subtitle.toLowerCase().includes(searchInput.toLowerCase()))
                results.add(entry);
        })
        output = Array.from(results).sort((a,b) => a.part - b.part);

        if (searchInput == "")
        {
            output = [];
            resultsList.style.paddingBottom = '0';
        }
    }
</script>

{#await fetchDatabase then db}
    <div class="flex flex-col justify-center">
        <div class="w-[50vw]">
            <input type="search" class="z-50 mt-8 h-12 w-[50vw]  bg-[#27292d] pl-11 text-left text-neutral-300 outline-none" placeholder="Search" bind:value={searchInput} on:input={search} />
            <ul id="page-results-list" class="z-50 bg-[#27292d] px-3 text-neutral-300 outline-none">
                { #each output as result }
                    <li class="hover:bg-bg mx-3 hover:text-[#cba0e7] list-none">
                        <a class="flex p-4 pl-5 w-[50vw] hover:text-[#cba0e7] text-neutral-300 outline-none" href="/blog/{result.url}">{ result.title } - {result.subtitle}</a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
{/await}