const [MN, ...input] = require("fs")
  .readFileSync(require("path").join(__dirname, "dev/stdin"))
  .toString()
  .split("\n");

const [M, N] = MN.split(" ").map((e) => parseInt(e));
const data = input.map((e) => e.split(" ").map((el) => parseInt(el)));
const dy = [0, 1, -1, 0];
const dx = [1, 0, 0, -1];

class Heapq {
  constructor() {
    this.arr = [];
    this.size = 0;
  }
  enqueue(y, x, value) {
    this.arr.push([y, x, value]);
    this.size++;
    let idx = this.size - 1;
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.arr[parentIdx][2] > this.arr[idx][2]) {
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
        if (leftIdx < this.size && this.arr[leftIdx][2] < this.arr[idx][2]) {
          nextIdx = leftIdx;
        }
        if (
          rightIdx < this.size &&
          this.arr[rightIdx][2] < this.arr[idx][2] &&
          this.arr[rightIdx][2] < this.arr[leftIdx][2]
        ) {
          nextIdx = rightIdx;
        }
        if (nextIdx === idx) {
          break;
        } else {
          const temp = this.arr[nextIdx];
          this.arr[nextIdx] = this.arr[idx];
          this.arr[idx] = temp;
          idx = nextIdx;
        }
      }
    } else {
      this.arr = [];
    }

    return ret;
  }
}

const visited = Array(M)
  .fill()
  .map((_) => Array(N).fill(0xffffffff));
const heapq = new Heapq();
heapq.enqueue(0, 0, data[0][0]);
let answer = -1;
if (data[0][0] !== -1) {
  while (heapq.size > 0) {
    const [y, x, value] = heapq.dequeue();
    if (y === M - 1 && x === N - 1) {
      answer = value;
      break;
    }
    if (visited[y][x] > value) {
      visited[y][x] = value;
      for (let k = 0; k < 4; k++) {
        const ny = y + dy[k],
          nx = x + dx[k];
        if (ny >= 0 && ny < M && nx >= 0 && nx < N) {
          const cost = data[ny][nx];
          const nextValue = value + cost;
          if (cost !== -1) {
            heapq.enqueue(ny, nx, nextValue);
          }
        }
      }
    }
  }
}
console.log(answer);
