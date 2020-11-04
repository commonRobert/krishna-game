<script lang="ts">
  import { afterUpdate, beforeUpdate, createEventDispatcher, onDestroy } from "svelte";

  const dispatch = createEventDispatcher();

  export let value;
  export let tickMillis = 1000;
  export let blinkAt = 5;
  export let stopAt = 1;

  const tick = () => {
    if (value === stopAt) return dispatch("runOut");
    value -= 1;
  };

  // I used the following logic instead of an interval to properly reset the timeout when the a new value is passed from the outside.
  let timeout;
  afterUpdate(() => (timeout = setTimeout(tick, tickMillis)));
  beforeUpdate(() => clearTimeout(timeout));
  onDestroy(() => clearTimeout(timeout));
</script>

<style>
  .blinking {
    color: red;
    animation: blinker 0.75s linear infinite;
  }
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
</style>

<h3 class={value > blinkAt ? '' : 'blinking'}>{value}</h3>
