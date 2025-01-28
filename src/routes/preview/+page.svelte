<script>
    import Device from '$lib/components/Device/Device.svelte';
    import TabBar from "$lib/components/Bar/TabBar.svelte";
    import StatusBar from "$lib/components/Bar/StatusBar.svelte";
    import NavigationBar from "$lib/components/Bar/NavigationBar.svelte";
    import StoryBar from "$lib/components/Bar/StoryBar.svelte";
    import Post from "$lib/components/Post/Post.svelte";
    import {OverlayScrollbarsComponent} from "overlayscrollbars-svelte";

</script>

<section class="min-h-screen flex justify-center items-center">
    <Device>
        <StatusBar/>
        <OverlayScrollbarsComponent defer options={{
            overflow: {x: 'hidden'},
            scrollbars: {
                autoHide: 'scroll',
                autoHideDelay: 500,
                autoHideSuspend: true
            }
        }} class="grow">
            <NavigationBar/>
            <StoryBar/>
            <section>
                <Post/>
            </section>
        </OverlayScrollbarsComponent>
        <TabBar/>
    </Device>
</section>
