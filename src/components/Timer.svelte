<script>
    import { onMount } from "svelte";
    import {clock, toHuman} from "../timer.js";

    export let set_time; // = 5 * 60 * 1000 //5 min in ms
    let t0 = new Date();
    const t = clock({interval:500});
    let done = false;

    $: dt = $t - t0;
    $: elapsed = set_time - dt;
    $: time_str = toHuman(elapsed);
    $: dt > set_time ? done=true : {};
</script>
<br>

<div>
    {#if !done}
        {time_str}
    {:else}
        <b> Done!</b>
    {/if}
</div>