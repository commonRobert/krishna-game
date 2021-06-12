<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { chapterPlayed, playerName } from "../stores";

  export let gameResult;

  const dispatch = createEventDispatcher();

  const playAgain = () => {
    dispatch("playAgain");
  };
</script>

<pre>Правильных ответов: {gameResult.score} из {gameResult.gameLength}</pre>
<pre>Ваше Имя: {$playerName}. Глава: {$chapterPlayed}</pre>

<button on:click={playAgain}>Играть еще</button>
