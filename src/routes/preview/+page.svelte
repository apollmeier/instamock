<script>
    import Device from '$lib/components/Device/Device.svelte';
    import TabBar from "$lib/components/TabBar/TabBar.svelte";


    import TabBar from "$lib/components/Bars/TabBar.svelte";
    import StatusBar from "$lib/components/Bars/StatusBar.svelte";
</script>

<section class="min-h-screen flex justify-center items-center">
    <Device>
        <StatusBar />
        <TabBar />
    </Device>
</section>
