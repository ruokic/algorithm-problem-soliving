// const [[N, M], [...data]] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(el => +el));
const [[N, M], [...data]] = '4 4\n1231 1232 1233 1234'.split('\n').map(e => e.split(' ').map(el => +el));
data.sort((a, b) => a - b)
let answer = '';
let visited = Array(N).fill(false);
const DFS = (cnt, arr) => {
  if (cnt == M) {
    answer += arr.trim() + '\n';
    return;
  }
  for (let i = 0; i < data.length; i++) {
    if (visited[i] === false) {
      visited[i] = true;
      DFS(cnt + 1, arr + ` ${data[i]}`);
      visited[i] = false;
    }
  }
}
DFS(0, '');
console.log(answer.trim())