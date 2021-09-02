// let [N, ...data] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let [N, ...data] = "4\n06:00:00.000 06:30:00.000\n06:10:45.000 06:15:00.000\n06:30:00.000 06:40:00.000\n06:01:00.001 06:40:00.001".toString().trim().split('\n');
N -= 0;
let timeTable = Array(N * 2).fill().map(_ => []);
data.map((e, i) => {
  let [_in, _out] = e.split(' ');
  timeTable[2 * i] = _in.split(/:|\./g).map(el => +el).concat(1);
  timeTable[2 * i + 1] = _out.split(/:|\./g).map(el => +el).concat(0);
});
timeTable.sort((a, b) => (a[0] - b[0]) || (a[1] - b[1]) || (a[2] - b[2]) || (a[3] - b[3]) || (a[4] - b[4]));
let max = 0;
let curr = 0;
timeTable.map(e => {
  if (e[4] == 1) curr++;
  else curr--;
  max = max < curr ? curr : max;
});
console.log(max)