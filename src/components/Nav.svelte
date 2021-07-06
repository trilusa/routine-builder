<script>
    export let sites;
</script>

<span>
    {#each sites as site}
        <a href={site.url} target="_blank">{site.text} | </a>
    {/each}
</span>