<script>
    import 'overlayscrollbars/overlayscrollbars.css'
    import {OverlayScrollbarsComponent} from "overlayscrollbars-svelte";

    const {
        class: className = '',
        children
    } = $props();

    const options =  {
        overflow: {x: 'hidden'},
        scrollbars: {
            autoHide: 'scroll',
            autoHideDelay: 500,
            autoHideSuspend: true
        }
    }
</script>

<OverlayScrollbarsComponent defer {options} class={className}>
    {@render children?.()}
</OverlayScrollbarsComponent>
