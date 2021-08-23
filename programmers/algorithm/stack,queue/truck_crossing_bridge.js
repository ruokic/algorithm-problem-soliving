// 다리를 지나는 트럭
// https://programmers.co.kr/learn/courses/30/lessons/42583

// 그냥 큐

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  // 다리의 상태
  let bridge_status = Array(bridge_length).fill(0);
  // 다리 위에 있는 트럭 무게의 총합
  let total_weights = 0;
  while (truck_weights.length) {
    answer++;
    // 다리를 빠져나오는 트럭의 무게만큼 총 무게를 뺀다.
    total_weights -= bridge_status.shift();
    // 다음 들어갈 트럭의 무게와 다리 위의 총 무게를 버틸 수 있는지 확인한다.
    if (total_weights + truck_weights[0] <= weight) {
      let truck = truck_weights.shift();
      bridge_status.push(truck);
      total_weights += truck;
    }
    else bridge_status.push(0);
  }
  // 마지막 트럭이 다리로 올라간 후 빠져나오는 시간을 더해준다.
  answer += bridge_length;
  return answer;
}