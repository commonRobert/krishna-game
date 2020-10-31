const API_KEY = "AIzaSyArSjo348Lbj37Njn-o8baYQ_p4CsAQXSA";
const spreadsheetId = "1bKQJpX9-sXuFIKyquUp30cLYGhPtmvnQPQn9jzWidEY";

// https://developers.google.com/sheets/api/reference/rest

const reqUrl = (cellRange) =>
  `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${cellRange}?key=${API_KEY}`;

const sheetColumns = Object.entries({
  difficulty: 0,
  questionText: 1,
  answerChoices: [2, 3, 4, 5],
  correctAnswerId: 6,
  comment: 7,
});

const parseQuestions = (sheetData) =>
  sheetData.values.map((row) =>
    sheetColumns.reduce((acc, [key, rowIndex]) => ({
      ...acc,
      [key]:
        typeof rowIndex === "number"
          ? row[rowIndex]
          : rowIndex.map((rowIndex, index) => ({ id: index + 1, value: row[rowIndex] })),
    }))
  );

export const fetchQuestions = async (range) => {
  const res = await fetch(reqUrl(range));
  return parseQuestions(await res.json());
};

export const questionRanges = {
  default: "БГ 1-6!A2:H3",
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
