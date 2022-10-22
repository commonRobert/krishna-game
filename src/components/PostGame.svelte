<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { chapterPlayed, playerName } from "../stores";

  export let gameResult;

  const dispatch = createEventDispatcher();

  const playAgain = () => {
    dispatch("playAgain");
  };
</script>

<pre>Правильных ответов: <b>{gameResult.score} из {gameResult.gameLength}</b></pre>
<pre>Ваше Имя: <b>{$playerName}</b>. Глава: <b>{$chapterPlayed}</b></pre>

<button on:click={playAgain}>Играть еще</button>
