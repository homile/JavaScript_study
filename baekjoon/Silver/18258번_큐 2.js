// 큐 2
// 링크: https://www.acmicpc.net/problem/18258

// 문제풀이(1)
// 아래와 같은 큐의 형식으로 구현하는 문제이다.
// Javascript의 메서드를 사용해서 구현하게 될 경우 실행시간 초과가 나올 수 있으므로 직접구현하는 방식을 선택했다.
// push X: 정수 X를 큐에 넣는 연산이다.
// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 큐에 들어있는 정수의 개수를 출력한다.
// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
// const N = input.shift();

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.prev = null;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor(value) {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   push(value) {
//     const node = new Node(value);

//     if (!this.head) {
//       this.head = node;
//     } else {
//       this.tail.next = node;
//     }

//     this.tail = node;
//     this.size++;
//   }

//   pop() {
//     if (this.size > 2) {
//       const value = this.head.value;
//       const newHead = this.head.next;
//       this.head = newHead;
//       newHead.prev = this.tail;
//       this.tail.next = this.head;
//       this.size--;
//       return value;
//     } else if (this.size === 2) {
//       const value = this.head.value;
//       this.head = this.tail;
//       this.tail.prev = this.tail;
//       this.tail.next = this.tail;
//       this.size--;
//       return value;
//     } else if (this.size === 1) {
//       const value = this.head.value;
//       this.head = null;
//       this.tail = null;
//       this.size--;
//       return value;
//     } else {
//       return -1;
//     }
//   }

//   getSize() {
//     return this.size;
//   }

//   empty() {
//     return this.size ? 0 : 1;
//   }

//   getFront() {
//     return this.head ? this.head.value : -1;
//   }

//   getBack() {
//     return this.tail ? this.tail.value : -1;
//   }
// }

// const queue = new Queue();

// let answer = "";

// for (let i = 0; i < N; i++) {
//   const [command, value] = input[i].split(" ");

//   switch (command) {
//     case "push":
//       queue.push(value);
//       break;
//     case "pop":
//       answer += `${queue.pop()}\n`;
//       break;
//     case "size":
//       answer += `${queue.getSize()}\n`;
//       break;
//     case "empty":
//       answer += `${queue.empty()}\n`;
//       break;
//     case "front":
//       answer += `${queue.getFront()}\n`;
//       break;
//     case "back":
//       answer += `${queue.getBack()}\n`;
//       break;
//     default:
//       break;
//   }
// }

// console.log(answer.trim());

// 문제풀이(2) - 리팩토링
// 1. pop 메서드 개선: pop 메서드에서 큐의 크기에 상관없이 항상 첫 번째 노드를 제거하고 크기를 감소시키도록 변경하고, 마지막 노드와의 연결 상태를 확인하고 조정하는 부분도 개선진행.
// 실행시간 - 2724ms -> 2400ms
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const N = input.shift();

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.size++;
  }

  pop() {
    if (this.size === 0) {
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

  getSize() {
    return this.size;
  }

  empty() {
    return this.size ? 0 : 1;
  }

  getFront() {
    return this.head ? this.head.value : -1;
  }

  getBack() {
    return this.tail ? this.tail.value : -1;
  }
}

const queue = new Queue();

let answer = "";

for (let i = 0; i < N; i++) {
  const [command, value] = input[i].split(" ");

  switch (command) {
    case "push":
      queue.push(value);
      break;
    case "pop":
      answer += `${queue.pop()}\n`;
      break;
    case "size":
      answer += `${queue.getSize()}\n`;
      break;
    case "empty":
      answer += `${queue.empty()}\n`;
      break;
    case "front":
      answer += `${queue.getFront()}\n`;
      break;
    case "back":
      answer += `${queue.getBack()}\n`;
      break;
    default:
      break;
  }
}

console.log(answer.trim());

// 입력
// 15
// push 1
// push 2
// front
// back
// size
// empty
// pop
// pop
// pop
// size
// empty
// pop
// push 3
// empty
// front

// 출력
// 1
// 2
// 2
// 0
// 1
// 2
// -1
// 0
// 1
// -1
// 0
// 3
