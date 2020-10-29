import { Writable, writable } from "svelte/store";

type QuestionSet = {};

export const questionSet: Writable<QuestionSet> = writable(null);
