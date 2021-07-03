<script>
    import AudioPlayer from "./AudioPlayer.svelte";

    let tracks = [
		'https://s3.amazonaws.com/meditation-timers/5min-Meditation-Timer-Bell.mp3',
        'https://s3.amazonaws.com/meditation-timers/10min-Meditation-Timer-Bell.mp3',
        'https://s3.amazonaws.com/meditation-timers/20min-Meditation-Timer-Bell.mp3'
	];
    let track = tracks[0];
    
    
</script>

<div>
    <h2>Meditation</h2>
    <button class:selected="{track === tracks[0]}" on:click={() => track = tracks[0]}>5 min</button>
    <button class:selected="{track === tracks[1]}" on:click={() => track = tracks[1]}>10 min</button>
    <button class:selected="{track === tracks[2]}" on:click={() => track = tracks[2]}>20 min</button>
    <AudioPlayer src={track}/>
</div>

<style>
    button {
        background-color:lightgray;
        color: black;
    }

    .selected {
        background-color:rgb(51, 51, 250);
        color: white;
    }
</style>
