// 소수 찾기
// https://programmers.co.kr/learn/courses/30/lessons/42839

function solution(numbers) {
  let answer = 0;
  let max = numbers.split('').sort((a, b) => b - a).join('') - 0;
  let prime = [2];
  for (let i = 3; i < max + 1; i++) {
      let isPrime = true;
      for (let j = 0; j < prime.length; j++) {
          if (prime[j] > i ** 0.5) break;
          if (i % prime[j] == 0) {
              isPrime = false;
              break;
          }
      }
      if (isPrime) prime.push(i);
  }
  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  numbers.split('').map(e => arr[e - 0]++);
  prime.map(e => {
      let temp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      while (e) {
          temp[e % 10]++;
          e = Math.floor(e / 10);
      }
      let isPossible = true;
      for (let i = 0; i < 10; i++) {
          if (temp[i] > arr[i]) {
              isPossible = false;
              break;
          }
      }
      if (isPossible) answer++;
  })
  return answer;
}