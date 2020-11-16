<script lang="ts">
  import type { Question } from "../questions";
  import { createEventDispatcher } from "svelte";
  import { timeToSelectAnswer } from "../gameSettings";
  import Countdown from "./Countdown.svelte";
  import { randomElement, shuffle } from "../util";

  const dispatch = createEventDispatcher();

  export let selectedQuestions: Question[];

  let currentQuestionNumber = 1;
  let currentQuestion = selectedQuestions[0];
  let timer;

  const HelperOption = (displayName, handler) => ({
    displayName,
    handler,
    available: true,
  });

  // TODO: probably should refactor
  let helpOptions = {
    // fiftyFifty: HelperOption("50/50", () => {
    // const incorrectChoices = Object.keys(choiceActive).filter(
    //   (choiceId) =>
    //     currentQuestion.answerChoices.find(({ id }) => id.toString() === choiceId).value !==
    //     currentQuestion.correctAnswer
    // );
    // const choiceToLeave = randomElement(incorrectChoices);
    // incorrectChoices.forEach((choiceId) => {
    //   if (choiceId !== choiceToLeave) choiceActive[choiceId] = false;
    // });
    // // TODO: kek?
    // const _nextQuestion = nextQuestion;
    // nextQuestion = () => {
    //   choiceActive = {
    //     1: true,
    //     2: true,
    //     3: true,
    //     4: true,
    //   };
    //   _nextQuestion();
    //   nextQuestion = _nextQuestion;
    // };
    // helpOptions.fiftyFifty.available = false;
    // }),
  };

  let nextQuestion = () => {
    currentQuestion = selectedQuestions[currentQuestionNumber];
    currentQuestionNumber += 1;
    timer.reset(timeToSelectAnswer);
  };

  const endGame = (outcome: Outcomes) => {
    let details;

    switch (outcome) {
      case Outcomes.WIN:
        details = { win: true };
        break;
      case Outcomes.INCORRECT_ANSWER:
        details = {
          win: false,
          failedQuestion: currentQuestion,
          questionNumber: currentQuestionNumber,
        };
        break;
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

  enum Outcomes {
    WIN,
    INCORRECT_ANSWER,
    TIME_EXPIRED,
  }

  const handleChoice = (e) => {
    if (currentQuestion.correctAnswer !== e.target.textContent) return endGame(Outcomes.INCORRECT_ANSWER);
    if (currentQuestionNumber === selectedQuestions.length) return endGame(Outcomes.WIN);

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
  {#each shuffle([...currentQuestion.incorrectOptions, currentQuestion.correctAnswer]) as choice}
    <button on:click={handleChoice}>{choice}</button>
  {/each}
  <Countdown value={timeToSelectAnswer} bind:this={timer} on:expire={() => endGame(Outcomes.TIME_EXPIRED)} />
  <hr />
  <!-- {#each Object.entries(helpOptions) as [key, { available, handler, displayName }]}
    <button on:click={handler} disabled={!available} id={key}>{displayName}</button>
  {/each} -->
</div>
