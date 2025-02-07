<script>
    import IconHomeFull from '~icons/instamock24/HomeFilled';
    import IconSearch from '~icons/instamock24/Search';
    import IconCreate from '~icons/instamock24/Create';
    import IconReels from '~icons/instamock24/Reels';

    import Avatar from '$lib/components/Avatar/Avatar.svelte';
</script>

<section class="bg-white border-t border-gray-30">
    <nav class="pt-2 pb-5">
        <ul class="grid grid-cols-5">
            <li class="flex justify-center items-center">
                <IconHomeFull class="text-gray-40"/>
            </li>
            <li class="flex justify-center items-center">
                <IconSearch class="text-gray-40"/>
            </li>
            <li class="flex justify-center items-center">
                <IconCreate class="text-gray-40"/>
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
