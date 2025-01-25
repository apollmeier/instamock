<script>
    const {
        src,
        size = 'size-6',
        add,
        children,
    } = $props();
</script>

<div>
    <div class="relative flex justify-center items-center">
        <img {src} class="rounded-full aspect-square {size}" alt="">

        {@render children?.()}
    </div>

</div>
