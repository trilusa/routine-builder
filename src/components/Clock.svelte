<script>
    import {clock} from "../timer.js";
    const time = clock();
</script>

<div>
    {$time.toLocaleString()}
</div>

<style>
div {
    float:right;
}

</style>