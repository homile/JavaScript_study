// 스택 2
// 링크: https://www.acmicpc.net/problem/28278

// 문제풀이(1)
// 1. 1 X: 정수 X를 스택에 넣는다. (1 ≤ X ≤ 100,000)
// 2. 2: 스택에 정수가 있다면 맨 위의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
// 3. 3: 스택에 들어있는 정수의 개수를 출력한다.
// 4. 4: 스택이 비어있으면 1, 아니면 0을 출력한다.
// 5. 5: 스택에 정수가 있다면 맨 위의 정수를 출력한다. 없다면 -1을 대신 출력한다.
// 위의 조건에 맞게 스택을 구현하면 된다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Stack {
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
      node.prev = this.tail;
      this.tail.next = node;
    }

    this.tail = node;
    this.size++;
  }

  pop() {
    if (this.size === 0) {
      return -1;
    }

    const value = this.tail.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
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

  getTop() {
    return this.tail ? this.tail.value : -1;
  }
}

const stack = new Stack();

let answer = "";

for (let i = 0; i < Number(N); i++) {
  const [command, value] = arr[i].split(" ");

  switch (command) {
    case "1":
      stack.push(value);
      break;
    case "2":
      answer += `${stack.pop()}\n`;
      break;
    case "3":
      answer += `${stack.getSize()}\n`;
      break;
    case "4":
      answer += `${stack.empty()}\n`;
      break;
    case "5":
      answer += `${stack.getTop()}\n`;
      break;
  }
}

console.log(answer.trim());

// 입력
// 9
// 4
// 1 3
// 1 5
// 3
// 2
// 5
// 2
// 2
// 5

// 출력
// 1
// 2
// 5
// 3
// 3
// -1
// -1
