<script lang="ts">
  import type { Question } from "../questions";
  import { createEventDispatcher } from "svelte";
  import { timeToSelectAnswer } from "../gameSettings";
  import Countdown from "./Countdown.svelte";

  const dispatch = createEventDispatcher();

  export let selectedQuestions: Question[];

  let currentQuestionNumber = 1;
  let currentQuestion = selectedQuestions[0];
  let timerValue = timeToSelectAnswer;

  const nextQuestion = () => {
    currentQuestion = selectedQuestions[currentQuestionNumber];
    currentQuestionNumber += 1;
    timerValue = timeToSelectAnswer;
  };

  const endGame = (details) => dispatch("endGame", details);

  const handleChoice = (e) => {
    if (`choice-${currentQuestion.correctAnswerId}` !== e.target.id)
      return endGame({
        win: false,
        failedQuestion: currentQuestion,
        questionNumber: currentQuestionNumber,
      });

    if (currentQuestionNumber === selectedQuestions.length)
      return endGame({
        win: true,
      });

    nextQuestion();
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
  <Countdown
    bind:value={timerValue}
    on:commenced={() => endGame({
        win: false,
        failedQuestion: currentQuestion,
        questionNumber: currentQuestionNumber,
      })} />
</div>
