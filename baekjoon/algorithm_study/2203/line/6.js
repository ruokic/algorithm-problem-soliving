function solution(req_id, req_info) {
  let answer = [...new Set(req_id)].sort().map((e) => `${e} 0 0`);
  let len = req_id.length;
  const pPending = Array(101)
    .fill()
    .map((_) => []);
  const sPending = Array(101)
    .fill()
    .map((_) => []);
  const idIdx = {};
  answer.forEach((e, i) => {
    idIdx[e.split(" ")[0]] = i;
  });

  for (let i = 0; i < len; i++) {
    const targetId = req_id[i];
    let [type, amount, price] = req_info[i];

    if (type === 0) {
      let targetPrice = 1;
      while (targetPrice <= price) {
        while (sPending[targetPrice].length > 0) {
          const [tId, a] = sPending[targetPrice].shift();

          if (amount >= a) {
            let [_, gold, silver] = answer[idIdx[targetId]].split(" ");
            let [__, tgold, tsilver] = answer[idIdx[tId]].split(" ");
            answer[idIdx[targetId]] = [
              targetId,
              parseInt(gold) + a,
              parseInt(silver) - targetPrice * a,
            ].join(" ");
            answer[idIdx[tId]] = [
              tId,
              parseInt(tgold) - a,
              parseInt(tsilver) + targetPrice * a,
            ].join(" ");
            amount -= a;
          } else {
            let [_, gold, silver] = answer[idIdx[targetId]].split(" ");
            let [__, tgold, tsilver] = answer[idIdx[tId]].split(" ");
            answer[idIdx[targetId]] = [
              targetId,
              parseInt(gold) + amount,
              parseInt(silver) - targetPrice * amount,
            ].join(" ");
            answer[idIdx[tId]] = [
              tId,
              parseInt(tgold) - amount,
              parseInt(tsilver) + targetPrice * amount,
            ].join(" ");
            sPending[targetPrice].unshift([tId, a - amount]);
          }
          if (amount <= 0) break;
        }
        if (amount <= 0) break;
        targetPrice++;
      }
      pPending[price].push([targetId, amount]);
    } else {
      let targetPrice = 100;
      while (targetPrice >= price) {
        while (pPending[targetPrice].length > 0) {
          const [tId, a] = pPending[targetPrice].shift();

          if (amount >= a) {
            let [_, gold, silver] = answer[idIdx[targetId]].split(" ");
            let [__, tgold, tsilver] = answer[idIdx[tId]].split(" ");
            answer[idIdx[targetId]] = [
              targetId,
              parseInt(gold) - a,
              parseInt(silver) + targetPrice * a,
            ].join(" ");
            answer[idIdx[tId]] = [
              tId,
              parseInt(tgold) + a,
              parseInt(tsilver) - targetPrice * a,
            ].join(" ");
            amount -= a;
          } else {
            let [_, gold, silver] = answer[idIdx[targetId]].split(" ");
            let [__, tgold, tsilver] = answer[idIdx[tId]].split(" ");
            answer[idIdx[targetId]] = [
              targetId,
              parseInt(gold) - amount,
              parseInt(silver) + targetPrice * amount,
            ].join(" ");
            answer[idIdx[tId]] = [
              tId,
              parseInt(tgold) + amount,
              parseInt(tsilver) - targetPrice * amount,
            ].join(" ");
            pPending[targetPrice].unshift([tId, a - amount]);
          }
          if (amount <= 0) break;
        }
        if (amount <= 0) break;
        targetPrice--;
      }
      sPending[price].push([targetId, amount]);
    }
  }

  return answer.map((e) => {
    let [name, gold, silver] = e.split(" ");
    if (parseInt(gold) > 0) {
      gold = "+" + gold;
    }
    if (parseInt(silver) > 0) {
      silver = "+" + silver;
    }
    return [name, gold, silver].join(" ");
  });
}
