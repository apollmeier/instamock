<script>
    let props = $props();
</script>

<div class={['rounded-full overflow-hidden size-5', props.class]}>
    {@render props?.children()}
</div>
