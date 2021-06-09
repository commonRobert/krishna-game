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
  $: answerChoices = shuffle([
    ...currentQuestion.incorrectOptions,
    currentQuestion.correctAnswer,
  ]);

  const handleChoice = (e) => {
    if (currentQuestion.correctAnswer === e.target.textContent)
      score += 1;
      // return endGame(Outcomes.INCORRECT_ANSWER);
    if (currentQuestionNumber === selectedQuestions.length)
      return endGame(Outcomes.WIN);

    currentQuestionNumber += 1;
    timer.reset(timeToSelectAnswer);
  };

  const helpOptions = {
    fiftyFifty: {
      displayName: "50/50",
      handler() {
        currentQuestion.incorrectOptions = [
          randomElement(currentQuestion.incorrectOptions),
        ];
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
    let details;

    switch (outcome) {
      case Outcomes.WIN:
        details = { win: true,
        score: score,
        gameLength: selectedQuestions.length };
        break;
      // case Outcomes.INCORRECT_ANSWER:
      //   details = {
      //     win: false,
      //     failedQuestion: currentQuestion,
      //     questionNumber: currentQuestionNumber,
      //   };
      //   break;
      case Outcomes.TIME_EXPIRED:
        details = {
          win: false,
          failedQuestion: currentQuestion,
          questionNumber: currentQuestionNumber,
        };
        break;
    }

    dispatch("endGame", details);
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
  {#each answerChoices as choice}
    <button on:click={handleChoice}>{choice}</button>
  {/each}
  <Countdown
    value={timeToSelectAnswer}
    bind:this={timer}
    on:expire={() => endGame(Outcomes.TIME_EXPIRED)} />
  <hr />
  {#each Object.entries(helpOptions) as [key, { available, handler, displayName }]}
    <button
      on:click={handler}
      disabled={!available}
      id={key}>{displayName}</button>
  {/each}
</div>
