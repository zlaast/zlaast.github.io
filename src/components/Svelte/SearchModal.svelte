<script>
    import { afterUpdate } from 'svelte';

    /* RETRIEVE JSON FILES TO POPULATE MENU */
	async function fetchDatabase()
	{
		const response = await fetch("/api/database.json");
		const database = await response.json();

		return database;
	}

    afterUpdate(() => 
    {
        searchModalClose();
    });

    function searchModalClose()
    {
        let searchModal = document.getElementById("search-modal");
        let searchBox = document.getElementById("nav-search");
        let resultsList = document.getElementById("results-list");

        searchModal.addEventListener("click", () => 
        {
            searchModal.style.display = 'none';
            searchBox.style.display = 'none';
            resultsList.style.display = 'none';
        });
    }

    let searchInput = "";
    let results = new Set();
    let output = [];

    async function search()
    {
        let database = await fetchDatabase();

        let resultsList = document.getElementById("results-list");
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
        
        if (output.length > 5)
        {
            let moreResultsLength = output.length - 5;
            
            output.length = 5;

            let moreResults = {
                title: "Search",
                subtitle: `${moreResultsLength} more results...`,
                url: `search?query=${searchInput.replaceAll(" ", "+")}`
            }
            output.push(moreResults);
        }
    }
</script>

{#await fetchDatabase then db}
    <div id="search-modal" class="fixed z-40 hidden w-screen h-screen bg-[#000000a6]">
        <div class="flex justify-center">
            <input type="search" id="nav-search" class="fixed z-50 mt-8 h-12 w-[50%] max-lg:w-[85%] bg-[#27292d] pl-11 text-left text-neutral-300 outline-none hidden" placeholder="Search" bind:value={searchInput} on:input={search} />
            <ul id="results-list" class="fixed z-50 mt-20 w-[50%] max-lg:w-[85%] bg-[#27292d] px-3 text-neutral-300 outline-none hidden">
                { #each output as result }
                    <li class="hover:bg-bg mx-3 hover:text-[#cba0e7] list-none">
                        <a class="flex p-4 pl-5 max-lg:w-[85%] hover:text-[#cba0e7] text-neutral-300 outline-none" href="/blog/{result.url}">{ result.title } - {result.subtitle}</a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
{/await}