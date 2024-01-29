// 비트 우정지수
// 링크: https://www.acmicpc.net/problem/12782

// 문제풀이(1)
// 1011, 1100 두개의 2진수 비트 2개가 있을 때, 1011을 1100으로 바꾸는 최소 연산횟수를 구하는 문제이다.
// 1011 -> 1001 -> 1100으로 바뀐다고 한다.

// 2개 비트의 1의 개수를 구하면서 서로 자리가 다른 곳의 개수도 구한뒤 계산하면 된다고 생각했다.
// 2개 비트의 1의 개수가 같을 경우 (자리가 다른 곳의 개수 / 2)를 해주면 1과 0의 위치만 바꾸기 때문에 정답이 나올 것이다.
// 2개 비트이 1의 개수가 다를 경우 (자리가 다른 곳의 개수 - 첫번째 비트이 1의 개수 - 두번째 비트의 1의 개수) / 2 + (첫번째 비트이 1의 개수 - 두번째 비트의 1의 개수)를 하게되면,
// 1과 0의 차이만큼 변환을 해주고 자리를 이동하게 되는 로직이다.

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const bitArr = input.map((el) => el.split(" "));

const answer = [];

for (let i = 0; i < N; i++) {
  const [firstBit, secondBit] = bitArr[i];

  let firstBitOneCount = 0; // 첫번째 비트의 1의 개수
  let secondBitOneCount = 0; // 두번째 비트의 1의 개수
  let differentLocationCount = 0; // 다른 자리수의 개수

  for (let j = 0; j < firstBit.length; j++) {
    if (firstBit[j] === "1") firstBitOneCount++;

    if (secondBit[j] === "1") secondBitOneCount++;

    if (firstBit[j] !== secondBit[j]) differentLocationCount++;
  }

  if (firstBitOneCount === secondBitOneCount) {
    answer.push(Math.floor(differentLocationCount / 2));
  } else {
    let subtract = Math.abs(firstBitOneCount - secondBitOneCount);
    answer.push(Math.floor((differentLocationCount - subtract) / 2 + subtract));
  }
}

console.log(answer.join("\n"));

// input
// 3
// 1011 1100
// 100101 110100
// 00110100 10010111

// output
// 2
// 1
// 3
