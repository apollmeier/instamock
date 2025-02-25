<script>
    const {image} = $props();
</script>

{#if image}
    <img src={image.data} alt={image.name} class="object-cover object-center aspect-square" loading="lazy">
{/if}
