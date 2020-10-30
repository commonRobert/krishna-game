<script lang="ts">
  import { questionSet } from "../stores";
  import MainMenu from "./MainMenu.svelte";
  import InGame from "./InGame.svelte";
  import PostGame from "./PostGame.svelte";
  import { onMount } from "svelte";
  import type { Question } from "../types";
  import { sheetURL } from "../googleSheets";

  onMount(async () => {
    const res = await fetch(sheetURL);
    $questionSet = await res.json();
  });

  type GameStage = "MAIN-MENU" | "IN-GAME" | "POST-GAME";
  let gameStage: GameStage = "MAIN-MENU";

  let selectedQuestions: Question[];
  let result;

  const startGame = ({ detail }) => {
    selectedQuestions = detail.selectedQuestions;
    gameStage = "IN-GAME";
  };
  const endGame = ({ detail }) => {
    result = detail;
    gameStage = "POST-GAME";
  };
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  {#if gameStage === 'IN-GAME'}
    <InGame {selectedQuestions} on:endGame={endGame} />
  {:else if gameStage === 'POST-GAME'}
    <PostGame {result} />
  {:else}
    <MainMenu on:startGame={startGame} />
  {/if}
</main>
