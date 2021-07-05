<script>
	// import { onMount } from "svelte";
	import Meditation from "./components/Meditation.svelte";
	import Nav from "./components/Nav.svelte";
	import Table from "./components/Table.svelte";
    import TextArea from "./components/TextArea.svelte";
// import Component from "./components/Component.svelte";

	
	let components = [
						{type: Nav, props: {}},
						{type: Table, props: {  id: "reminder-table",
												headers: ["Morning", "Afternoon", "Night"],
												table: [["Meds", "Brush", "Water", "Sun"],
														["Walk", "Meditate", "Water", "Lunch"],
														["Meds", "Meditate", "Read", "Stretch"]]}

												// table: [ {header: "Morning", entries: ["Meds", "Brush", "Water", "Sun"]},
												// 	   {header: "Afternoon", entries: ["Walk", "Meditate", "Water", "Lunch"]} ]}
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
</script>

<main>
	{#each components as component}
		<!-- <Component props={component}/> -->

		<svelte:component this={component.type} on:updated={update} {...component.props}/>
	{/each}
</main>


<style>
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>