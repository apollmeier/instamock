<script>
    import IconHome from '~icons/instamock/Home';
    import IconSearch from '~icons/instamock/Search';
    import IconCreate from '~icons/instamock/Create';
    import IconReels from '~icons/instamock/Reels';

    import Avatar from '$lib/components/Avatar/Avatar.svelte';
</script>

<section class="bg-white border-t border-gray-30">
    <nav class="pt-2 pb-5">
        <ul class="grid grid-cols-5">
            <li class="flex justify-center items-center">
                <IconHome class="text-gray-40"/>
            </li>
            <li class="flex justify-center items-center">
                <IconSearch class="text-gray-40"/>
            </li>
            <li class="flex justify-center items-center">
                <a href="/preview/new">
                    <IconCreate />
                </a>
            </li>
            <li class="flex justify-center items-center">
                <IconReels class="text-gray-40"/>
            </li>
            <li class="flex justify-center items-center">
                <Avatar src="https://picsum.photos/68"/>
            </li>
        </ul>
    </nav>
</section>
