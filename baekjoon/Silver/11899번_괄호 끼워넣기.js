// 괄호 끼워넣기
// Link: https://www.acmicpc.net/problem/11899

// solution(1)
// 처음생각은 단순하게 괄호의 갯수만 파악하여 다른것을 하면되지 않을까란 생각을 했지만
// 예제 2번을 보고 괄호의 갯수로를 파악할 수 없다는 것을 알게 되었다.
// 괄호가 맞는지 맞지 않는지 여부를 파악하는 것이 먼저라고 생각했다.

// 입력받은 괄호를 순회하며 여는 괄호가 나올 경우 leftBracket에 괄호를 추가해주고
// 닫는 괄호가 나올 경우 leftBracket이 빈 배열이 아니라면 짝이 맞다는 것이기 때문에 pop을 해준다.
// 만약, leftBracket이 빈 배열이라면 rigthBracket에 괄호를 추가한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = require("fs").readFileSync(filePath).toString().trim().split("");

const leftBracket = [];
const rightBracket = [];

for (let bracket of arr) {
  if (bracket === "(") {
    leftBracket.push(bracket);
  } else if (bracket === ")") {
    if (leftBracket.length > 0) {
      leftBracket.pop();
    } else {
      rightBracket.push(bracket);
    }
  }
}

console.log(leftBracket.length + rightBracket.length);

// input
// )(()

// output
// 2
