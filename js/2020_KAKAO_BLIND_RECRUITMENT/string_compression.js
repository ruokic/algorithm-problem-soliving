// 문자열 압축
// https://programmers.co.kr/learn/courses/30/lessons/60057

// 문자열을 n개 단위로 잘라 압축했을 때 가장 짧은 문자열을 만드는 n을 구한다.
// 문자열은 제일 앞부터 정해진 길이만큼 잘라야 합니다.

function solution(s) {
  // 전혀 압축 안 된 상태를 답에 넣어둔다.
  var answer = s.length;
  var len = s.length;
  // 문자열을 i개 단위로 자른다.
  // i는 문자열의 길이의 절반을 초과할 수 없다.
  for (var i = 1; i < (len + 1) / 2; i++) {
    // 문자열을 탐색할 인덱스
    let idx = 0;
    // i개 단위로 자른 문자열을 스택에 넣어 비교한다.
    let stack = [];
    // 잘린 문자열의 개수를 확인한다.
    let count = 1;
    // 인덱스가 길이를 초과할 때까지 반복한다.
    while (true) {
        if (idx > len) break;
        // 스택에 i개 단위로 잘라 넣는다.
        stack.push(s.slice(idx, idx + i));
        // 인덱스는 i개 만큼 증가 시킨다.
        idx += i;
        // 스택에 비교 대상이 있는지 확인한다.
        if (stack.length > 1) { 
          // 마지막으로 스택에 들어온 두 문자열이 동일하다면
          if (stack[stack.length -1] === stack[stack.length - 2]) {
            // 마지막에 넣은 것 하나를 꺼내고 카운트를 증가한다.
            stack.pop();
            count++;
          }
          // 같지 않고
          else {
            // 마지막 요소의 개수가 여러개라면
            if (count > 1) {
              // 문자열의 개수를 마지막 요소의 앞에 넣고 카운트를 1로 초기화한다.
              stack.splice(stack.length - 2, 0, count);
              count = 1;
            }
          }
        }
    }
    // 기존의 답과 i개 단위로 잘라 압축한 문자열의 길이를 비교하여 작은 것을 답에 넣는다.
    answer = Math.min(answer, stack.join('').length);
  }
  return answer;
}