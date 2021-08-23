// 가장 큰 수
// https://programmers.co.kr/learn/courses/30/lessons/42746

// 주어진 배열의 요소를 문자열화 한다.
// 배열을 정렬한다.
// 가장 앞자리수가 클수록, 같다면 그 다음 자리수가 클수록 앞으로 정렬한다.
// 5, 9 가 있다면 95, 59를 비교한다.
// 배열을 합쳐 문자열로 만든다.
// 이 문자열의 첫 자리수가 0이라는 것은 이 문자열이 0으로만 구성되어있다는 것을 의미한다.
// 그럼 0을 반환하고 아니면 answer을 반환한다.

function solution(numbers) {
  let answer = numbers.map(e => e + "").sort((a, b) => (b + a) - (a + b)).join('');
  return answer[0] === '0' ? '0' : answer;
}