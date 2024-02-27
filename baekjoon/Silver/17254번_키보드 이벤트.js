// 키보드 이벤트
// Link: https://www.acmicpc.net/problem/17254

// solution(1)
// a키보드, b초, c알파벳이다. 이때, 같은 시간에 입력했다면 키보드의 번호가 낮은 알파벳을 먼저 출력한다.
// sort에 조건을 추가하여 시간을 오름차순으로 정렬하고 같을 경우 키보드를 오름차순으로 정렬한 뒤 알파벳을 출력한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

input.shift();

const keyboards = input.map((el) => el.split(" ")).sort((a, b) => +a[1] - +b[1] || +a[0] - +b[0]);

console.log(keyboards.map((el) => el[2]).join(""));
// input
// 3 5
// 1 0 A
// 2 1 P
// 1 2 L
// 2 4 E
// 3 0 P

// output
// APPLE
