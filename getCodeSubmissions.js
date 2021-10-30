import axios from 'axios';
import fs from 'fs';
import fixFormat from './fixFormat.js';

let submissionId = [];
let finished = 1;

const appendCode = (id, code, path) => {
  fs.appendFileSync(path, `\n${id}	${JSON.stringify(code)}`);
};

const getCodeSubmissions = async (problemId, language, submissionSize) => {
  const { data } = await axios.get(
    `https://judgeapi.u-aizu.ac.jp/solutions/problems/${problemId}/lang/${language}/rating?page=0&size=${submissionSize}`
  );
  for (let i = 0; i < data.length; i++) {
    if (data[i].policy !== 'private') submissionId.push(data[i].judgeId);
  }
  console.log(
    `${submissionId.length} total public submission out of ${
      Object.keys(data).length
    }`
  );

  for (let j = 0; j < submissionId.length; j++) {
    const { data } = await axios.get(
      `https://judgeapi.u-aizu.ac.jp/reviews/${submissionId[j]}`
    );

    const formattedCode = fixFormat(data.sourceCode);

    appendCode(submissionId[j], formattedCode, './codes.tsv');
    console.log(`${finished}/${submissionId.length} ✔️`);
    finished++;
  }
  return;
};

export default getCodeSubmissions;
