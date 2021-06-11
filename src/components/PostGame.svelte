<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let gameResult;

  const dispatch = createEventDispatcher();

  const playAgain = () => {
    dispatch("playAgain");
  };
</script>

{#if gameResult.win}
  <pre>Правильных ответов:{gameResult.score} из {gameResult.gameLength}</pre>
{:else}
  <pre>Время истекло на вопросе #{gameResult.questionNumber}: "{gameResult.failedQuestion.questionText}"</pre>
  {#if gameResult.failedQuestion.comment}
    <pre>Комментарий к вопросу: "{gameResult.failedQuestion.comment}"</pre>
  {/if}
{/if}
<button on:click={playAgain}>Играть еще</button>
