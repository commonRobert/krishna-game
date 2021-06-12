<script lang="ts">
  import type { Question } from "../questions";
  import { createEventDispatcher } from "svelte";
  import { timeToSelectAnswer } from "../gameSettings";
  import Countdown from "./Countdown.svelte";
  import { randomElement, shuffle } from "../util";

  const dispatch = createEventDispatcher();

  export let selectedQuestions: Question[];

  let currentQuestionNumber = 1;
  let score = 0;
  let timer, currentQuestion, answerChoices;

  $: currentQuestion = selectedQuestions[currentQuestionNumber - 1];
  $: answerChoices = shuffle([...currentQuestion.incorrectOptions, currentQuestion.correctAnswer]);

  const handleChoice = (choiceText) => {
    if (currentQuestion.correctAnswer === choiceText) score += 1;
    // return endGame(Outcomes.INCORRECT_ANSWER);
    if (currentQuestionNumber === selectedQuestions.length) return endGame(Outcomes.WIN);

    currentQuestionNumber += 1;
    timer.reset(timeToSelectAnswer);
  };

  const helpOptions = {
    fiftyFifty: {
      displayName: "50/50",
      handler() {
        currentQuestion.incorrectOptions = [randomElement(currentQuestion.incorrectOptions)];
        helpOptions.fiftyFifty.available = false;
      },
      available: true,
    },
  };

  const enum Outcomes {
    WIN,
    INCORRECT_ANSWER,
    TIME_EXPIRED,
  }
  const endGame = (outcome: Outcomes) => {
    dispatch("endGame", { score, gameLength: selectedQuestions.length });
  };
</script>

<div>
  <p class="withColor">
    Вопрос #{currentQuestionNumber} из {selectedQuestions.length}
  </p>
  <p>{currentQuestion.questionText}</p>
  {#each answerChoices as choice}
    <ul>
      <button on:click={(e) => handleChoice(e.currentTarget.textContent)}>{choice}</button>
    </ul>
  {/each}
  <Countdown value={timeToSelectAnswer} bind:this={timer} on:expire={() => handleChoice(null)} />
  <hr />
  {#each Object.entries(helpOptions) as [key, { available, handler, displayName }]}
    <button on:click={handler} disabled={!available} id={key}>{displayName}</button>
  {/each}
</div>

<style>
  p.withColor {
    color: orange;
    flex-wrap: wrap;
  }
  p {
    font-size: 20px;
    margin-block-start: 0px;
  }
  div {
    flex-wrap: wrap;
    max-width: 240px;
    margin: 0 auto;
    text-align: center;
  }
  ul {
    padding-inline-start: 0px;
    margin-block-end: 0px;
    margin-block-start: 0px;
  }
  button {
    width: 240px;
    font-size: 16px;
  }
</style>
