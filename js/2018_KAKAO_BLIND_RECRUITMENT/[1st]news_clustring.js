// [1차] 뉴스 클러스터링
// https://programmers.co.kr/learn/courses/30/lessons/17677

// 자카드 유사도는 교집합 / 합집합으로 정의된다.
// 이 문제에서의 집합은 원소의 중복을 허용하는 다중집합이다.
// 따라서, set을 사용하지 않고 일반 배열을 사용하였다.
// 대소문자 구별을 하지 않으므로 대문자로 통일하여 비교하였다.

function solution(str1, str2) {
  // 각 문자열을 쪼갠 결과를 담을 배열  
  let str1Arr = [];
  let str2Arr = [];
  // 대문자로 통일
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  
  // 2글자씩 잘라서 알파벳 대문자로 구성되어 있다면 배열에 넣는다.
  for (let i = 0; i < str1.length - 1; i++) {
    let word = str1.slice(i, i + 2);
    if (!word.match(/[^A-Z]/g)) str1Arr.push(word);
  }
  for (let i = 0; i < str2.length - 1; i++) {
    let word = str2.slice(i, i + 2);
    if (!word.match(/[^A-Z]/g)) str2Arr.push(word);
  }
  
  // 둘 다 공집합이면 65536을 반환한다.
  if (str1Arr.length === 0 && str2Arr.length === 0) return 65536;
  // 차집합을 구한다.
  let dif1 = str1Arr.filter(e => {
    let idx = str2Arr.indexOf(e);
    if (idx !== -1) {
      str2Arr.splice(idx, 1);
      return false;
    }
    return true;
  });
  // 교집합과 합집합의 길이를 구한다.
  let intLen = str1Arr.length - dif1.length;
  let uniLen = dif1.length + intLen + str2Arr.length;
  
  return Math.floor(intLen / uniLen * 65536);
}