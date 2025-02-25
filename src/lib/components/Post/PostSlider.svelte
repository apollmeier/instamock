<script>
    import emblaCarouselSvelte from "embla-carousel-svelte";
    import PostImage from "$lib/components/Post/PostImage.svelte";

    const  {images} = $props()
</script>

<div use:emblaCarouselSvelte class="overflow-hidden">
    <div class="flex *:flex-[0_0_100%]">
        {#each images as image}
            <PostImage {image} />
        {/each}
    </div>
</div>
