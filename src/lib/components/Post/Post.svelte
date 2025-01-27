<script>
    import PostDetails from "$lib/components/Post/PostDetails.svelte";
    import PostHeader from "$lib/components/Post/PostHeader.svelte";

    let files = $state();
    let src = $state();
    let className = $state();

    $effect(async function () {
        if (files && files.length > 0) {
            const file = files[0];
            let image = await getImageFromFile(file);

            src = image.src

            let aspectRatio = image.width / image.height;
            className = aspectRatio < 1 ? 'aspect-portrait' : aspectRatio > 1 ? 'aspect-landscape' : 'aspect-square'
        }
    })

    async function getImageFromFile(file) {
        const image = new Image();
        image.src = URL.createObjectURL(file);

        await image.decode();

        return image;
    }
</script>

<div>
    <PostHeader />
    <div>
        {#if !src}
        <label class="block w-full aspect-square bg-gray-30">
            <input type="file" name="post" id="post" bind:files class="hidden">
        </label>
        {:else}
            <img {src} alt="" class={['object-cover object-center', className]}>
        {/if}
    </div>
    <PostDetails />
</div>
