<script>
    import Device from "$lib/components/Device/Device.svelte";

    let { children } = $props();
</script>

<main class="min-h-screen flex justify-center items-center">
    <Device>
        {@render children()}
    </Device>
</main>

<style>
    @import 'overlayscrollbars/overlayscrollbars.css';
</style>
