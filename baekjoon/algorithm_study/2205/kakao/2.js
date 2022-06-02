function solution(queue1, queue2) {
  let answer = 0;
  const q1 = queue1.slice();
  const q2 = queue2.slice();
  let sum1 = q1.reduce((a, c) => a + c, 0);
  let sum2 = q2.reduce((a, c) => a + c, 0);
  let q1idx = 0;
  let q2idx = 0;
  let length = q1.length * 3;

  while (true) {
    if (sum1 === sum2) {
      return answer;
    } else if (sum1 > sum2) {
      const target = q1[q1idx++];
      q2.push(target);
      sum1 -= target;
      sum2 += target;
    } else {
      const target = q2[q2idx++];
      q1.push(target);
      sum1 += target;
      sum2 -= target;
    }
    answer++;
    if (answer > length) break;
  }
  return -1;
}
