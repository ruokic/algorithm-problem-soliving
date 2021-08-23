// 124 나라의 숫자
// https://programmers.co.kr/learn/courses/30/lessons/12899

// 1. 124 나라에는 자연수만 존재합니다.
// 따라서 124 나라에 0 이 없음을 인식하고 있어야한다.
// 2. 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.
// 숫자가 1, 2, 4 세 종류라는 것을 통해 3진법임을 유추할 수 있다.

// 주어진 숫자가 1, 2, 4는 각각 2의 제곱수이므로 이를 이용하였다.
// 0이 없음을 고려하여 주어진 수에서 1을 빼서 124 나라의 1을 우리의 0으로 고려하였다.

function solution(n) {
  var answer = '';
  // n이 0이 될 때까지 3으로 나눈다.
  while (n) {
    answer = (2 ** ((n - 1) % 3)).toString() + answer
    n = Math.floor((n - 1) / 3);
  }
  return answer;
}