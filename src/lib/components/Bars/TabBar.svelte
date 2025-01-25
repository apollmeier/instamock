<script>
    import IconHomeFull from '~icons/instamock24/HomeFilled';
    import IconSearch from '~icons/instamock24/Search';
    import IconCreate from '~icons/instamock24/Create';
    import IconReels from '~icons/instamock24/Reels';

    import Avatar from '$lib/components/Avatar/Avatar.svelte';

    let tabs = [
        {name: 'home', icon: IconHomeFull},
        {name: 'search', icon: IconSearch},
        {name: 'create', icon: IconCreate},
        {name: 'reels', icon: IconReels},
    ]
</script>

<div class="absolute bottom-0 w-full bg-white border-t border-gray-30">
    <nav class="pt-2 pb-5">
        <ul class="grid grid-cols-5">
            {#each tabs as tab}
                <li>
                    <tab.icon />
                </li>
            {/each}
            <li>
                <Avatar src="https://picsum.photos/48/48"/>
            </li>
        </ul>
    </nav>
    <div class="px-6 py-2">
        <div class="h-[5px] w-36 mx-auto bg-black rounded-full"></div>
    </div>
</div>

<style>
    ul > li {
        @apply flex justify-center items-center;
    }
</style>
