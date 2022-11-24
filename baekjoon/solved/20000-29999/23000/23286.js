const data = require("fs")
  .readFileSync(require("path").join(__dirname, "dev/stdin"))
  .toString()
  .split("\n");

const [N, M, T] = data[0].split(" ").map((e) => +e);
const routes = Array(N + 1)
  .fill()
  .map((_) => Array(N + 1).fill(0xffffffff));
data.slice(1, 1 + M).map((e) => {
  const [u, v, h] = e.split(" ").map((el) => +el);
  routes[u][v] = h;
});
for (let i = 1; i < N + 1; i++) {
  for (let j = 1; j < N + 1; j++) {
    for (let k = 1; k < N + 1; k++) {
      routes[j][k] = Math.min(
        routes[j][k],
        Math.max(routes[j][i], routes[i][k])
      );
    }
  }
}
const answer = data
  .slice(1 + M)
  .map((e) => {
    const [start, end] = e.split(" ").map((el) => +el);
    const ret = routes[start][end];
    if (ret !== 0xffffffff) {
      return ret;
    } else {
      return -1;
    }
  })
  .join("\n");

console.log(answer);
