// 덱 2
// 링킈: https://www.acmicpc.net/problem/28279

// 문제풀이(1)
// 1. 1 X: 정수 X를 덱의 앞에 넣는다. (1 ≤ X ≤ 100,000)
// 2. 2 X: 정수 X를 덱의 뒤에 넣는다. (1 ≤ X ≤ 100,000)
// 3. 3: 덱에 정수가 있다면 맨 앞의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
// 4. 4: 덱에 정수가 있다면 맨 뒤의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
// 5. 5: 덱에 들어있는 정수의 개수를 출력한다.
// 6. 6: 덱이 비어있으면 1, 아니면 0을 출력한다.
// 7. 7: 덱에 정수가 있다면 맨 앞의 정수를 출력한다. 없다면 -1을 대신 출력한다.
// 8. 8: 덱에 정수가 있다면 맨 뒤의 정수를 출력한다. 없다면 -1을 대신 출력한다.
// 위의 데크 로직을 구현하면 되는 문제이다. 시간이 다소 소요됐다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  unshift(value) {
    // 정수 X를 덱의 앞에 넣는다.
    const node = new Node(value);
    if (!this.head) {
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
    }
    this.head = node;
    this.size++;
  }

  push(value) {
    // 정수 X를 덱의 뒤에 넣는다.
    const node = new Node(value);
    if (!this.tail) {
      this.head = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
  }

  shift() {
    // 맨 앞의 정수를 빼고 출력한다.
    if (!this.head) {
      return -1;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    this.size--;
    return value;
  }

  pop() {
    // 맨 뒤의 정수를 빼고 출력한다.
    if (!this.tail) {
      return -1;
    }
    const value = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    this.size--;
    return value;
  }

  length() {
    // 덱에 들어있는 정수의 개수를 출력한다.
    return this.size;
  }

  isEmpty() {
    // 덱이 비어있으면 1, 아니면 0을 출력한다.
    return this.size === 0 ? 1 : 0;
  }

  getFront() {
    // 덱에 정수가 있다면 맨 앞의 정수를 출력한다.
    return this.head ? this.head.value : -1;
  }

  getBack() {
    // 덱에 정수가 있다면 맨 뒤의 정수를 출력한다.
    return this.tail ? this.tail.value : -1;
  }
}

const deque = new Deque();

let answer = "";

for (let i = 0; i < N; i++) {
  const [command, value] = input[i].split(" ").map(Number);

  // unshift, push, shift, pop, length, isEmpty, getFront, getBack
  switch (command) {
    case 1:
      deque.unshift(value);
      break;
    case 2:
      deque.push(value);
      break;
    case 3:
      answer += `${deque.shift()}\n`;
      break;
    case 4:
      answer += `${deque.pop()}\n`;
      break;
    case 5:
      answer += `${deque.length()}\n`;
      break;
    case 6:
      answer += `${deque.isEmpty()}\n`;
      break;
    case 7:
      answer += `${deque.getFront()}\n`;
      break;
    case 8:
      answer += `${deque.getBack()}\n`;
      break;
    default:
      break;
  }
}

console.log(answer.trim());

// input
// 11
// 6
// 1 3
// 1 8
// 7
// 8
// 3
// 2 5
// 1 2
// 5
// 4
// 4

// output
// 1
// 8
// 3
// 8
// 3
// 5
// 3
