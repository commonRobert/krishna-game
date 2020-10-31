<script lang="ts">
  import { questionSets } from "../stores";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  $: questionsReady = Boolean($questionSets?.default);

  const startGame = () =>
    dispatch("startGame", {
      selectedQuestionSet: "default",
    });
</script>

<style>
</style>

{#if questionsReady}
  <button on:click={startGame}>Играть</button>
{:else}
  <pre>Loading questions...</pre>
{/if}
