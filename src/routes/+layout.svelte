<script>
	import '../app.css';
    import 'overlayscrollbars/overlayscrollbars.css';

	let { children } = $props();
</script>

<main class="min-h-screen">
    {@render children()}
</main>
