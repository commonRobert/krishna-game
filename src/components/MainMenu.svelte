<script lang="ts">
  import { questionSets } from "../stores";
  import { createEventDispatcher } from "svelte";
  import { fetchQuestions } from "../spreadsheetApi";

  const dispatch = createEventDispatcher();
  const questionSetNames = [
    "1 глава",
    "2 глава",
    "3 глава",
    "4 глава",
    "5 глава",
    "6 глава",
    "7 глава",
    "8 глава",
    "9 глава",
    "10 глава",
    "11 глава",
    "12 глава",
    "13 глава",
    "14 глава",
    "15 глава",
    "16 глава",
    "17 глава",
    "18 глава",
  ];

  let loadingQuestions = false;

  const startGame = async (e) => {
    const questionSet = await fetchQuestions(e.target.textContent);

    dispatch("startGame", {
      questionSet,
    });
  };
</script>

{#each questionSetNames as name}
  <button on:click={startGame}>{name}</button>
{/each}

<style>
</style>
