import { Writable, writable } from "svelte/store";

type GameStage = "MAIN-MENU" | "IN-GAME" | "POST-GAME";

export const gameStage: Writable<GameStage> = writable("MAIN-MENU");
