import type { Question } from "./questions";

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

// Should it be here, or on the questions file?
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
      { id: questionIndex + 1 }
    )
  );

export const fetchQuestions = async (sheetName, numberOfQuestions = 999) => {
  const res = await fetch(reqUrl(makeCellRange(sheetName, numberOfQuestions)));
  return parseQuestions(await res.json());
};
