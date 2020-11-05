<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";

  const dispatch = createEventDispatcher();

  export let value;
  export let tickMillis = 1000;
  export let blinkAt = 5;
  export let stopAt = 1;

  export const reset = (newValue) => {
    clearInterval(interval);
    value = newValue;
    interval = setInterval(tick, tickMillis);
  };

  const tick = () => {
    if (value === stopAt) return dispatch("runOut");
    value -= 1;
  };

  let interval;
  onMount(() => {
    interval = setInterval(tick, tickMillis);
    return () => clearInterval(interval);
  });
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
