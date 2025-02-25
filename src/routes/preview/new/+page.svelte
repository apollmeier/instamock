<script>
    import {goto} from "$app/navigation";
    import {flip} from "svelte/animate";
    import {dndzone} from "svelte-dnd-action";
    import {filedrop} from "$lib/actions/filedrop.svelte.js";
    import StatusBar from "$lib/components/Bar/StatusBar.svelte";
    import ScrollWrapper from "$lib/components/ScrollWrapper/ScrollWrapper.svelte";
    import IconClose from "~icons/instamock/Close";
    import {readAsDataURL} from "$lib/utilities/file.js";
    import {db} from "$lib/db";
    import PostImage from "$lib/components/Post/PostImage.svelte";
    import PostSlider from "$lib/components/Post/PostSlider.svelte";

    let items = $state([])
    let itemId = 0
    const flipDurationMs = 300;

    async function handleFileDrop(e) {
        const {files, errors} = e.detail;

        if (errors.length > 0) {
            throw new Error(errors);
        }

        let images = await Promise.all(files.map((file) => {
            return readAsDataURL(file)
        }));

        images.forEach((image) => {
            items.push({
                id: itemId,
                image: image
            })

            itemId++
        });
    }

    function handleDnd(e) {
        items = e.detail.items;
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (items.length <= 0) {
            return
        }

        let images = items.map((item) => {
            return item.image
        })

        await db.posts.add({
            images: $state.snapshot(images)
        });

        await goto('/preview')
    }

    let preview = $derived.by(() => {
        return items.map((item) => item.image)
    })
</script>

<form onsubmit={handleSubmit} use:filedrop={{accept:['image/png', 'image/jpeg'], max: 1024}} onfiledrop={handleFileDrop} class="h-full bg-gray-100 text-white flex flex-col">
    <StatusBar/>
    <div class="flex gap-5 items-center bg-gray-100 p-4 py-2">
        <a href="/preview">
            <IconClose/>
        </a>
        <h2 class="text-xl font-bold mr-auto">New post</h2>
        <button class="text-sm text-blue-60 disabled:text-gray-80 font-bold cursor-pointer disabled:cursor-default" disabled={items.length <= 0}>Save</button>
    </div>
    <ScrollWrapper class="grow">
        <div class="aspect-square bg-gray-80">
            {#if preview.length > 0}
                {#if preview.length > 1}
                    <PostSlider images={preview}/>
                {:else}
                    <PostImage image={preview[0]}/>
                {/if}
            {/if}
        </div>
        <div class="bg-gray-100 p-2 sticky top-0">
            <p>Drop your files here</p>
        </div>
        <div class="grow grid grid-cols-3 gap-1 auto-rows-min" onconsider={handleDnd} onfinalize={handleDnd} use:dndzone="{{items, flipDurationMs}}">
            {#each items as item(item.id)}
                <div animate:flip="{{duration: flipDurationMs}}">
                    <img src={item.image.data} alt={item.image.name} class="aspect-square object-cover object-center rounded">
                </div>
            {/each}
        </div>
    </ScrollWrapper>
</form>
