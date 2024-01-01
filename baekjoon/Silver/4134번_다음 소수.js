// 다음 소수
// 링크: https://www.acmicpc.net/problem/4134

// 문제풀이(1)
// 주어진 수의 다음 소수를 구하는 문제이다.
// 소수는 1과 자기 자신만을 약수로 가지는 수이다. 1은 소수가 아니다.
// 소수 판별 함수를 구현한다음 주어진 수의 다음 수 부터 소수인지 판별하여 소수일 경우 출력하면 된다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [T, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

const answer = [];

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

for (let i = 0; i < T; i++) {
  let number = arr[i];
  while (true) {
    if (isPrime(number)) {
      break;
    } else {
      number++;
    }
  }

  answer.push(number);
}

console.log(answer.join("\n"));

// 입력
// 3
// 6
// 20
// 100

// 출력
// 7
// 23
// 101
