<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let gameResult;

  const dispatch = createEventDispatcher();

  const playAgain = () => {
    dispatch("playAgain");
  };
</script>

<pre>Правильных ответов: {gameResult.score} из {gameResult.gameLength}</pre>

<button on:click={playAgain}>Играть еще</button>
