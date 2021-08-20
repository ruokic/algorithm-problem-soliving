// 오픈채팅방
// https://programmers.co.kr/learn/courses/30/lessons/42888

// record의 최대 크기는 10만이다.
// 단순히 두 번 순회하였고,
// map을 만들어 첫 순회에서 아이디: 이름으로 저장하였고,
// 들어왔는지 나갔는지를 answer에 저장하였다.
// 다음 answer을 순회하며 map에 저장된 이름을 가져와 수정하였다.

function solution(record) {
  var answer = [];
  var map = new Map();
  record.map((e, i) => {
      let [operator, id, name] = e.split(' ');
      switch (operator) {
          case "Leave":
              answer.push(id + "$님이 나갔습니다.");
              break;
          case "Enter":
              answer.push(id + "$님이 들어왔습니다.");
          default:
              map.set(id, name);
              break;
      }
  });
  answer = answer.map(e => {
      let [id, str] = e.split('$');
      return map.get(id).toString() + str;
  });
  return answer;
}