<script>
    import {flip} from "svelte/animate";
    import {dndzone} from "svelte-dnd-action";
    import 'overlayscrollbars/overlayscrollbars.css'
    import {OverlayScrollbarsComponent} from "overlayscrollbars-svelte";
    import StatusBar from "$lib/components/Bar/StatusBar.svelte";
    import ScrollWrapper from "$lib/components/ScrollWrapper/ScrollWrapper.svelte";
    import IconClose from "~icons/instamock/Close";
    import {filedrop} from "$lib/actions/filedrop.svelte.js";

    const flipDurationMs = 300;

    let items = $state([])
    let itemId = 0

    function handleFileDrop(e) {
        e.detail.files.forEach((file) => {
            items.push({
                id: itemId,
                file: file,
                url: URL.createObjectURL(file)
            })
        })
    }

    function handleDnd(e) {
        items = e.detail.items;
    }

    $effect(() => {
        return () => {
            items.forEach((item) => {
                URL.revokeObjectURL(item.url)
            })
        }
    })
</script>

<section class="h-full bg-gray-100 text-white flex flex-col" onfiledropped={handleFileDrop} use:filedrop={['image/png', 'image/jpeg']}>
    <StatusBar/>
    <div class="flex gap-5 items-center bg-gray-100 p-4 py-2">
        <a href="/preview">
            <IconClose/>
        </a>
        <h2 class="text-xl font-bold mr-auto">New post</h2>
        <span class="text-sm text-blue-60 font-bold">Save</span>
    </div>
    <ScrollWrapper class="grow">
        <div class="grow grid grid-cols-3 gap-1 auto-rows-min" onconsider={handleDnd}
             onfinalize={handleDnd} use:dndzone="{{items, flipDurationMs}}">
            {#each items as item(item.id)}
                <div animate:flip="{{duration: flipDurationMs}}">
                    <img src={item.url} alt={item.name} class="aspect-square object-cover object-center rounded">
                </div>
            {/each}
        </div>
    </ScrollWrapper>
</section>
