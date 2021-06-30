<script>
    let reminders = ["Meds", "Brush", "Water", "Sun"];
</script>


<div>
    <h1>Good Morning!</h1>
    <p>You got this man. Remember to be mindful.</p>
    <h2>Reminders</h2>
<!-- 
    <span>
    <label><input type=checkbox/> Meds</label>
    <label><input type=checkbox/> Brush</label>
    <label><input type=checkbox/> Water</label>
    <label><input type=checkbox/> Light</label>
    </span> -->

    {#each reminders as reminder}
        <label><input type=checkbox/> {reminder}</label>
    {/each}
</div>