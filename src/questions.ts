import { randomElement } from "./util";

export type Question = {
  id: number;
  questionText: string;
  correctAnswerId: number;
  difficulty: number;
  answerChoices: {
    id: number;
    value: string;
  }[];
  comment: string;
};

export const selectQuestionsForGame: (
  questionPool: Question[],
  gameLength: number,
  playedIds: number[]
) => Question[] = (questionPool, gameLength, playedIds = []) => {
  const sortedPool = questionPool
    .sort((q1, q2) => q1.difficulty - q2.difficulty)
    .reduce(
      (acc, next) => {
        const key = playedIds.includes(next.id) ? "played" : "notPlayed";
        acc[key].push(next);
        return acc;
      },
      { notPlayed: [], played: [] }
    );

  let selection = balancedSelection(sortedPool.notPlayed, gameLength);

  if (selection.length < gameLength) {
    selection = selection
      .concat(balancedSelection(sortedPool.played, gameLength - selection.length))
      .sort((q1, q2) => q1.difficulty - q2.difficulty);
  }

  return selection;
};

const balancedSelection = <T>(pool: T[], selectionLength: number): T[] => {
  if (pool.length <= selectionLength) {
    return pool;
  }

  const baseChunkLength = Math.floor(pool.length / selectionLength);
  let numberOfExtendedChunks = pool.length % selectionLength;

  const selection = [];

  let i = 0;
  let j = baseChunkLength;

  // TODO: To mitigate unbalanced difficulty spread in the pool, we can adjust each chunk length depending on the running value, determined from the difference between the baseChunkLength and the number of questions of a given difficulty.

  while (selectionLength--) {
    if (numberOfExtendedChunks-- > 0) j += 1;

    selection.push(randomElement(pool.slice(i, j)));

    i = j;
    j += baseChunkLength;
  }

  return selection;
};
