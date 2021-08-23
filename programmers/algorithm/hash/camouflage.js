// 위장
// https://programmers.co.kr/learn/courses/30/lessons/42578

// 의상의 이름은 중복이 안되므로 각 의상의 가짓수만 알면 된다.
// 맵을 만들어 종류를 키로 하여 카운팅을 한다.
// 종류별로 1씩 더하여 누적곱한 후, 아무것도 안입는 한 가지 경우를 뺀다.

function solution(clothes) {
  let comb = new Map();
  clothes.map(([_, k]) => comb[k] = (comb[k] || 0) + 1);
  return Object.values(comb).reduce((a, c) => a * (c + 1), 1) - 1;
}