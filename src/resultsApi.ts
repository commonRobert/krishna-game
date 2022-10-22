export const publishResult = async (
  { playerName, chapterPlayed, score, gameLength },
) => {
  // const base = [{
    //   tag: "b",
    //   children: [`Дата | Имя Студента | Глава | Правильных Ответов`],
    // }, { tag: "br" }];

  const currentResults = (await getResults()).result.content;
  const currentDate = new Date().toLocaleString();
  const newResult = currentResults.concat([
    {
      tag: "p",
      children: [
        `${currentDate} | ${playerName} | ${chapterPlayed} | ${score} из ${gameLength}`,
      ],
    },
  ]);

  const data = {
    access_token:
      "5ca21c6a6b0d313c0b72032da5e3179cdf0bf5726aa2a20af5aa46b92853",
    title: "Exam Results",
    author_name: "Krishna Exam",
    content: encodeURIComponent(JSON.stringify(newResult)),
    return_content: true,
  };

  const dataAsParams = Object.entries(data).reduce(
    (acc, [key, value]) => `${acc}${key}=${value}&`,
    "",
  );

  await fetch(`https://api.telegra.ph/editPage/Exam-Results-06-11`, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: dataAsParams,
  });
};

const getResults = async () => {
  const res = await fetch(
    "https://api.telegra.ph/getPage/Exam-Results-06-11?return_content=true",
  );
  return await res.json();
};
