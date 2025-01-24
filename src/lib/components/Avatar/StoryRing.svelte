<script>
    let  {
        width,
        gap,
        status,
    } = $props()

    let className;

    switch (status) {
        case 'read':
            className = 'bg-gray-30';
            break;
        case 'new':
            className = 'bg-gradient-instagram'
            break;
        case 'close-friend':
            className = 'bg-green-100'
    }

</script>

<div class={["absolute -z-10 rounded-full flex justify-center items-center aspect-square", className]} style="--story-ring-width: {width}; --story-ring-gap: {gap}">
    <div class="rounded-full aspect-square bg-white"></div>
</div>

<style>
    div {
        width: calc(100% + (var(--story-ring-width) + var(--story-ring-gap)) * 2);

        div {
            width: calc(100% - var(--story-ring-width) * 2);
        }
    }
</style>
