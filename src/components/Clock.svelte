<script>
    import {timer} from "../timer.js";
    const clock = timer();
</script>
<div>
 {$clock.toLocaleString()}
</div>

<style>
div {
    float:right;
}

</style>