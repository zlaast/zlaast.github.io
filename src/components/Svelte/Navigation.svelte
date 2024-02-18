<SearchModal />

<nav>
	<button id="menu-bar" class="bg-bg fixed left-0 z-30 flex h-screen w-6 items-center rounded-r-lg border-r-2 border-solid border-neutral-700 text-center transition-[left] duration-300 ease-in-out" on:click={menuToggle} on:touchstart={menuToggle}>
		<svg class="text-yellow-400 h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" /></svg>
	</button>

	<div id="navigation" class="bg-bg fixed left-[-250px] z-30 h-screen w-[250px] overflow-y-scroll pb-4 transition-[left] duration-300 ease-in-out text-[16px]">
		<ul>
			<!-- Portrait of Me -->
			<li class="mt-14">
				<a href="/"><img src="/images/portrait.webp" alt="Small portrait of me" class="mx-auto h-full w-[96px] rounded-full" /></a>
			</li>

			<!-- Buttons -->
			<li class="mt-6 flex justify-center">
				
				<!-- Scroll to top button -->
				<button aria-label="Scroll To Top Button" on:click={scrollToTop} class="mx-1 h-14 w-14 rounded-full bg-neutral-700 text-left text-neutral-500 duration-500 ease-in-out hover:bg-gray-700">
					<span class="relative left-[10px] top-0.5 text-2xl text-neutral-200">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="currentColor" viewBox="0 0 24 24">
						  <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
						</svg>
					  </span>
				</button>

				<!-- Search button -->
				<button aria-label="Search Button" id="search-button" on:click={searchModalOpen} class="mx-1 h-14 w-14 rounded-full bg-neutral-700 text-left text-neutral-500 duration-500 ease-in-out hover:bg-gray-700">
					<span class="relative left-4 top-0.5 text-2xl text-neutral-200">
					  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
						<path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
					  </svg>
					</span>
				</button>

			</li>

			<div class="py-2"></div>

			<!-- Categories -->
			{#await fetchMenu() then menu}
				{#each menu as categories }
				<div class="mx-5 my-3">
					<button class="w-full rounded-xl p-5 text-left duration-200 ease-linear hover:bg-[#0e0d0d]" on:click={openCategory}>
						<svg class="inline select-none text-neutral-300" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /></svg>
						<h4 class="inline select-none pl-3 font-semibold text-neutral-300">{ categories.category }</h4>
						<h4 class="float-right inline h-6 w-6 select-none rounded-full bg-cyan-500 pt-[3px] text-sm text-center font-semibold text-neutral-100">{ categories.categoryCount }</h4>
						<ul class="max-h-0 select-none overflow-hidden transition-all duration-75 ease-linear">
							{#each categories.series as series}
							<li class="group py-1 pt-6">
								<span class="ml-0.5 inline-block text-[#508e7f] group-hover:text-[cyan]">∘</span>
								<a href="/blog/{ series.name.toLowerCase().replaceAll(" ", "-") }" class="select-none break-all pl-4 text-neutral-300 group-hover:text-[#cba0e7]">{ series.name }</a>
								<span class="text-md float-right h-6 w-6 text-center text-neutral-300">{ series.count }</span>
							</li>
							{/each}
						</ul>
					</button>
				</div>
				{/each}
			{/await}

			<hr class="after:bg-bg mx-8 my-6 h-1 w-[75%] overflow-visible border-neutral-500 text-center font-semibold text-neutral-200 after:relative after:top-[-13px] after:px-5 after:content-['Other']" />
		
			<!-- Tags -->
			{#await fetchTags() then tags}
			<div class="mx-5 my-3">
				<button class="w-full rounded-xl p-5 text-left duration-200 ease-linear hover:bg-[#0e0d0d]" on:click={openCategory}>
					<svg class="inline select-none text-neutral-300" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /></svg>
					<h4 class="inline select-none pl-3 font-semibold text-neutral-300">Tags</h4>
					<h4 class="float-right inline h-6 w-6 select-none rounded-full bg-cyan-500 pt-[3px] text-sm text-center font-semibold text-neutral-100">{ tags.length }</h4>
					<ul class="max-h-0 select-none overflow-hidden transition-all duration-75 ease-linear">
						{#each tags.sort() as tag}
						<li class="group py-1 pt-6">
							<span class="ml-0.5 inline-block text-[#508e7f] group-hover:text-[cyan]">∘</span>
							<a href="/tags/{ tag.toLowerCase() }" class="select-none break-all pl-4 text-neutral-300 group-hover:text-[#cba0e7]">{ tag }</a>
						</li>
						{/each}
					</ul>
				</button>
			</div>
			{/await}
		</ul>
	</div>
</nav>

<script type="text/javascript">
	import { afterUpdate } from 'svelte';
    import SearchModal from "./SearchModal.svelte";

	const host = '/api';

	/* RETRIEVE JSON FILES TO POPULATE MENU */
	async function fetchMenu()
	{
		const response = await fetch(`${host}/menu.json`);
		const data = await response.json();

		return data;
	}

	async function fetchTags()
	{
		const response = await fetch(`${host}/database.json`);
		const database = await response.json();
		const tags = [...new Set(database.map((entry) => entry.tags).flat(Infinity))];

		return tags;
	}

	/* OPEN AND CLOSE MENU */
	function closeMenu()
	{
		const menuBar = document.getElementById("menu-bar");
		const navigation = document.getElementById("navigation");

		menuBar.style.left = '0px';
		navigation.style.left = '-250px';
	}

	function openMenu()
	{
		const menuBar = document.getElementById("menu-bar");
		const navigation = document.getElementById("navigation");

		if (menuBar.style.left == '0px' || menuBar.style.left == '')
		{
			menuBar.style.left = '250px';
			navigation.style.left = '0px';
		}
	}

	function menuToggle()
	{
		const menuBar = document.getElementById("menu-bar");
		
		if (menuBar.style.left == '0px' || menuBar.style.left == '')
			openMenu();

		else if (menuBar.style.left == '250px')
			closeMenu();

		else
			closeMenu();
	}

	afterUpdate(() => 
    {
		const main = document.getElementById("main");
		const footer = document.getElementById("footer")
		main.addEventListener("click", closeMenu, {passive: true});
		footer.addEventListener("click", closeMenu, {passive: true});
    });

	/* SCROLL TO TOP BUTTON */
	function scrollToTop()
	{
		window.scrollTo({top:0, behavior: 'smooth'});
	}

	/* SEARCH BUTTON */
	function searchModalOpen()
	{
		let searchModal = document.getElementById("search-modal");
        let searchBox = document.getElementById("nav-search");
		let resultsList = document.getElementById("results-list");

		searchModal.style.display = 'block';
		searchBox.style.display = 'block';
		resultsList.style.display = 'block';
		searchBox.focus();
	}

	/* CATEGORIES */
	function openCategory()
	{
		let chevron = this.firstElementChild;
		let series = this.lastElementChild;

		if (series.style.maxHeight)
		{
			series.style.maxHeight = null;
			chevron.style.transform = "rotate(0deg)";
			chevron.style.transition = "transform 0.1s ease-out";
		}
		else
		{
			series.style.maxHeight = series.scrollHeight + "px";
			chevron.style.transform = "rotate(90deg)";
			chevron.style.transition = "transform 0.1s ease-out";
		}
	}
</script>

<style>
	#navigation::-webkit-scrollbar { display: none; }
</style>