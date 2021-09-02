// const fs = require('fs');
// let [N, fruits, ...edges] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, fruits, ...edges] = "5\n1 0 0 0 1\n5 1\n4 3\n4 1\n2 5\n".toString().trim().split('\n');
fruits = fruits.split(' ').map(Number);
const Node = class {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const Queue = class {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enQueue(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.head.next = this.tail;
    } else this.tail.next = node;
    this.tail = node;
    this.size++;
  }
  deQueue() {
    this.size--;
    let ret = this.head;
    if (this.size == 0) {
      this.head = null;
    } else this.head = this.head.next;
    if (this.size == 0) this.head = null;
    return ret;
  }
  getSize() {
    return this.size;
  }
}
const sol = () => {
  if (N == '1') return [fruits[0], 1];
  let routes = Array(+N + 1).fill().map(_ => []);
  edges.map(el => {
    let [s, e] = el.split(' ').map(Number);
    routes[s].push(e);
    routes[e].push(s);
  });
  let root = 1;
  let max = [fruits[root - 1], root];
  let queue = new Queue();
  queue.enQueue([root, fruits[root - 1], 0]);
  while (queue.getSize() > 0) {
    let [curr, amount, prev] = queue.deQueue().value;
    routes[curr].map(e => {
      if (e != prev) {
        let nextAmount = amount + fruits[e - 1];
        queue.enQueue([e, nextAmount, curr]);
        if (nextAmount > max[0]) {
          max[0] = nextAmount;
          max[1] = e;
        }
        else if (nextAmount == max[0] && max[1] > e) max[1] = e;
      }
    });
  }console.log(...max)/////////////////////////////////////////////////////////////
  let leaf = max[1];
  let max2 = [fruits[leaf - 1], leaf];
  queue.enQueue([leaf, fruits[leaf - 1], 0]);
  while (queue.getSize() > 0) {
    let [curr, amount, prev] = queue.deQueue().value;
    routes[curr].map(e => {
      if (e != prev) {
        let nextAmount = amount + fruits[e - 1];
        queue.enQueue([e, nextAmount, curr]);
        if (nextAmount > max2[0]) {
          max2[0] = nextAmount;
          if (fruits[e - 1] != 0)
            max2[1] = e;
        }
        else if (nextAmount == max2[0] && max2[1] > e && fruits[e - 1] != 0) max2[1] = e;
      }
    });
  }
  if (max2[1] > max[1]) max2[1] = max[1];
  return max2;
}
console.log(...sol());