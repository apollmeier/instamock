<script>
    import Avatar from "$lib/components/Avatar/Avatar.svelte";
    import StoryRing from "$lib/components/Avatar/StoryRing.svelte";
</script>

<section class="px-2.5 pt-2 pb-4 border-b border-gray-30">
    <ul class="flex gap-5 *:shrink-0">
        <li>
            <Avatar src="https://picsum.photos/68" size="17" add>
                <StoryRing width="3px" gap="2px" status="new"/>
            </Avatar>
        </li>
        <li>
            <Avatar size="17">
                <StoryRing width="3px" gap="2px" status="read"/>
            </Avatar>
        </li>
        <li>
            <Avatar size="17">
                <StoryRing width="3px" gap="2px" status="read"/>
            </Avatar>
        </li>
        <li>
            <Avatar size="17">
                <StoryRing width="3px" gap="2px" status="read"/>
            </Avatar>
        </li>
        <li>
            <Avatar size="17">
                <StoryRing width="3px" gap="2px" status="read"/>
            </Avatar>
        </li>
    </ul>
</section>
