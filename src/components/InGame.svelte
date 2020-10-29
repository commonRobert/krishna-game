<script lang="ts">
  import type { Question } from "../types";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let selectedQuestions: Question[];

  let currentQuestion = selectedQuestions[0];
  let currentQuestionNumber = 0;

  const handleChoice = (e) => {
    if (currentQuestion.correctAnswerId !== e.target.id) {
      // event.target.id is not what I think it is
      dispatch("endGame", {
        win: false,
        currentQuestion,
      });
      return;
    }

    if (currentQuestionNumber === selectedQuestions.length) {
      dispatch("endGame", {
        win: true,
      });
      return;
    }

    // currentQuestionNumber += 1;
    currentQuestion = selectedQuestions[++currentQuestionNumber]; // just wanna know if inititates re-render as assignment does
  };
</script>

<style>
  pre {
    color: orange;
  }
</style>

<div>
  <pre>{currentQuestionNumber + ': ' + currentQuestion.questionText}</pre>
  {#each currentQuestion.answerChoices as choice (choice.id)}
    <button on:click={handleChoice}>{choice.text}</button>
  {/each}
</div>
