<script lang="ts">
  import type { Question } from "../questions";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let selectedQuestions: Question[];

  let currentQuestionNumber = 1;
  let currentQuestion = selectedQuestions[0];
  console.log(selectedQuestions);

  const handleChoice = (e) => {
    if (`choice-${currentQuestion.correctAnswerId}` !== e.target.id) {
      dispatch("endGame", {
        win: false,
        failedQuestion: currentQuestion,
        questionNumber: currentQuestionNumber,
      });
      return;
    }

    if (currentQuestionNumber === selectedQuestions.length) {
      dispatch("endGame", {
        win: true,
      });
      return;
    }

    currentQuestion = selectedQuestions[currentQuestionNumber];
    currentQuestionNumber += 1;
  };
</script>

<style>
  pre {
    color: orange;
  }
</style>

<div>
  <pre>Вопрос #{currentQuestionNumber}</pre>
  <pre>{currentQuestion.questionText}</pre>
  {#each currentQuestion.answerChoices as choice}
    <button
      on:click={handleChoice}
      id="choice-{choice.id}">{choice.value}</button>
  {/each}
</div>
