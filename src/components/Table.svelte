<script>
    import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

    export let table;
    export let headers;
    export let id;
    let editing = false;

    function toggleEdit(){
        if(editing){
            // console.log(table);
            dispatch('updated', {
                id:id,
                table:table
            } );
        }
        editing = !editing;
    }

    function delEntry(col, row){
        table[col].splice(row,1);
        table=table;
        // table = table.filter( c => c.entries.filter( (_, i) => i !== row ))
        // console.log(table);
    }

    function addEntry(col, row){
        table[col] = [...table[col], "..."];
        console.log("Added to col", col);
    }

    function delCol(col){
        table.splice(col,1);
        headers.splice(col,1);
        table=table;
        headers=headers;
        console.log("deleted col", table);
    }

    function addCol(col){
        headers = [...headers, "New Column"];
        table = [...table, ["..."]];
        console.log("Added col", table);
    }

</script>

<div>
    <br>
    <span><button on:click={toggleEdit}>{editing ? "s" : "e"}</button></span>
    <br>
<div class="flex">
    {#each headers as header, i}
        <div class="column entry">
            <div class="entry">
                {#if editing}
                    <h3 contenteditable=true bind:textContent={headers[i]}>{header}</h3>
                    <button class="button danger" on:click={() => delCol(i)}>-</button>
                {:else}
                <h3>{header}</h3>
                {/if}
            </div>

            {#each table[i] as row, j}
                <div class="entry">   
                    <input type=checkbox/> 
                    {#if editing}
                        <span contenteditable=true bind:textContent={table[i][j]}>{row}</span>
                        <span><button class="button danger" on:click={() => delEntry(i,j)}>-</button></span>
                    {:else}
                        <span>{row}</span>
                    {/if}
                </div>

                {#if editing && j == table[i].length-1} 
                    <button on:click="{() => addEntry(i,j)}">+</button>
                {/if}
               
            {/each}

        </div>

        {#if i == table.length-1} 
            {#if editing}
            <button on:click="{() => addCol(i)}">+</button>
            {/if}
            
        {/if} 
    {/each}
   
</div> 
</div>

<style>
    .flex{
        display: inline-flex;

    }

    .column{
        margin-inline: 20 px;
    }

    .button {
       opacity: 0%;
       height: min-content;
    }

    .entry:hover > .button {
        opacity:100%;
        border:none;
    }

    .danger{
        background-color:lightcoral;
    }
</style>