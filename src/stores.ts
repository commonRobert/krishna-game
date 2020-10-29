import { Writable, writable } from "svelte/store";

type GameStage = "MAIN-MENU" | "IN-GAME" | "POST-GAME";

export const gameStage: Writable<GameStage> = writable("MAIN-MENU");

type QuestionSet = {};

export const questionSet: Writable<QuestionSet> = writable(null);
