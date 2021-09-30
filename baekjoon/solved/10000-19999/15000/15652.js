// const [N, M] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(e => +e);
const [N, M] = [3, 1];
let answer = '';
const DFS = (n, cnt, arr) => {
  if (cnt == M) {
    answer += arr.trim() + '\n';
    return;
  }
  if (n > N) return;
  DFS(n, cnt + 1, arr + ` ${n}`);
  DFS(n + 1, cnt, arr);
}
DFS(1, 0, '');
console.log(answer.trim())