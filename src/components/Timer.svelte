<script>
    import { onDestroy } from "svelte";
    import {clock, toHuman} from "../timer.js";

    export let days, hours, minutes, seconds; // = 5 * 60 * 1000 //5 min in ms
    // let t0 = new Date();
    // const t = clock({interval:500});
    const INPUT = "INPUT"; const ACTIVE = "ACTIVE"; const DONE = "DONE"; const PAUSED = "PAUSED";

    let state = INPUT;
    // let set_time = days*24*60*60 + hours*60*60 + minutes*60 + seconds;
    let remaining;// = set_time; 
    let timer; 

    function onStart() {
        remaining = days*24*60*60 + hours*60*60 + minutes*60 + seconds;
       timer = setInterval(update, 1000);
    //    console.log(state);
       state = ACTIVE;
    //    console.log(state);
    }

    function update(){
        if(remaining > 0){
            remaining--;
        } else {
            state = DONE;
            clearInterval(timer);
        } 
    }

    function onPause(){
        state = PAUSED;
        clearInterval(timer);
    }

    function onReset(){
        remaining = days*24*60*60 + hours*60*60 + minutes*60 + seconds;
        state = INPUT;
        clearInterval(timer);
    }

    function onUnpause(){
        state = ACTIVE;
        timer = setInterval(update, 1000);
    }

    onDestroy(() =>  clearInterval(timer));
    
    $: time_str = toHuman(remaining);

</script>

<div class="flex">
    {#if state == INPUT}
        <!-- <input type="number" bind:value={days}>days : -->
        <input type="number" bind:value={hours}> <p>h</p>
        <input type="number" bind:value={minutes}> <p>m</p>
        <input type="number" bind:value={seconds}> <p>s </p> 
        <button on:click={onStart}>Start</button>
    {:else if state === DONE}
        <p>{time_str}</p> 
        <button on:click={onReset}>Reset</button>
    {:else if state === ACTIVE}
        <p>{time_str}</p>
        <button on:click={onPause}>Pause</button>
        <button on:click={onReset}>Reset</button>
    {:else if state === PAUSED}
        <p>{time_str}</p>
        <button on:click={onUnpause}>Restart</button>
        <button on:click={onReset}>Reset</button> 
    {/if}
</div>

<style>
    .flex {
        display: flex;
        margin: 10px;
    }
    input {
        width: 50px;
    }
</style>