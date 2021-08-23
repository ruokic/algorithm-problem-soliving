// H-Index
// https://programmers.co.kr/learn/courses/30/lessons/42747

// h의 최댓값은 모든 논문이 h번 이상 인용된 경우인 n이다.
// 주어진 배열을 오름차순 정렬하면,
// 특정 인덱스를 기준으로 a번 인용되었다면,
// 오른쪽에 있는 논문은 모두 a번 이상 인용되었다.
// 0번 인덱스부터 순회하며 자신 포함 오른쪽에 있는 논문의 수가
// 자신의 값보다 크거나 같은지 확인한다.

function solution(citations) {
  let answer = citations.length;
  citations = citations.sort((a, b) => (a - b));
  for (let i in citations) {
    if (citations[i] >= answer) break;
    answer--;
  }
  return answer;
}