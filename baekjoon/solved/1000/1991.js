// const fs = require('fs');
// let [N, ...data] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, ...data] = '7\nA B C\nB D .\nC E F\nE . .\nF . G\nD . .\nG . .\n'.trim().split('\n');
let tree = new Map();
data.map(el => {
  let [p, l, r] = el.split(' ');
  tree[p] = new Map();
  if (l != '.') tree[p].set('l', l);
  if (r != '.') tree[p].set('r', r);
});
let prefix = '';
let infix = '';
let postfix = '';
const pre = (p) => {
  prefix += p;
  if (tree[p].has('l')) pre(tree[p].get('l'));
  if (tree[p].has('r')) pre(tree[p].get('r'));
}
const inf = (p) => {
  if (tree[p].has('l')) inf(tree[p].get('l'));
  infix += p;
  if (tree[p].has('r')) inf(tree[p].get('r'));
}
const pos = (p) => {
  if (tree[p].has('l')) pos(tree[p].get('l'));
  if (tree[p].has('r')) pos(tree[p].get('r'));
  postfix += p;
}
pre('A');
inf('A');
pos('A');
console.log(prefix)
console.log(infix)
console.log(postfix)