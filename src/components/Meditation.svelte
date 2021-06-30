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
    <button on:click={() => track = tracks[0]}>5 min</button>
    <button on:click={() => track = tracks[1]}>10 min</button>
    <button on:click={() => track = tracks[2]}>20 min</button>
    <AudioPlayer src={track}/>
</div>
