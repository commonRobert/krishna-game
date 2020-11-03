const API_KEY = "AIzaSyArSjo348Lbj37Njn-o8baYQ_p4CsAQXSA";
const prodSpreadsheetId = "1bKQJpX9-sXuFIKyquUp30cLYGhPtmvnQPQn9jzWidEY"; // PROD https://docs.google.com/spreadsheets/d/1bKQJpX9-sXuFIKyquUp30cLYGhPtmvnQPQn9jzWidEY/edit#gid=0
const testSpreadsheetId = "1Q9ahcYfATyr3JQXze1ogHaOBJJLajnTRf5UpHuM8tPA"; // TEST https://docs.google.com/spreadsheets/d/1bKQJpX9-1Q9ahcYfATyr3JQXze1ogHaOBJJLajnTRf5UpHuM8tPA/edit#gid=0

// https://developers.google.com/sheets/api/reference/rest

const reqUrl = (range, spreadsheetId = prodSpreadsheetId) =>
  `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${API_KEY}`;

const sheetColumns = {
  difficulty: 0,
  questionText: 1,
  answerChoices: [2, 3, 4, 5],
  correctAnswerId: 6,
  comment: 7,
};

const latinAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const firstColumnName =
  latinAlphabet[Math.min(...Object.values(sheetColumns).flat())];
const lastColumnName =
  latinAlphabet[Math.max(...Object.values(sheetColumns).flat())];

const makeCellRange = (sheetName, numberOfQuestions, startRow = 2) =>
  `${sheetName}!${firstColumnName}${startRow}:${lastColumnName}${
    startRow + numberOfQuestions
  }`;

const parseQuestions = (sheetData): Question[] =>
  sheetData.values.map((question, questionIndex) =>
    Object.entries(sheetColumns).reduce(
      (acc, [colName, colIndex]) => {
        acc[colName] =
          typeof colIndex === "number"
            ? question[colIndex]
            : colIndex.map((subColIndex, choiceIndex) => ({
                id: choiceIndex + 1,
                value: question[subColIndex],
              }));
        return acc;
      },
      { id: questionIndex }
    )
  );

export const fetchQuestions = async (sheetName, numberOfQuestions = 999) => {
  const res = await fetch(reqUrl(makeCellRange(sheetName, numberOfQuestions)));
  return parseQuestions(await res.json());
};

export type QuestionSet = "default";

export const placeholderQuestion = {
  id: 1,
  questionText: "What's the meaning of Life, the Universe, and Everything?",
  correctAnswerId: 2,
  difficulty: 1,
  answerChoices: [
    {
      id: 1,
      value: "idk lol",
    },
    {
      id: 2,
      value: "42",
    },
    {
      id: 3,
      value: "Gatorade",
    },
    {
      id: 4,
      value: "What was that again?",
    },
  ],
  comment: "18+24",
};

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

  let selection = selectElementsBalanced(sortedPool.notPlayed, gameLength);

  if (selection.length < gameLength) {
    selection = selection
      .concat(
        selectElementsBalanced(sortedPool.played, gameLength - selection.length)
      )
      .sort((q1, q2) => q1.difficulty - q2.difficulty);
  }

  return selection;
};

const selectElementsBalanced = <T>(pool: T[], selectionLength: number): T[] => {
  if (pool.length <= selectionLength) {
    return pool;
  }

  const baseChunkLength = Math.floor(pool.length / selectionLength);
  let numberOfExtendedChunks = pool.length % selectionLength;

  const selection = [];

  let i = 0;
  let j = baseChunkLength;

  while (selectionLength--) {
    if (numberOfExtendedChunks-- > 0) j += 1;

    selection.push(randomElement(pool.slice(i, j)));

    i = j;
    j += baseChunkLength;
  }

  return selection;
};

const randomElement = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];
