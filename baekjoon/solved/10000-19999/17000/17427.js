const input = [];
const sol = (input) => {
  let N = +input[0];
  let answer = 0;
  for (let i = 1; i < N + 1; i++) {
    answer += Math.floor(N / i) * i;
  }
  return answer;
}
require("readline").createInterface(process.stdin, process.stdout)
.on("line", (line) => input.push(line))
.on("close", () => {
  console.log(sol(input))
  process.exit();
});