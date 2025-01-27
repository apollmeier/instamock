<script>
    import {onMount} from "svelte";

    let currentDateTime = new Date();

    onMount(() => {
        const interval = setInterval(() => {
            currentDateTime = new Date();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });

    function getHour(c) {
        return c.getHours();
    }
    function getMinute(c) {
        return c.getMinutes() < 10 ? "0" + c.getMinutes() : c.getMinutes();
    }
</script>

<section class="p-4 pb-2 flex flex-row">
    <time class="font-semibold">{getHour(currentDateTime)}:{getMinute(currentDateTime)}</time>
</section>
