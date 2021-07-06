<script>
	// import { onMount } from "svelte"
	import { edit_store } from "./stores.js"
	import Meditation from "./components/Meditation.svelte";
	import Nav from "./components/Nav.svelte";
	import Table from "./components/Table.svelte";
    import TextArea from "./components/TextArea.svelte";
// import Component from "./components/Component.svelte";

	
	let components = [
						{type: Nav, props: {sites: [
												{text: "Workflowy", url: "https://beta.workflowy.com/"},
												{text: "Waking Up", url: "https://app.wakingup.com/"},
												{text: "Calendar", url: "https://calendar.google.com/calendar/r?opentasks=1"}
												]}},
						{type: Table, props: {  id: "reminder-table",
												headers: ["Morning", "Afternoon", "Night"],
												table: [["Meds", "Brush", "Water", "Sun"],
														["Walk", "Meditate", "Water", "Lunch"],
														["Meds", "Meditate", "Read", "Stretch"]]}
						},
						{type: TextArea, props: {}},
						{type: Meditation, props: {}}
					];
					
	window.onbeforeunload = function () {
  		return 'Refresh?';
	 }
	 
	function update(event){
		//TODO, add a way of updating a db
		// let new_comp = components.filter(c => c.props.id === event.detail.id);
		// components.map(obj => obj.props.id === event.detail.id ? obj.props=event.detail : obj=obj);
		// console.log(components);
	}

	let edit_state;
	edit_store.subscribe(val => {edit_state = val});

</script>

<main>
	<button style="float: right;" on:click={() => edit_store.update(state => !state)}>{edit_state ? "Save" : "Edit"}</button>
	<div>
	{#each components as component}
		<!-- <Component props={component}/> -->

		<svelte:component this={component.type} on:updated={update} {...component.props}/>
	{/each}
	</div>
</main>

<style>
	button {
		float: right;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>