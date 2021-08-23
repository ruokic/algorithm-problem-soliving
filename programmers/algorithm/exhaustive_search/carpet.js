// 카펫
// https://programmers.co.kr/learn/courses/30/lessons/42842

// 완전탐색 문제라지만, 식으로 해결가능하다.
// 역으로 완전탐색으로 어떻게 풀어야할지 감이 잘 안온다.
// 그래서 그렇게 생각하기를 포기했다.

// 구하고자 하는 가로, 세로를 2차 방정식의 해로 생각하고
// 판별식을 세우고 2차 방정식의 해를 구하였다.

function solution(brown, yellow) {
  let disc = (brown + 4) ** 2 - 16 * (brown + yellow);
  let x = (brown + 4 + disc ** 0.5) / 4;
  let y = (brown + 4 - disc ** 0.5) / 4;
  return [x, y];
}