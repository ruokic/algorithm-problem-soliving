const input = [5, 1, 2, 10, 70, 10000];
const g = new Array(10 ** 6 + 1); 
for (let i = 0; i < 10 ** 6 + 1; i++) g[i] = 1;
const sol = () => {
  for (let i = 2; i < 10 ** 6 + 1; i++) {
    for (let j = i; j < (10 ** 6 + 1); j += i) {
      g[j] += i;
    }
    g[i] += g[i - 1];
  }
}
require("readline").createInterface(process.stdin, process.stdout)
.on("line", line => input.push(line))
.on("close", () => {
  sol();
  let idx = 1, len = +input[0] + 1;
  let ret = "";
  while(idx < len) {
    ret += g[+input[idx++]] + "\n";
  }
  console.log(ret)
  process.exit();
});