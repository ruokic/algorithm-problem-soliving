// 튜플
// https://programmers.co.kr/learn/courses/30/lessons/64065

// 어떤 순서를 따르는 요소들의 모음을 튜플이라고 한다.
// n 개의 요소를 가진 튜플을 n-튜플이라고 한다.
// 문제에서는 중복이 없는 튜플이 주어진다.
// 이러한 n-튜플이 문자열로 주어질 때 튜플을 배열에 담아 반환한다.

// 우선 주어진 문자열을 처리하기 편하게 파싱한다.
// 중괄호 { }를 기준으로 나눈다.
// 이러면 빈 문자열과 쉼표 ,가 담긴 문자열이 생기므로
// 이를 거른다.
// 이 배열은 각 n-튜플을 담고 있고 이를 다시 2차원 배열화 한다.
// n-튜플의 규칙에 맞게 이를 배열 길이에 대한 오름차순 정렬을 한다.
// 각 n-튜플을 순회하며 집합에 넣는다.
// 그리고 집합을 배열로 변환하여 반환한다.

function solution(s) {
  var answer = new Set();
  s.split(/[{}]/)
  .filter(e => e.length > 0 && e !== ',')
  .map(el => el.split(',').map(e => parseInt(e)))
  .sort((a, b) => a.length - b.length)
  .map(el => el.map(e => answer.add(e)))
  return [...answer];
}