function solution(logs) {
  let answer = 0;
  logs.forEach((log) => {
    if (log.length > 100) {
      answer++;
    } else {
      if (
        !(
          log.match("team_name") &&
          log.match("application_name") &&
          log.match("error_level") &&
          log.match("message")
        )
      ) {
        answer++;
      } else {
        const ls = log.split(" ");
        if (
          ls.length < 12 ||
          ls[1] !== ":" ||
          ls[4] !== ":" ||
          ls[7] !== ":" ||
          ls[10] !== ":"
        ) {
          answer++;
        } else {
          for (let i = 2; i < 12; i += 3) {
            if (ls[i].match(/[^a-zA-Z]/g)) {
              answer++;
              break;
            }
          }
        }
      }
    }
  });
  return answer;
}
