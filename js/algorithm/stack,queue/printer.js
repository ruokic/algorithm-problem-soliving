// 프린터
// https://programmers.co.kr/learn/courses/30/lessons/42587

// 가장 앞에 있는 문서를 뽑는다.
// 나머지와 우선순위를 비교하고 높다면 뽑는다.
// 이 문서가 요청한 문서라면 카운트를 반환한다.
// 우선순위에 밀린다면 맨 뒤로 보낸다.

function solution(priorities, location) {
  let count = 0;
  while (true) {
    let doc = priorities.shift();
    if (doc >= Math.max(...priorities)) {
      count++;
      if (location == 0) return count;
    }
    else priorities.push(doc);
    location--;
    if (location < 0) location = priorities.length - 1;
  }
}