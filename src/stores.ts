import { Writable, writable } from "svelte/store";
import type { QuestionSet, Question } from "./questions";

export const questionSets: Writable<{ [k in QuestionSet]: Question[] }> = writable(null);
