// 상근이의 여행
// 링크: https://www.acmicpc.net/problem/9372

// 문제풀이(1)
// 상근이가 가장 적은 종류의 비행기를 타고 이동하는 값을 찾는 문제이다. (다른 국가를 거쳐가도 된다.)
// 첫번째는 테스트 케이스의 수, 두번째부터는 국가의 수와 비행기의 종류가 입력된다.
// 모든 곳이 연결된 비행 스케줄은 항상 연결 그래프를 이루기 때문에 (나라수 - 1)이 된다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const [T, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// const answer = [];

// for (let i = 0; i < T; i++) {
//   const [country, airplane] = arr[0].split(" ").map(Number);
//   arr.shift();
//   for (let j = 0; j < airplane; j++) {
//     arr.shift();
//   }
//   answer.push(country - 1);
// }

// console.log(answer.join("\n"));

// 문제풀이(2)
// 문제풀이(1)와 같이 풀 경우 shift를 많이 사용하여 배열의 이동이 잦아지기 때문에 비효율적이다.
// 1. shift메소드를 사용하지 않고, 인덱스를 직접관리해서 효율적으로 변경한다.
// 시간복잡도 - O(n * m) -> O(n)
// 메모리 - 31944kb ->	20168ms
// 실행시간 - 4272kb -> 160ms
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let index = 0;
const T = Number(input[index++]);

let result = "";

for (let i = 0; i < T; i++) {
  const [country, airplane] = input[index++].split(" ").map(Number);
  index += airplane;
  result += country - 1 + "\n";
}

console.log(result.trim());

// 입력
// 2
// 3 3
// 1 2
// 2 3
// 1 3
// 5 4
// 2 1
// 2 3
// 4 3
// 4 5

// 출력
// 2
// 4
