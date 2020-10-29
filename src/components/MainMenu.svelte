<script lang="ts">
  import { gameStage, questionSet } from "../stores";

  export let selectedQuestions;

  $: questionsReady = Boolean($questionSet);

  const startGame = () => {
    $gameStage = "IN-GAME";
    selectedQuestions = $questionSet;
  };
</script>

<style>
</style>

{#if questionsReady}
  <button on:click={startGame}>Играть</button>
{:else}
  <pre>Loading questions...</pre>
{/if}
