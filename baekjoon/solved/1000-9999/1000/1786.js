const [T, P] = require("fs")
  .readFileSync(require("path").join(__dirname, "dev/stdin"))
  .toString()
  .split("\n");

function getPi(str) {
  const pi = Array(str.length).fill(0);
  let begin = 1,
    matched = 0;
  while (begin + matched < str.length) {
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

function kmp(str, pattern) {
  let count = 0;
  const answer = [];
  let matched = 0;
  const pi = getPi(pattern);
  for (let i = 0; i < str.length; i++) {
    while (matched > 0 && str[i] !== pattern[matched]) {
      matched = pi[matched - 1];
    }
    if (str[i] === pattern[matched]) {
      matched++;
      if (matched === pattern.length) {
        answer.push(i - pattern.length + 2);
        count++;
        matched = pi[matched - 1];
      }
    }
  }
  return { count, answer };
}

const { count, answer } = kmp(T, P);
console.log(count);
console.log(...answer);
