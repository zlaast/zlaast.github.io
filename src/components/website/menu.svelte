<script>
    import { onMount } from "svelte";
    import { url } from '@utils/consts';

    const MenuDataEndpoint = `${ url }/api/menu.json`;
    const DatabaseEndpoint = `${ url }/api/database.json`;
    
    let MenuData;
    let Database;
    let Tags;
    let TagsLength;
    let menu;

    onMount(async function() 
    {
        menu = document.getElementById("menu");
        
        const menuResponse = await fetch(MenuDataEndpoint);
        const databaseResponse = await fetch(DatabaseEndpoint);

        MenuData = await menuResponse.json();
        Database = await databaseResponse.json();

        Tags = [...new Set(Database.map((entry) => entry.tags).flat(Infinity))];
        TagsLength = Tags.length;
    });

    function toggleMenu()
    {
        menu.classList.toggle('hide-menu');
    }

    function scrollToTop()
    {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

	function togglecategory() 
    {
		this.nextElementSibling.classList.toggle('hide-projects');
	}
</script>

<div id="menu" class="hide-menu z-30 fixed flex flex-row-reverse h-screen top-0 transition-all ease-in-out duration-300">
    <button onclick={ toggleMenu } class="w-6 cursor-pointer rounded-r-md border-r-1 border-emerald-400 bg-neutral-800" aria-label="Menu Button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill: #00d482;transform: ;msFilter:;"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
    </button>
    <nav class="flex w-[250px] flex-col overflow-y-scroll bg-neutral-800 pr-1 pl-5 pb-5">
        <ul class="grow">
            <li class="flex relative portrait justify-center mx-auto mt-12 mb-8">
                <img class="rounded-full select-none w-30" src="/portrait.webp" alt="Small portrait of me" />
            </li>
            <li class="flex justify-center">
                <button onclick={ scrollToTop } class="btn btn-circle bg-neutral-700 mx-3 hover:bg-neutral-800" aria-label="To Page Top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"></path></svg>
                </button>
                <a href="/search" class="btn btn-circle mx-1 bg-neutral-700 hover:bg-neutral-800" aria-label="Search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
                </a>
            </li>
            <li class="px-1 py-4 text-sm text-gray-400 select-none">Projects</li>

            {#each MenuData as Entry}
            <li>
                <button onclick={ togglecategory } class="btn btn-md bg-neutral-700 my-1 flex w-full cursor-pointer items-center px-3 py-5 text-left transition-all hover:bg-neutral-800">
                    <span class="grow">{ Entry.Category }</span>
                    <div class="badge badge-outline min-md:badge-soft badge-secondary">{ Entry.projectsCount }</div>
                </button>
                <ul class="hide-projects grid grid-rows-[1fr] transition-all">
                    <li class="overflow-hidden">

                        {#each Entry.projects as projects}
                        <a href="/posts/{ projects.Name.toLowerCase().replaceAll(" ", "-") }">
                            <div class="rounded-md px-3 py-5 transition-all hover:bg-neutral-900">
                                <span class="w-full flex">
                                    <span class="grow text-sm capitalize text-emerald-300">{ projects.Name }</span>
                                    <div class="badge badge-outline min-md:badge-soft text-emerald-400">{ projects.PostsAmount }</div>
                                </span>

                                {#if projects.Progress}
                                <progress class="progress text-emerald-400" value={ projects.Progress } max="100"></progress>
                                <span class="text-xs">{ projects.Progress }% Complete</span>
                                {/if}

                            </div>
                        </a>
                        {/each}
                    </li>
                </ul>
            </li>
            {/each}
            <li class="text-sm text-gray-400 px-1 py-4 select-none">Other</li>
            <li>
                <button onclick={ togglecategory } class="btn btn-md bg-neutral-700 my-1 flex w-full cursor-pointer items-center px-3 py-5 text-left transition-all hover:bg-neutral-800">
                    <span class="grow">Tags</span>
                    <div class="badge badge-outline min-md:badge-soft badge-secondary">{ TagsLength }</div>
                </button>
                <ul class="hide-projects grid grid-rows-[1fr] transition-all">
                    <li class="overflow-hidden">
                        {#each Tags as tag}
                        <a href="/tags/{ tag.toLowerCase().replaceAll(" ", "-") }">
                            <div class="rounded-md px-3 py-5 transition-all hover:bg-neutral-900">
                                <span class="w-full flex">
                                    <span class="grow text-sm capitalize text-emerald-300">{ tag }</span>
                                </span>
                            </div>
                        </a>
            {/each}
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&family=inter:ital,wght@0,200..1000;1,200..1000&display=swap');

    a
    {
        color: whitesmoke !important;
    }

    nav
    {
        font-family: "Kode Mono", monospace;
        scrollbar-width: none;
        -ms-overflow-style: none;  
    }
    
    nav::-webkit-scrollbar, nav::-webkit-scrollbar-button 
    { 
        display: none; 
    }

    .hide-menu
    {
        transform: translate(-250px);
    }

    .hide-projects
    {
        grid-template-rows: 0fr;
    }

    .portrait::after, .portrait::before
    {
        content: "";
        position: absolute;
        border-radius: 50%;
        height: 100px;
        width: 100px;
        background: conic-gradient(from var(--angle) at 50% 50%, #003f5b, #2b4b7d, #5f5195, #98509d, #cc4c91, #f25375, #ff6f4e, #ff9913);
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        z-index: -1;
        filter: blur(1.5rem);
        animation: 10s portrait-bg-spin linear infinite;
    }

    .portrait::before
    {
        filter: blur(1.5rem);
        opacity: 0.5;
    }

    @keyframes portrait-bg-spin
    {
        from { --angle: 0deg; }
        to { --angle: 360deg; }
    }

    @property --angle
    {
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
    }
</style>