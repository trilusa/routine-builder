<script>
    import { edit_store } from "../stores.js"
	let edit_state;
	edit_store.subscribe(val => {edit_state = val});

    export let sites;
   
    let sites_editing = Array(sites.length).fill(false);
    console.log("from Nav:", edit_state);
    console.log("from Nav:", sites_editing);

    function addSite(){
        sites = [...sites, {text:"Link Name", url: "ex. https://google.com"}];
        sites_editing = [...sites_editing, true];
        console.log("from Nav:", sites, sites_editing);

        // sites_editing[sites.length-1] = true;
    }

    function removeSite(i){
        sites.splice(i,1);
        sites_editing.splice(i,1);
        sites=sites;
        sites_editing=sites_editing;

        // console.log("from Nav:", sites, sites_editing);

    }

</script>


<div class:flex={!edit_state}>
    {#each sites as site, i}
        {#if edit_state}
        <div>
            {#if sites_editing[i]}
                <input bind:value={site.url}>
                <input bind:value={site.text}>
            {:else}
                 <a href={site.url} target="_blank">{site.text}</a>
            {/if}
            <button on:click={() => sites_editing[i] = !sites_editing[i]}>{sites_editing[i] ? "Save": "Edit"}</button>
            <button class="danger" on:click={() => removeSite(i)}>-</button>
        </div>
        {:else}
            <a href={site.url} target="_blank">{site.text}</a>
        {/if}
    {/each}

    {#if edit_state}
        <button on:click={addSite}>+</button>
    {/if}
    </div>

<style>
    .flex{
        display: flex;
        flex-wrap: wrap;
        gap:20px;
    }
    .danger{
        background-color:lightcoral;
    }
</style>