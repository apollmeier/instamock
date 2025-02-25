<script>
    import PostHeader from "$lib/components/Post/PostHeader.svelte";
    import PostDetails from "$lib/components/Post/PostDetails.svelte";
    import PostImage from "$lib/components/Post/PostImage.svelte";
    import PostSlider from "$lib/components/Post/PostSlider.svelte";

    const {images = []} = $props()
</script>

<div>
    <PostHeader/>
    {#if images.length > 0}
        {#if images.length > 1}
            <PostSlider images={images} />
        {:else}
            <PostImage image={images[0]} />
        {/if}
    {/if}
    <PostDetails/>
</div>
