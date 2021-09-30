// const [[N, M], [...data]] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(el => +el));
const [[N, M], [...data]] = '3 1\n4 5 2'.split('\n').map(e => e.split(' ').map(el => +el));
data.sort((a, b) => a - b)
let answer = '';
let visited = Array(N).fill(false);
const DFS = (n, cnt, arr) => {
  if (cnt == M) {
    answer += arr.trim() + '\n';
    return;
  }
  if (n >= N) return;
  DFS(n, cnt + 1, arr + ` ${data[n]}`);
  DFS(n + 1, cnt, arr);
}
DFS(0, 0, '');
console.log(answer.trim())