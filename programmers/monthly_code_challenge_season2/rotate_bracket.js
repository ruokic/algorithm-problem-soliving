// 괄호 회전하기
// https://programmers.co.kr/learn/courses/30/lessons/76502

// check 함수는 이 문자열이 올바른 괄호 문자열인지 판단하여
// 올바르면 1을 아니면 0을 반환한다.
// 주어진 문자열의 가장 왼쪽 문자를 오른쪽에 집어넣고 check함수로 확인하여 값을 누적한다.

function solution(s) {
  let answer = 0;
  const check = (str) => {
    let len = str.length;
    while (true) {
      // 주어진 문자열의 괄호쌍을 더이상 바뀌지 않을 때까지 치환한다.
      str = str.replace(/\[\]/g, '').replace(/\{\}/g, '').replace(/\(\)/g, '');
      if (len === str.length) break;
      len = str.length;
    }
    if (str.length === 0) return 1;
    else return 0;
  }
  let string = s.split('');
  
  for (let i = 0; i < s.length; i++) {
      string.push(string.shift());
      answer += check(string.join(''));
  }
  return answer;
}