<script>
    import NavigationBar from "$lib/components/Bar/NavigationBar.svelte";
    import Post from "$lib/components/Post/Post.svelte";
    import ScrollWrapper from "$lib/components/ScrollWrapper/ScrollWrapper.svelte";
    import StatusBar from "$lib/components/Bar/StatusBar.svelte";
    import StoryBar from "$lib/components/Bar/StoryBar.svelte";
    import TabBar from "$lib/components/Bar/TabBar.svelte";

    import {liveQuery} from "dexie";
    import {db} from "$lib/db";

    const posts = liveQuery(
        () => db.posts.toArray()
    );
</script>

<div class="h-full flex flex-col">
    <StatusBar/>
    <ScrollWrapper class="grow">
        <NavigationBar/>
        <StoryBar/>
        {#each $posts as post}
            <Post images={post.images}/>
        {/each}
    </ScrollWrapper>
    <TabBar/>
</div>
