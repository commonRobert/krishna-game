<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";

  const dispatch = createEventDispatcher();

  export let value;
  export let tickMillis = 1000;
  export let blinkAt = 5;

  // value -= 1; while this is commented we're doing one extra tick

  const tick = () => {
    if (value === 0) return dispatch("commenced");

    value -= 1;
  };

  onMount(() => {
    const interval = setInterval(tick, tickMillis);
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
