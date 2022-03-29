function solution(sentences, n) {
  let answer = -1;
  let senset = Array(sentences.length).fill();
  let sensco = Array(sentences.length).fill(0);

  sentences.forEach((e, i) => {
    const cnt = e.match(/[A-Z]/g) || [];

    senset[i] = new Set(
      e
        .split(" ")
        .map((el) => el.toLowerCase())
        .join("")
    );
    sensco[i] += e.length;

    if (cnt.length > 0) {
      sensco[i] += cnt.length;
      senset[i].add("shift");
    }
  });
  function dfs(idx, senset, score) {
    if (senset.length > n) {
      return;
    }
    if (idx >= sentences.length) {
      return;
    }
    answer = answer < score ? score : answer;
    const newset = new Set([...senset] + senset[idx]);
    dfs(idx + 1, newset, score + sensco[idx]);
    dfs(idx + 1, newset, score);
  }
  dfs(0, new Set(), 0);
  return answer;
}
