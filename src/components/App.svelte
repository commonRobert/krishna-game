<script lang="ts">
  import { gameStage } from "../stores";
  import MainMenu from "./MainMenu.svelte";
  import InGame from "./InGame.svelte";
  import PostGame from "./PostGame.svelte";
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
    <InGame />
  {:else if $gameStage === 'POST-GAME'}
    <PostGame />
  {:else}
    <MainMenu />
  {/if}
</main>
