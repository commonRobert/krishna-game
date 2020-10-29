<script lang="ts">
  import { gameStage, questionSet } from "../stores";
  import MainMenu from "./MainMenu.svelte";
  import InGame from "./InGame.svelte";
  import PostGame from "./PostGame.svelte";
  import { onMount } from "svelte";

  onMount(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    $questionSet = await res.json();
  });

  let selectedQuestions;
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
  {#if $gameStage === 'IN-GAME'}
    <InGame {selectedQuestions} />
  {:else if $gameStage === 'POST-GAME'}
    <PostGame />
  {:else}
    <MainMenu bind:selectedQuestions />
  {/if}
</main>
