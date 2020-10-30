const API_KEY = "AIzaSyArSjo348Lbj37Njn-o8baYQ_p4CsAQXSA";
const sheetId = "1bKQJpX9-sXuFIKyquUp30cLYGhPtmvnQPQn9jzWidEY";
const sheetPage = 1;

// https://developers.google.com/sheets/api/reference/rest

export const sheetURL = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A2:H3?key=${API_KEY}`;
