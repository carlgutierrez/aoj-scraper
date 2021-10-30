# Aizu Online Judge Code Scraper

A JavaScript based scraper used to get code submissions using [Aizu Online Judge API](http://developers.u-aizu.ac.jp/index)

## Usage

change the `problemId`, `language` and `submissionSize` in [index.js](./index.js)

| Variable       |  Type  | Required |                                          Description                                          |  Example   |
| -------------- | :----: | :------: | :-------------------------------------------------------------------------------------------: | :--------: |
| problemId      | string |   true   |  Problem ID from [Aizu Online Judge Courses](https://onlinejudge.u-aizu.ac.jp/courses/list)   | `ITP1_2_C` |
| language       | string |   true   |                              Programming language of submission                               | `Python3`  |
| submissionSize | number |   true   | The size of the submission list request, can be greater than the total number of submissions. |   `500`    |

to run code type in terminal

```console
$ npm install
$ node index.js
```

## Output

list of codes will be save on [codes.tsv](./codes.tsv)

| Name    | Type   | Description               |
| ------- | ------ | ------------------------- |
| judgeId | number | source code submission ID |
| code    | string | stringified source code   |
