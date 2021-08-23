// 행렬 테두리 회전하기
// https://programmers.co.kr/learn/courses/30/lessons/77485

// 단순 구현문제이다.
// 테두리를 따라 반시계방향으로 기존 값을 다음값으로 덮어씌우는 방식으로 진행하였다.
// 반복문을 일반화시키기 힘들 것 같아서 그냥 진행하였다.

function solution(rows, columns, queries) {
  let answer = [];
  let arr = Array(rows).fill().map((_, i) => Array(columns).fill().map((_, j) => i * columns + j + 1));
  queries.map(e => {
      e = e.map(e => (e - 1));
      let [x1, y1, x2, y2] = e;
      let min = arr[x1][y1];
      let temp = arr[x1][y1];
      for (let i = x1; i < x2; i++) {
          arr[i][y1] = arr[i + 1][y1];
          if (min > arr[i][y1]) min = arr[i][y1];
      }
      for (let j = y1; j < y2; j++) {
          arr[x2][j] = arr[x2][j + 1];
          if (min > arr[x2][j]) min = arr[x2][j];
      }
      for (let i = x2; i > x1; i--) {
          arr[i][y2] = arr[i - 1][y2];
          if (min > arr[i][y2]) min = arr[i][y2];
      }
      for (let j = y2; j > y1 + 1; j--) {
          arr[x1][j] = arr[x1][j - 1];
          if (min > arr[x1][j]) min = arr[x1][j];
      }
      arr[x1][y1 + 1] = temp;
      answer.push(min)
  });
  return answer;
}