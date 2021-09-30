// const [[N, M], [...data]] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(el => +el));
const [[N, M], [...data]] = '3 1\n4 4 2'.split('\n').map(e => e.split(' ').map(el => +el));
data.sort((a, b) => a - b)
let answer = [];
let visited = Array(N).fill(false);
const DFS = (cnt, arr) => {
  if (cnt == M) {
    answer.push(arr.trimEnd());
    return;
  }
  for (let i = 0; i < N; i++) {
    if (visited[i] == false) {
      visited[i] = true;
      DFS(cnt + 1, arr + `${data[i]} `);
      visited[i] = false;
    }
  }
}
DFS(0, '');
console.log([...new Set(answer)].join('\n'))