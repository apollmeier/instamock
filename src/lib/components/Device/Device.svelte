<script>
    let {children} = $props();
</script>

<div class="max-w-[375px] w-full aspect-9/18 border-4 border-black rounded-2xl overflow-hidden relative box-content">
    {@render children()}
</div>
