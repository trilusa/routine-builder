<script>
	import Meditation from "./components/Meditation.svelte";
	import Reminders from "./components/Reminders.svelte";
	import TextArea from "./components/TextArea.svelte";

	window.onbeforeunload = function () {
  		return 'Refresh?';
 	}
</script>

<main>
	<Reminders/>
	<TextArea/>
	<Meditation/>
</main>

<style>
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>