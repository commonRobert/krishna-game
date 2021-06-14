<script lang="ts">
  import MainMenu from "./MainMenu.svelte";
  import InGame from "./InGame.svelte";
  import PostGame from "./PostGame.svelte";
  import type { Question } from "../questions";
  import { chapterPlayed, playerName, publishResultOn } from "../stores";
  import { publishResult } from "../resultsApi";

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

    if ($publishResultOn) {
      publishResult({
        playerName: $playerName,
        chapterPlayed: $chapterPlayed,
        ...detail,
      });
    }
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
    max-width: 300px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
