// 카드2
// 링크: https://www.acmicpc.net/problem/2164

// 문제풀이(1) - 시간초과
// 1. 제일 위에 있는 카드를 바닥에 버린다.
// 2. 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다.
// 3. 1~2를 반복한다.
// 4. 마지막에 남는 카드를 return 한다.
// N = 4, 1234 -> 234 -> 342 -> 42 -> 24 -> 4
// 1부터 시작해서 홀수 일경우 제일 첫 카드 제거, 짝수 일 경우 제일위에 있는 카드를 맨밑으로 이동
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// const input = Number(require("fs").readFileSync(filePath).toString().trim());

// const shuffle = (cardCount) => {
//   const arr = Array.from({ length: cardCount }, (v, i) => i + 1);

//   let count = 1;
//   while (arr.length > 1) {
//     let popNum = arr.shift();
//     if (!(count % 2)) {
//       arr.push(popNum);
//     }
//     count++;
//   }
//   return arr[0];
// };

// console.log(shuffle(input));

// 문제풀이(2)
// pop, push를 하는 과정에서 시간이 많이 소요되는 것을 알 수 있다. (O(n^2))
// pop을 하지않고 push만 할 경우 O(1)로 간단해질 수 있다. -> 단점 공간복잡도 증가
// 메모리 28808kb, 시간 240ms
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// const input = Number(require("fs").readFileSync(filePath).toString().trim());

// const shuffle = (cardCount) => {
//   const arr = Array.from({ length: cardCount }, (v, i) => i + 1);

//   let count = 0;

//   while (arr.length !== count) {
//     if (count % 2) {
//       arr.push(arr[count++]);
//     } else {
//       count++;
//     }
//   }

//   return arr.at(-1);
// };

// console.log(shuffle(input));

// 문제풀이(3)
// 다른 풀이로 링크드리스트를 사용해서 풀수 있다는 것을 보게되어서 차근차근 구현해보았다.
// 메모리 89072kb, 시간 416ms로 2~3배가량 높은 수치가 나왔다.
// 중간 삽입 및 삭제가 효율적인 링크드 리스트로 사용해봤지만 좋지 않은 결과였다...
// 메모리, 접근시간, 구현 복잡도등이 다 높았기 때문이다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = Number(require("fs").readFileSync(filePath).toString().trim());

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// push, pop, get을 구현해야함
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 노드에 값 추가하기
  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length++;

    return newNode;
  }

  // 첫 노드값 가져오기
  getHead() {
    return this.head.value;
  }

  // 첫 노드 제거하기
  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }

  // 노드 길이 가져오기
  getLength() {
    return this.length;
  }
}

const node = new LinkedList();

for (let i = 1; i <= input; i++) {
  node.add(i);
}

while (node.getLength() !== 1) {
  node.removeHead();
  node.add(node.getHead());
  node.removeHead();
}

console.log(node.getHead());

// 입력
// 6

// 출력
// 4
