<script lang="ts">
  import type { Question } from "../questions";
  import { createEventDispatcher } from "svelte";
  import { timeToSelectAnswer } from "../gameSettings";
  import Countdown from "./Countdown.svelte";
  import { randomElement } from "../util";

  const dispatch = createEventDispatcher();

  export let selectedQuestions: Question[];

  let currentQuestionNumber = 1;
  let currentQuestion = selectedQuestions[0];
  let timer;

  // for fifty-fifty
  let choiceActive = {
    1: true,
    3: true,
    2: true,
    4: true,
  };

  const HelperOption = (displayName, handler) => ({
    displayName,
    handler,
    available: true,
  });

  let helpOptions = {
    fiftyFifty: HelperOption("50/50", () => {
      const incorrectChoices = Object.keys(currentQuestion.answerChoices).filter(
        (choiceId) => choiceId !== currentQuestion.correctAnswerId.toString()
      );
      const choiceToLeave = randomElement(incorrectChoices);

      incorrectChoices.forEach((choiceId) => {
        if (choiceId !== choiceToLeave) choiceActive[choiceId] = false;
      });

      // TODO: kek?
      const _nextQuestion = nextQuestion;
      nextQuestion = () => {
        choiceActive = {
          1: true,
          3: true,
          2: true,
          4: true,
        };
        _nextQuestion();
        nextQuestion = _nextQuestion;
      };

      helpOptions.fiftyFifty.available = false;
    }),
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
        details = { win: false, failedQuestion: currentQuestion, questionNumber: currentQuestionNumber };
        break;
      case Outcomes.TIME_EXPIRED:
        details = { win: false, failedQuestion: currentQuestion, questionNumber: currentQuestionNumber };
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
    if (`choice-${currentQuestion.correctAnswerId}` !== e.target.id) return endGame(Outcomes.INCORRECT_ANSWER);

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
  {#each currentQuestion.answerChoices as choice}
    <button on:click={handleChoice} id="choice-{choice.id}" disabled={!choiceActive[choice.id]}>{choice.value}</button>
  {/each}
  <Countdown value={timeToSelectAnswer} bind:this={timer} on:expire={() => endGame(Outcomes.TIME_EXPIRED)} />
  <hr />
  {#each Object.entries(helpOptions) as [key, { available, handler, displayName }]}
    <button on:click={handler} disabled={!available} id={key}>{displayName}</button>
  {/each}
</div>
