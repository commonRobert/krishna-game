<script lang="ts">
  import { chapterPlayed, playerName, publishResultOn } from "../stores";
  import { createEventDispatcher, onMount } from "svelte";
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

  const startGame = async (e) => {
    const questionSet = await fetchQuestions(e.target.textContent);
    $chapterPlayed = e.target.textContent;

    dispatch("startGame", {
      questionSet,
    });
  };

  let playerNameInput;
  onMount(() => {
    if ($playerName.length === 0) {
      playerNameInput.focus();
    }
  });
</script>

<input
  type="text"
  name="playerName"
  id="playerName"
  placeholder="Ваше Имя"
  bind:value={$playerName}
  bind:this={playerNameInput}
/>

<div id="publish">
  <input type="checkbox" name="publishResult" id="publishResult" checked={$publishResultOn} />
  <label for="publishResult">Опубликовать результат</label>
</div>

<br />
<div id="chapters">
  {#each questionSetNames as name}
    <button on:click={startGame} disabled={$playerName.length === 0}>{name}</button>
  {/each}
</div>

<style>
  div {
    margin: 0 auto;
  }
  label {
    display: inline;
  }
  div#publish {
    margin-top: 8px;
  }
  div#chapters {
    flex-wrap: wrap;
    max-width: 240px;
    margin: 0 auto;
    text-align: center;
  }
  button {
    width: 100px;
    margin-right: 16px;
    margin-top: 12px;
  }
  input#playerName {
    width: 220px;
    margin-right: 16px;
  }
</style>
