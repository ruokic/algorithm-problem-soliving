// [1차] 뉴스 클러스터링
// https://programmers.co.kr/learn/courses/30/lessons/17677



function solution(str1, str2) {
  var str1Arr = [];
  var str2Arr = [];
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  
  for (let i = 0; i < str1.length - 1; i++) {
      let word = str1.slice(i, i + 2);
      if (!word.match(/[^A-Z]/g)) str1Arr.push(word);
  }
  for (let i = 0; i < str2.length - 1; i++) {
      let word = str2.slice(i, i + 2);
      if (!word.match(/[^A-Z]/g)) str2Arr.push(word);
  }
  
  if (str1Arr.length === 0 && str2Arr.length === 0) return 65536;
  var dif1 = str1Arr.filter(e => {
      var idx = str2Arr.indexOf(e);
      if (idx !== -1) {
          str2Arr.splice(idx, 1);
          return false;
      }
      return true;
  });
  var intLen = str1Arr.length - dif1.length;
  var uniLen = dif1.length + intLen + str2Arr.length;
  
  return Math.floor(intLen / uniLen * 65536);
}