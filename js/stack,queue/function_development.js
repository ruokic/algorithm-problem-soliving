// 기능 개발
// https://programmers.co.kr/learn/courses/30/lessons/42586

// 우선 각 작업별로 소요 시간을 계산한다.
// 어느 한 시점에서 이 이후의 작업 중 소요 시간이 작은 작업은
// 현 작업보다 소요 시간이 큰 작업의 전 작업까지
// 현 작업보다 일찍 끝난다.

function solution(progresses, speeds) {
  var answer = [];
  // -1번째 작업의 소요 시간을 0으로 가정한다.
  var max = 0;
  progresses.map((e, i) => {
    // 소요 시간을 계산한다.
    let day = Math.ceil((100 - e) / speeds[i]);
    // 현 작업의 소요 시간이 이전 보다 크다면 일단 1을 넣는다.
    // 소요 시간을 max에 넣고 그 이후의 작업의 소요 시간과 비교한다.
    if (day > max) {
      answer.push(1);
      max = day;
    }
    // 현 작업의 소요 시간이 이전 보다 작으면 앞의 기능과 함께 배포한다.
    else answer[answer.length - 1]++;
  })
  return answer;
}