// 예상 대진표
// https://programmers.co.kr/learn/courses/30/lessons/12985

// 한 라운드가 진행되면 a와 b는 반으로 줄어든다.
// 둘이 같아지면 만난 것이므로 그 때의 카운트를 반환한다.

function solution(n, a, b) {
  var answer = 0;

  while (a != b) {
      a = Math.ceil(a / 2);
      b = Math.ceil(b / 2);
      answer++;
  }

  return answer;
}