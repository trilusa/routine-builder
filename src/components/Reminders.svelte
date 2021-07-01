<script>
    export let table; 
</script>

<div class="columns">
    {#each table as column}
        <div>
        <h3>{column.header}</h3>
            
                {#each column.entries as entry}
                    <label><input type=checkbox/> {entry}</label>
                {/each}
            
        </div>
    {/each}
</div>


<style>
    .columns{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
</style>