// 타겟 넘버
// https://programmers.co.kr/learn/courses/30/lessons/43165?language=javascript

// 주어지는 숫자의 개수가 20개 이하이므로
// O(2^n)의 시간복잡도로 풀어도 괜찮다.
// 연산자의 개수나 위치에 관계없이 모든 경우의 수를 요구하므로
// 이진 재귀로 탐색하면 된다.

function solution(numbers, target) {
  // number를 탐색할 인덱스와 지금까지의 총합을 넘겨준다.
  const dfs = (cnt, sum) => {
    // 인덱스가 길이와 같아지면 그 값을 타겟 넘버와 비교한다.
    if (cnt == numbers.length) {
      // 같다면 1 다르면 0을 반환한다.
      if (sum == target) return 1;
      else return 0;
    }
    // 이번 인덱스의 값을 더한 경우, 뺀 경우 2가지 경우의 수 이후를 확인한다.
    return dfs(cnt + 1, sum + numbers[cnt]) 
        + dfs(cnt + 1, sum - numbers[cnt]);
  }
  return dfs(0, 0);
}