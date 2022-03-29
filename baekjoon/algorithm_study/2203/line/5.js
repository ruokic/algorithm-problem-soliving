function solution(abilities, k) {
  let answer = 0;
  const sorted = abilities.sort((a, b) => a - b);
  const len = abilities.length;
  const gap = [];

  for (let i = 0; i < (len + 1) / 2 - 1; i++) {
    let a1 = sorted.pop();
    let a2 = sorted.pop();

    answer += a2;
    if (a1 - a2 > 0) {
      gap.push(a1 - a2);
    }
  }

  if (sorted.length > 0) {
    gap.push(sorted[0]);
  }

  const sortedGap = gap.sort((a, b) => a - b);
  for (let i = 0; i < k; i++) {
    if (sortedGap.length > 0) answer += sortedGap.pop();
  }

  return answer;
}
