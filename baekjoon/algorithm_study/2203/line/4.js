function solution(arr, brr) {
  let answer = arr.length;
  let a = 0;
  let b = 0;
  const current = arr.map((e) => {
    a += e;
    return a;
  });
  const target = brr.map((e) => {
    b += e;
    return b;
  });
  for (let i = 0; i < arr.length; i++) {
    if (current[i] === target[i]) {
      answer--;
    }
  }
  return answer;
}
