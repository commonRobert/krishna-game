<script lang="ts">
  import MainMenu from "./MainMenu.svelte";
  import InGame from "./InGame.svelte";
  import PostGame from "./PostGame.svelte";
  import type { Question } from "../questions";
  import { chapterPlayed, playerName } from "../stores";
  import { reportResult } from "../spreadsheetApi";

  type GameStage = "MAIN-MENU" | "IN-GAME" | "POST-GAME";
  let gameStage: GameStage = "MAIN-MENU";

  let selectedQuestions: Question[];
  let gameResult;

  const startGame = ({ detail }) => {
    selectedQuestions = detail.questionSet;
    gameStage = "IN-GAME";
  };
  const endGame = ({ detail }) => {
    gameResult = detail;
    gameStage = "POST-GAME";

    reportResult({
      playerName: $playerName,
      chapterPlayed: $chapterPlayed,
      ...detail,
    });
  };
</script>

<main>
  {#if gameStage === "IN-GAME"}
    <InGame {selectedQuestions} on:endGame={endGame} />
  {:else if gameStage === "POST-GAME"}
    <PostGame {gameResult} on:playAgain={() => (gameStage = "MAIN-MENU")} />
  {:else}
    <MainMenu on:startGame={startGame} />
  {/if}
</main>

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
