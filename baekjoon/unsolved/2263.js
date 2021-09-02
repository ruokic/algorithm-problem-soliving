// const fs = require('fs');
// let [N, inorder, postorder] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, inorder, postorder] = '3\n1 2 3\n1 3 2'.trim().split('\n');
[N, inorder, postorder] = '7\n1 3 2 4 6 5 7\n1 2 3 6 7 5 4'.trim().split('\n');
[N, inorder, postorder] = '11\n8 4 2 9 5 1 10 6 3 11 7\n8 4 9 5 2 10 6 11 7 3 1'.trim().split('\n');
// [N, inorder, postorder] = '6\n5 2 4 1 6 3\n5 4 2 6 3 1'.trim().split('\n');
// [N, inorder, postorder] = '10\n1 3 2 5 4 6 8 7 10 9\n1 2 3 4 5 8 10 9 7 6'.trim().split('\n');
// [N, inorder, postorder] = '21\n1 3 2 7 4 6 5 15 11 9 12 8 13 10 14 21 19 17 20 16 18\n1 2 3 4 5 6 7 11 12 9 13 14 10 8 15 19 20 17 18 16 21'.trim().split('\n');
// [N, inorder, postorder] = '5\n1 2 3 4 5\n5 4 3 2 1'.trim().split('\n');
let preorder = [];
inorder = inorder.split(' ');
postorder = postorder.split(' ');
let stack = [[0, N - 1, 0, N - 1]];
while (stack.length > 0) {
  let [inS, inE, poS, poE] = stack.pop();
  let root = postorder[poE];
  console.log(root, inS, inE, poS, poE)
  let root_idx = inorder.indexOf(root);
  preorder.push(root);
  if (poS != poE)
    stack.push([root_idx + 1, inE, poE - inE + root_idx, poE - 1]);
  if (inS != inE)
    stack.push([inS, root_idx - 1, poS, poS + root_idx - 1 - inS]);
  console.log(preorder)
}
console.log(...preorder)
// const pre = (inor, postor) => {
//   if (inor.length <= 1) return inor;
//   let root = postor[postor.length - 1];
//   let root_idx = inor.indexOf(root);
//   let left = [];
//   let right = [];
//   if (root_idx > 0)
//     left = pre(
//       inor.slice(0, root_idx), 
//       postor.slice(0, root_idx)
//       );
//   if (root_idx < inor.length - 1)
//     right = pre(
//       inor.slice(root_idx + 1), 
//       postor.slice(root_idx, postor.length - 1)
//       );
//   return [root, ...left, ...right];
// }
// console.log(...pre(inorder, postorder))