const [NVE, AB, NH, ...data] = require("fs")
  .readFileSync(require("path").join(__dirname, "dev/stdin"))
  .toString()
  .split("\n");

const [N, V, E] = NVE.split(" ").map((e) => parseInt(e));
const [A, B] = AB.split(" ").map((e) => parseInt(e));
const Hi = NH.split(" ").map((e) => parseInt(e));
const routes = new Map();
data.forEach((e) => {
  const [a, b, l] = e.split(" ").map((el) => parseInt(el));
  if (routes.has(a)) {
    routes.set(a, [...routes.get(a), [b, l]]);
  } else {
    routes.set(a, [[b, l]]);
  }
  if (routes.has(b)) {
    routes.set(b, [...routes.get(b), [a, l]]);
  } else {
    routes.set(b, [[a, l]]);
  }
});

class Heapq {
  constructor() {
    this.arr = [];
    this.size = 0;
  }
  enqueue(node, value) {
    this.arr.push([node, value]);
    this.size++;
    let idx = this.arr.length - 1;
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.arr[parentIdx][1] > this.arr[idx][1]) {
        const temp = this.arr[parentIdx];
        this.arr[parentIdx] = this.arr[idx];
        this.arr[idx] = temp;
        idx = parentIdx;
      } else {
        break;
      }
    }
  }
  dequeue() {
    const ret = this.arr[0];
    this.size--;
    if (this.size > 0) {
      this.arr[0] = this.arr.pop();
      let idx = 0;
      while (idx < this.size - 1) {
        const leftIdx = 2 * idx + 1;
        const rightIdx = 2 * idx + 2;
        let nextIdx = idx;
        if (leftIdx < this.size && this.arr[leftIdx][1] < this.arr[idx][1]) {
          nextIdx = leftIdx;
        }
        if (
          rightIdx < this.size &&
          this.arr[rightIdx][1] < this.arr[idx][1] &&
          this.arr[rightIdx][1] < this.arr[leftIdx][1]
        ) {
          nextIdx = rightIdx;
        }
        if (nextIdx === idx) {
          break;
        } else {
          const temp = this.arr[idx];
          this.arr[idx] = this.arr[nextIdx];
          this.arr[nextIdx] = temp;
          idx = nextIdx;
        }
      }
    } else {
      this.arr = [];
    }

    return ret;
  }
}

function calculateDist(loc) {
  const heap = new Heapq();
  const dist = Array(V + 1).fill(-1);
  heap.enqueue(loc, 0);
  while (heap.size > 0) {
    const [node, value] = heap.dequeue();
    if (dist[node] === -1) {
      dist[node] = value;
      routes.get(node)?.forEach(([next, length]) => {
        if (dist[next] === -1) {
          heap.enqueue(next, value + length);
        }
      });
    }
  }
  return dist;
}
const distA = calculateDist(A);
const distB = calculateDist(B);
console.log(Hi.reduce((acc, e) => acc + distA[e] + distB[e], 0));
