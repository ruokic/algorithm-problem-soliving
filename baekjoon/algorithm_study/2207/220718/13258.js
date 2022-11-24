const data = require("fs")
  .readFileSync(require("path").join(__dirname, "dev/stdin"))
  .toString()
  .split("\n");

const N = +data[0];
const accounts = data[1].split(" ").map((e) => +e);
const J = +data[2];
const C = +data[3];

let total = accounts.reduce((acc, e) => acc + e, 0);
let answer = accounts[0];

for (let i = 0; i < C; i++) {
  answer += (J * answer) / total;
  total += J;
}

console.log(answer);
