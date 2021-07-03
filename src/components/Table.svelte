<script>
    import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

    export let table;
    export let id;
    let editing = false;

    function toggleEdit(){
        if(editing){
            console.log(table);
            dispatch('updated', {
                id:id,
                table:table
            } );
        }
        editing = !editing;
    }

    function delEntry(col, row){
        table[col].entries.splice(row,1);
        table=table;
        // table = table.filter( c => c.entries.filter( (_, i) => i !== row ))
        console.log(table);
    }

    function addEntry(col, row){
        table[col].entries = [...table[col].entries, "..."]
        console.log("Added to col", col)
    }

</script>

<div>
<button on:click={toggleEdit}>{editing ? "Save" : "Edit"}</button>
<div class="columns">
    {#each table as column, i}
        <div>
            <span>
                <h3>{column.header}</h3>
                <!-- {#if i == table.length-1}
                    <span><button on:click={toggleEdit}>!Edit</button></span>
                {/if} -->
            </span>
            {#each column.entries as entry, j}
                <div class="entry">   
                    <input type=checkbox/> 
                    {#if editing}
                        <span contenteditable=true bind:textContent={table[i].entries[j]}>{entry}</span>
                        <span><button class="button" on:click={() => delEntry(i,j)}>-</button></span>
                    {:else}
                        <span>{entry}</span>
                    {/if}
                </div>
                {#if editing && j == column.entries.length-1} 
                    <button on:click="{() => addEntry(i,j)}">+</button>
                {/if}
            {/each}
        </div>
    {/each}
</div>
</div>

<style>
    .columns{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    }

    .button {
       opacity: 0%;
       height: min-content;
    }

    .entry:hover .button {
        opacity:100%;
        border:none;
        background-color:lightcoral;
    }
</style>