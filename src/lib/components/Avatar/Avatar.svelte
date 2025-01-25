<script>
    const {
        src,
        add,
        children,
    } = $props();
</script>

<div>
    <div class="relative flex justify-center items-center">
        <img {src} class="rounded-full aspect-square size-6" alt="">

        {@render children?.()}
    </div>

</div>
