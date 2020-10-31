<script lang="ts">
  import type { Question } from "../questions";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let selectedQuestions: Question[];

  let currentQuestion = selectedQuestions.shift();
  let currentQuestionNumber = 1;

  const handleChoice = (e) => {
    if (`choice-${currentQuestion.correctAnswerId}` !== e.target.id) {
      dispatch("endGame", {
        win: false,
        currentQuestion,
      });
      return;
    }

    if (0 === selectedQuestions.length) {
      dispatch("endGame", {
        win: true,
      });
      return;
    }

    currentQuestion = selectedQuestions.shift();
  };
</script>

<style>
  pre {
    color: orange;
  }
</style>

<div>
  <pre>{currentQuestionNumber++ + ': ' + currentQuestion.questionText}</pre>
  {#each currentQuestion.answerChoices as choice}
    <button on:click={handleChoice} id="choice-{choice.id}">{choice.value}</button>
  {/each}
</div>
