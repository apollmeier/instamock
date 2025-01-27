<script>
    import IconLike from '~icons/instamock24/Like'
    import IconShare from '~icons/instamock24/Share'
    import IconChevronDown from '~icons/instamock16/ChevronDown'
</script>

<section class="px-4 py-2 flex flex-row items-center gap-5">
    <h2 class="text-xl font-bold mr-auto">For you <IconChevronDown class="inline-block"/></h2>
    <div class="relative">
        <IconLike/>
        <span class="absolute top-0 right-0 size-2 rounded-full bg-red-100 ring-2 ring-white"></span>
    </div>
    <div class="relative">
        <IconShare/>
        <span class="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 rounded-full px-1.5 bg-red-100 text-[10px] text-white font-bold">5</span>
    </div>
</section>
