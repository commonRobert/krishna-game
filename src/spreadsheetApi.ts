import type { Question } from "./questions";

const API_KEY = "AIzaSyArSjo348Lbj37Njn-o8baYQ_p4CsAQXSA";
const prodSpreadsheetId = "1bKQJpX9-sXuFIKyquUp30cLYGhPtmvnQPQn9jzWidEY"; // PROD https://docs.google.com/spreadsheets/d/1bKQJpX9-sXuFIKyquUp30cLYGhPtmvnQPQn9jzWidEY/edit#gid=0
const testSpreadsheetId = "1Q9ahcYfATyr3JQXze1ogHaOBJJLajnTRf5UpHuM8tPA"; // TEST https://docs.google.com/spreadsheets/d/1bKQJpX9-1Q9ahcYfATyr3JQXze1ogHaOBJJLajnTRf5UpHuM8tPA/edit#gid=0

// https://developers.google.com/sheets/api/reference/rest

const reqUrl = (range, spreadsheetId = prodSpreadsheetId) =>
  `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${API_KEY}`;

const sheetColumns: { [k in keyof Partial<Question>]: number | number[] } = {
  difficulty: 0,
  questionText: 1,
  correctAnswer: 2,
  incorrectOptions: [3, 4, 5],
  comment: 6,
};
const columnIndexes = Object.values(sheetColumns).flat();

const latinAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const firstColumnName = latinAlphabet[Math.min(...columnIndexes)];
const lastColumnName = latinAlphabet[Math.max(...columnIndexes)];

const makeCellRange = (sheetName, numberOfQuestions, startRow = 2) =>
  `${sheetName}!${firstColumnName}${startRow}:${lastColumnName}${startRow + numberOfQuestions}`;

const parseQuestions = (sheetData): Question[] =>
  sheetData.values
    .filter((row) => row.length >= Math.max(...columnIndexes)) // The the comment is optional
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
  const res = await fetch(reqUrl(makeCellRange(sheetName, numberOfQuestions)));
  return parseQuestions(await res.json());
};
