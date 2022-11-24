const [N, ...words] = require("fs")
  .readFileSync(require("path").join(__dirname, "dev/stdin"))
  .toString()
  .split("\n");

let answer = 0xffffff;
const forwardCount = new Map();
const backwardCount = new Map();

words.forEach((word) => {
  const wrd = word.trim();
  const len = wrd.length;
  for (let i = 0; i < len; i++) {
    if (forwardCount.has(wrd[i])) {
      const currentCount = forwardCount.get(wrd[i]);
      answer =
        answer < currentCount + len - i - 1
          ? answer
          : currentCount + len - i - 1;
    }
    if (backwardCount.has(wrd[i])) {
      const currentCount = backwardCount.get(wrd[i]);
      answer = answer < currentCount + i ? answer : currentCount + i;
    }
  }
  for (let i = 0; i < len; i++) {
    if (forwardCount.has(wrd[i])) {
      const count = forwardCount.get(wrd[i]);
      forwardCount.set(wrd[i], count < i ? count : i);
    } else {
      forwardCount.set(wrd[i], i);
    }

    if (backwardCount.has(wrd[i])) {
      const count = backwardCount.get(wrd[i]);
      backwardCount.set(wrd[i], count < len - i - 1 ? count : len - i - 1);
    } else {
      backwardCount.set(wrd[i], len - i - 1);
    }
  }
});

console.log("forward");
let forkey = "";
let forval = "";
for (let [key, value] of forwardCount.entries()) {
  forkey += `${key} `;
  forval += `${value} `;
}
console.log(forkey);
console.log(forval);
console.log("backward");
let backey = "";
let bacval = "";
for (let [key, value] of backwardCount.entries()) {
  backey += `${key} `;
  bacval += `${value} `;
}
console.log(backey);
console.log(bacval);

if (answer === 0xffffff) {
  console.log(-1);
} else {
  console.log(answer);
}
