// let data = require('fs').readFileSync('dev/stdin').toString().trim();
let data = 'A*(B+C)'
let stack = [];
let res = '';
let op = ['+', '-', '*', '/'];
for (let i = 0; i < data.length; i++) {
  if (data[i] == '(') stack.push(data[i]);
    else if (data[i] == ')') {
      while (stack.length > 0) {
        let s = stack.pop();
        if (s == '(') break;
        res += s;
      }
    }
  else if (op.indexOf(data[i]) != -1) {
    while (stack.length > 0) {
      if (Math.floor(op.indexOf(stack[stack.length - 1]) / 2) >= Math.floor(op.indexOf(data[i]) / 2)) {
        res += stack.pop();
      }
      else break;
    }
    stack.push(data[i])
  }
  else res += data[i];
}
while (stack.length > 0) {
  res += stack.pop();
}
console.log(res)