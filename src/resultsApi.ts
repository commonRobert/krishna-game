export const publishResult = async (
  { playerName, chapterPlayed, score, gameLength },
) => {
  const currentDate = new Date().toLocaleString("sv", { timeZone: "EET" }); // Ukraine time
  const newResult = {
    tag: "p",
    children: [[
      currentDate,
      playerName,
      chapterPlayed,
      `${score} из ${gameLength}`,
    ].join(" | ")],
  };

  // RESET ANSWER PAGE
  // const header = [{
  //   tag: "b",
  //   children: [[
  //     "Дата",
  //     "Имя Студента",
  //     "Глава",
  //     "Правильных Ответов",
  //   ].join(" | ")],
  // }, { tag: "br" }];
  // const pageElements = header.concat(newResult);

  const pageElements = (await getPage()).result.content;
  pageElements.splice(2, 0, newResult); // Insert new result right after the header.

  const body = {
    access_token:
      "5ca21c6a6b0d313c0b72032da5e3179cdf0bf5726aa2a20af5aa46b92853",
    title: "Exam Results",
    author_name: "Krishna Exam",
    content: encodeURIComponent(JSON.stringify(pageElements)),
    return_content: true,
  };

  const bodyAsParams = Object.entries(body).map(
    ([key, value]) => `${key}=${value}`,
  ).join("&");

  await fetch(`https://api.telegra.ph/editPage/Exam-Results-06-11`, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: bodyAsParams,
  });
};

const getPage = async (
  page =
    "https://api.telegra.ph/getPage/Exam-Results-06-11?return_content=true",
) => {
  const res = await fetch(page);
  return await res.json();
};
