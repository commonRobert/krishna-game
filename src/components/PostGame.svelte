<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let gameResult;

  const dispatch = createEventDispatcher();

  const playAgain = () => {
    dispatch("playAgain");
  };
</script>

{#if gameResult.win}
  <pre>Джай, победа!</pre>
{:else}
  <pre>Поражение...</pre>
  <pre>Вы ошиблись на вопросе #{gameResult.questionNumber}: "{gameResult.failedQuestion.questionText}"</pre>
  {#if gameResult.failedQuestion.comment}
    <pre>Комментарий к вопросу: "{gameResult.failedQuestion.comment}"</pre>
  {/if}
{/if}
<!-- <button on:click={playAgain}>Играть еще!</button> -->
