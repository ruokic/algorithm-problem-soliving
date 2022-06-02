function solution(n, paths, gates, summits) {
  var answer = [50001, 10000001];
  let routes = Array(n + 1)
    .fill()
    .map((_) => []);
  const isGate = Array(n + 1).fill(false);
  const isSummit = Array(n + 1).fill(false);

  gates.forEach((e) => {
    isGate[e] = true;
  });

  paths.forEach(([i, j, w]) => {
    routes[i].push([j, w]);
    routes[j].push([i, w]);
  });

  summits.forEach((e) => {
    isSummit[e] = true;
  });

  function dfs(node, intensity, summit, visited) {
    if (isGate[node]) {
      if (answer[1] > intensity) {
        answer = [summit, intensity];
      } else if (answer[1] === intensity && summit < answer[0]) {
        answer = [summit, intensity];
      }
      return;
    }
    routes[node].forEach(([next, w]) => {
      if (!visited[next] && !isSummit[next]) {
        const nextIntensity = intensity < w ? w : intensity;
        visited[next] = true;
        dfs(next, nextIntensity, summit, visited);
      }
    });
  }

  summits.forEach((summit) => {
    const visited = Array(n + 1).fill(10000001);
    const stack = [[summit, 0, summit]];

    while (stack.length > 0) {
      const [node, intensity, summit] = stack.pop();

      if (isGate[node]) {
        if (answer[1] > intensity) {
          answer = [summit, intensity];
        } else if (answer[1] === intensity && summit < answer[0]) {
          answer = [summit, intensity];
        }
        continue;
      }
      routes[node].forEach(([next, w]) => {
        const nextIntensity = intensity < w ? w : intensity;
        if (visited[next] > nextIntensity && !isSummit[next]) {
          visited[next] = nextIntensity;
          if (answer[1] >= nextIntensity) {
            stack.push([next, nextIntensity, summit]);
          }
        }
      });
    }
  });

  return answer;
}
