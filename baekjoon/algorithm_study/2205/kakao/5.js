function solution(rc, operations) {
  const r = rc.length;
  const c = rc[0].length;
  let data = rc.map((e) => e.slice());
  if (r === 2) {
    operations.forEach((e) => {
      if (e === "Rotate") {
        data[0].unshift(data[1].shift());
        data[1].push(data[0].pop());
      } else {
        data = [data[1], data[0]];
      }
    });
  } else {
    operations.forEach((e) => {
      if (e === "Rotate") {
        const temp1 = data[0].pop();
        const temp2 = data[r - 1].shift();

        data[0].unshift(data[1][0]);
        data[r - 1].push(data[r - 2][c - 1]);

        for (let i = 1; i < r - 2; i++) {
          data[i][0] = data[i + 1][0];
        }
        for (let i = r - 2; i > 1; i--) {
          data[i][c - 1] = data[i - 1][c - 1];
        }

        data[1][c - 1] = temp1;
        data[r - 2][0] = temp2;
      } else {
        data = [data.pop(), ...data];
      }
    });
  }
  return data;
}
