<script>
    import {OverlayScrollbarsComponent} from "overlayscrollbars-svelte";

    import TabBar from "$lib/components/Bar/TabBar.svelte";
    import StatusBar from "$lib/components/Bar/StatusBar.svelte";
    import NavigationBar from "$lib/components/Bar/NavigationBar.svelte";
    import StoryBar from "$lib/components/Bar/StoryBar.svelte";
    import Post from "$lib/components/Post/Post.svelte";

    const scrollbarOption = {
        overflow: {x: 'hidden'},
        scrollbars: {
            autoHide: 'scroll',
            autoHideDelay: 500,
            autoHideSuspend: true
        }
    }
</script>

<div class="h-full flex flex-col">
    <StatusBar/>
    <OverlayScrollbarsComponent defer options={scrollbarOption} class="grow">
        <NavigationBar/>
        <StoryBar/>
        <section>
            <Post/>
        </section>
    </OverlayScrollbarsComponent>
    <TabBar/>
</div>
