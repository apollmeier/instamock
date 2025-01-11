<script>
    import IconHomeFull from 'virtual:icons/instamock/home_full';
    import IconSearch from 'virtual:icons/instamock/search';
    import IconCreate from 'virtual:icons/instamock/create';
    import IconReels from 'virtual:icons/instamock/reels';

    import Avatar from '$lib/components/Avatar/Avatar.svelte';

    let tabs = [
        {name: 'home', icon: IconHomeFull},
        {name: 'search', icon: IconSearch},
        {name: 'create', icon: IconCreate},
        {name: 'reels', icon: IconReels},
    ]
</script>

<div class="absolute bottom-0 w-full">
    <nav class="px-6 pt-2 pb-5">
        <ul class="grid grid-cols-5">
            {#each tabs as tab}
                <li>
                    <tab.icon />
                </li>
            {/each}
            <li>
                <Avatar>
                    <img src="https://picsum.photos/20/20" alt=""/>
                </Avatar>
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
