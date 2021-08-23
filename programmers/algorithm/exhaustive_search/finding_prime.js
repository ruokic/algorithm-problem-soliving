// 소수 찾기
// https://programmers.co.kr/learn/courses/30/lessons/42839

// 우선 주어진 수로 만들 수 있는 가장 큰 수를 구한다.
// 그 수 이하의 모든 소수를 구하여 배열에 넣는다.
// 주어진 수에 어떤 숫자가 몇 개 있는지 구한다.
// 소수 배열을 순회하며 그 소수가 어떤 숫자가 몇 개 있는지 구한다.
// 이 소수를 주어진 수로 만들수 있다면 카운팅한다.

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