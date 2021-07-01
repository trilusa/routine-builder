<script>
	import { onMount } from "svelte";
	import AudioPlayer from "./components/AudioPlayer.svelte";
	import Meditation from "./components/Meditation.svelte";
	import Nav from "./components/Nav.svelte";
	import Table from "./components/Reminders.svelte";
	import TextArea from "./components/TextArea.svelte";
	
	let components = [
						{type: Nav, props: {}},
						{type: Table, props: {table: [ {header: "Morning", entries: ["Meds", "Brush", "Water", "Sun"]},
													   {header: "Afternoon", entries: ["Walk", "Meditate", "Water", "Lunch"]} ]}
						},
						{type: TextArea, props: {}},
						{type: Meditation, props: {}}
					];

	window.onbeforeunload = function () {
  		return 'Refresh?';
 	}
</script>


{#each components as component}
	<svelte:component this={component.type} {...component.props}/>
{/each}


<style>
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>