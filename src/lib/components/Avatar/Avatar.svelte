<script>
    import Add from "$lib/components/Avatar/Add.svelte";

    const {
        src,
        size = '6',
        add,
        children,
    } = $props();
</script>

<div>
    <div class="relative flex justify-center items-center" style="--size: {size}">
        <img {src} class="rounded-full aspect-square">

        {#if add}
        <div class="add absolute">
            <Add />
        </div>
        {/if}

        {@render children?.()}
    </div>
</div>

<style>
    img {
        width: calc(var(--spacing) * var(--size));
    }

    .add {
        --radius: calc(var(--spacing) * var(--size) / 2);
        --angle: 315deg;

        translate:
            calc(cos(var(--angle)) * var(--radius))      /* Translation on X-axis */
            calc(sin(var(--angle) * -1) * var(--radius)); /* Translation on Y-axis */
    }
</style>
