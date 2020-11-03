<script lang="ts">
  import { questionSets } from "../stores";
  import MainMenu from "./MainMenu.svelte";
  import InGame from "./InGame.svelte";
  import PostGame from "./PostGame.svelte";
  import { onMount } from "svelte";
  import { fetchQuestions, selectQuestionsForGame } from "../questions";
  import type { Question } from "../questions";

  onMount(async () => {
    $questionSets = {
      default: selectQuestionsForGame(await fetchQuestions("БГ 1-6"), 8, []),
    };
  });

  type GameStage = "MAIN-MENU" | "IN-GAME" | "POST-GAME";
  let gameStage: GameStage = "MAIN-MENU";

  let selectedQuestions: Question[];
  let gameResult;

  const startGame = ({ detail }) => {
    selectedQuestions = $questionSets[detail?.selectedQuestionSet || "default"];
    gameStage = "IN-GAME";
  };
  const endGame = ({ detail }) => {
    gameResult = detail;
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
    <PostGame {gameResult} on:playAgain={startGame} />
  {:else}
    <MainMenu on:startGame={startGame} />
  {/if}
</main>
