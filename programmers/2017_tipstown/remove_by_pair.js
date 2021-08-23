// 짝지어 제거하기
// https://programmers.co.kr/learn/courses/30/lessons/12973

// 두 문자가 같은지 비교하면 되므로
// 주어진 문자열을 하나씩 스택에 넣으며 스택의 끝 두 글자가 같다면 둘 다 뺀다.

function solution(s) {
  var stack = [];
  for (var i = 0; i < s.length; i++) {
    if (stack.length > 0 && (s[i] === stack[stack.length - 1])) {
        stack.pop();
    }
    else stack.push(s[i])
  }
  return stack.length > 0 ? 0 : 1;
}

// JS 스러운 축약형 코드
function solution(s) {
  var st = [];
  // 문자열을 배열로 만들고 순회하며 스택
  s.split('').map(e => st.length > 0 && (e === st[st.length - 1]) ? st.pop() : st.push(e))
  return st.length > 0 ? 0 : 1;
}

// 여기서 잠깐
function solution(s) {
  var st = [];
  s.split('').map(e => st.length > 0 && (e === st[st.length - 1]) ? st.pop() : st.push(e))
  return st.length > 0 ? 0 : 1;
}
// 위와 같이 빈 스택인지 확인할 때, 
// length 프로퍼티를 이용하지 않고 스택을 넣어 확인하게 되면
// 시간 초과가 발생한다.
// 풀어 쓴 코드에서 시간 초과가 발생하지는 않았지만
// 두 경우의 시간 차가 크다.
// 효율성 테스트 케이스 2에서 10ms 와 50ms 의 차이를 보였다.
// 혹시나 싶어 length 프로퍼티를 0과 비교하지 않고
// length 프로퍼티만 넣어보았는데 13ms가 나왔다.
// 따라서 빈 배열인지 확인할 때는 length 프로퍼티의 값을
// 정수와의 비교를 통해 확인하는 것이 좋다.