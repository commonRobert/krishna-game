import { Writable, writable } from "svelte/store";
import type { Question } from "./questions";

export const questionSets: Writable<{ [k in string]: Question[] }> = writable(
  null
);
