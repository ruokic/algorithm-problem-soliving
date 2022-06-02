function solution(alp, cop, problems) {
  let targetAlp = 0;
  let targetCop = 0;

  problems.forEach(([alp_req, cop_req, alp_rwd, cop_rwd, cost]) => {
    targetAlp = targetAlp < alp_req ? alp_req : targetAlp;
    targetCop = targetCop < cop_req ? cop_req : targetCop;
  });

  if (alp > targetAlp) {
    targetAlp = alp;
  }
  if (cop > targetCop) {
    targetCop = cop;
  }

  const dp = Array(targetAlp + 1)
    .fill()
    .map((_) => Array(targetCop + 1).fill(0));

  for (let i = alp; i < targetAlp + 1; i++) {
    for (let j = cop; j < targetCop + 1; j++) {
      const target = dp[i][j];

      problems.forEach(([alp_req, cop_req, alp_rwd, cop_rwd, cost]) => {
        if (alp_req <= i && cop_req <= j) {
          const nextAlp = Math.min(i + alp_rwd, targetAlp);
          const nextCop = Math.min(j + cop_rwd, targetCop);
          const next = dp[nextAlp][nextCop];
          dp[nextAlp][nextCop] = Math.min(next, target + cost);
          if (next === 0) {
            dp[nextAlp][nextCop] = target + cost;
          }
        }
      });
      if (i < targetAlp) {
        dp[i + 1][j] = Math.min(dp[i + 1][j], target + 1);
        if (dp[i + 1][j] === 0) {
          dp[i + 1][j] = target + 1;
        }
      }
      if (j < targetCop) {
        dp[i][j + 1] = Math.min(dp[i][j + 1], target + 1);
        if (dp[i][j + 1] === 0) {
          dp[i][j + 1] = target + 1;
        }
      }
    }
  }

  return dp[targetAlp][targetCop];
}
