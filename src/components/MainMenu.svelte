<script lang="ts">
  import { questionSet } from "../stores";
  import { question } from "../placeholders";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  $: questionsReady = Boolean($questionSet);

  const startGame = () =>
    dispatch("startGame", {
      selectedQuestions: [question, question],
    });
</script>

<style>
</style>

{#if questionsReady}
  <button on:click={startGame}>Играть</button>
{:else}
  <pre>Loading questions...</pre>
{/if}
