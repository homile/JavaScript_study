// 링
// 링크: https://www.acmicpc.net/problem/3036

// 문제풀이(1)
// 문제의 풀이가 생각나지 않아서 찾아본 결과 최대공약수를 이용한 문제라는 것을 알게되었다.
// 참고: https://dev-note-97.tistory.com/193
// 2수의 최대공약수를 찾아서 기약분수(?)의 형태로 출력한면 된다고 한다.
// 첫번째 링이 돌아가면 나머지 링도 돌기 때문에 첫번째 링과 나머지 링의 최대공약수를 찾아 기약분수의 형태로 나타내면 된다.
// 최대공약수는 유클리드 호제법을 사용해서 구하는 방식을 사용하려고 한다.
// 8과 4의 최대 공약수 = 4 -> (8/4)/(4/4) -> 2/1
// 8과 2의 최대 공약수 = 2 -> (8/2)/(2/2) -> 4/1
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const arr = input[0].split(" ").map(Number);
const firstNum = arr[0];

// 유클리드 호제법 최대공약수 구하기
const gcd = (a, b) => {
  if (a % b === 0) {
    return b;
  }
  return gcd(b, a % b);
};

for (let i = 1; i < N; i++) {
  const nowNum = arr[i];
  const resultGCD = gcd(firstNum, nowNum);
  console.log(`${firstNum / resultGCD}/${nowNum / resultGCD}`);
}

// 입력
// 3
// 8 4 2

// 출력
// 2/1
// 4/1
