<script>
    import Device from '$lib/components/Device/Device.svelte';
    import TabBar from "$lib/components/Bar/TabBar.svelte";
    import StatusBar from "$lib/components/Bar/StatusBar.svelte";
    import NavigationBar from "$lib/components/Bar/NavigationBar.svelte";
    import StoryBar from "$lib/components/Bar/StoryBar.svelte";
</script>

<section class="min-h-screen flex justify-center items-center">
    <Device>
        <StatusBar />
        <div>
            <NavigationBar />
            <StoryBar />
        </div>
        <TabBar />
    </Device>
</section>
