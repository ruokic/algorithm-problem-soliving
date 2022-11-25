const [L, ad] = require("fs")
  .readFileSync(require("path").join(__dirname, "dev/stdin"))
  .toString()
  .split("\n");

function getPi(str) {
  const len = str.length;
  const pi = Array(len).fill(0);
  let begin = 1,
    matched = 0;
  while (begin + matched < len) {
    if (str[begin + matched] === str[matched]) {
      matched++;
      pi[begin + matched - 1] = matched;
    } else {
      if (matched === 0) {
        begin++;
      } else {
        begin += matched - pi[matched - 1];
        matched = pi[matched - 1];
      }
    }
  }
  return pi;
}

function solution(str) {
  return L - getPi(str)[L - 1];
}

const answer = solution(ad);
console.log(answer);
