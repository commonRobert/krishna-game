import { Writable, writable } from "svelte/store";

export const playerName = writable("");
export const chapterPlayed = writable("");
export const publishResultOn = writable(true);
