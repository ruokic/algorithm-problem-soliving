const [[N, M], t] = require("fs")
  .readFileSync(require("path").join(__dirname, "dev/stdin"))
  .toString()
  .split("\n")
  .map((e) => e.split(" ").map((el) => +el));

const concent = Array(M).fill(0);
t.sort((a, b) => b - a);

for (let i = 0; i < N; i++) {
  let idx = 0;
  concent[idx] += t[i];

  while (idx < M) {
    const left = idx * 2 + 1;
    const right = idx * 2 + 2;
    if (left < M && concent[idx] > concent[left]) {
      [concent[idx], concent[left]] = [concent[left], concent[idx]];
      idx = left;
    } else if (right < M && concent[idx] > concent[right]) {
      [concent[idx], concent[right]] = [concent[right], concent[idx]];
      idx = right;
    } else {
      break;
    }
  }
}

console.log(Math.max(...concent));
