<script>
    import { SvelteDate } from 'svelte/reactivity';

    let date = new SvelteDate();

    const pad = (n) => n < 10 ? '0' + n : n;

    $effect(() => {
        const interval = setInterval(() => {
            date.setTime(Date.now());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });
</script>

<section class="p-4 pb-2 flex flex-row">
    <time class="font-semibold">{date.getHours()}:{pad(date.getMinutes())}</time>
</section>
