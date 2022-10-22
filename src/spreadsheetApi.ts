import type { Question } from "./questions";

const API_KEY = "AIzaSyArSjo348Lbj37Njn-o8baYQ_p4CsAQXSA";

const questionSpreadsheets = {
  test: "1Q9ahcYfATyr3JQXze1ogHaOBJJLajnTRf5UpHuM8tPA", // https://docs.google.com/spreadsheets/d/1bKQJpX9-1Q9ahcYfATyr3JQXze1ogHaOBJJLajnTRf5UpHuM8tPA/edit#gid=0
  staging: "1bKQJpX9-sXuFIKyquUp30cLYGhPtmvnQPQn9jzWidEY", // https://docs.google.com/spreadsheets/d/1bKQJpX9-sXuFIKyquUp30cLYGhPtmvnQPQn9jzWidEY/edit#gid=0
  production: "1sbUus9VPcg22SZucx3bzmWsXBERRguiwsh168MgfKVM", // https://docs.google.com/spreadsheets/d/1sbUus9VPcg22SZucx3bzmWsXBERRguiwsh168MgfKVM/edit#gid=0
  exam: "1bKQJpX9-sXuFIKyquUp30cLYGhPtmvnQPQn9jzWidEY", // https://docs.google.com/spreadsheets/d/1bKQJpX9-sXuFIKyquUp30cLYGhPtmvnQPQn9jzWidEY/edit#gid=0
};

// https://developers.google.com/sheets/api/reference/rest

const getUrl = (range, spreadsheetId = questionSpreadsheets.exam) =>
  `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${API_KEY}`;

const sheetColumns: { [k in keyof Partial<Question>]: number | number[] } = {
  difficulty: 1,
  questionText: 2,
  correctAnswer: 3,
  incorrectOptions: [4, 5, 6],
  comment: 7,
};
const columnIndexes = Object.values(sheetColumns).flat();

const latinAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//const firstColumnName = latinAlphabet[Math.min(...columnIndexes)];
const firstColumnName = "A";
const maxColumnIndex = Math.max(...columnIndexes);
const lastColumnName = latinAlphabet[maxColumnIndex];

const makeCellRange = (sheetName, numberOfQuestions, startRow = 2) =>
  `${sheetName}!${firstColumnName}${startRow}:${lastColumnName}${startRow + numberOfQuestions}`;

const parseQuestions = (sheetData): Question[] =>
  sheetData.values
    .filter((row) => row.length >= maxColumnIndex) // The comment is optional
    .map((question, questionIndex) =>
      Object.entries(sheetColumns).reduce(
        (acc, [colName, colIndex]) => {
          acc[colName] =
            typeof colIndex === "number" ? question[colIndex] : colIndex.map((subColIndex) => question[subColIndex]);
          return acc;
        },
        { id: questionIndex + 1 }
      )
    );

export const fetchQuestions = async (sheetName, numberOfQuestions = 999) => {
  const res = await fetch(getUrl(makeCellRange(sheetName, numberOfQuestions)));
  return parseQuestions(await res.json());
};
