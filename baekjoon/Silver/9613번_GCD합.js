// GCD 합
// 링크: https://www.acmicpc.net/problem/9613

// 문제풀이(1)
// 최대공약수(Greatest Common Divisor, GCD)를 구하는 문제이다.
// GCD를 구하는 알고리즘에는 유클리드 호제법이 있다.
// 유클리드 호제법을 구현하여 가능한 모든 쌍의 GCD의 합을 구하면된다.
// 유클리드 호제법
// 1. 두 수 중 큰 수를 a, 작은 수를 b로 둡니다.
// 2. a를 b로 나눈 나머지를 r로 둡니다.
// 3. a와 b의 최대공약수는 b와 r의 최대공약수와 같습니다.
// 4. b가 0이 될 때까지 2번과 3번의 과정을 반복합니다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [T, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const arrSort = arr.map((value) => value.split(" ").map(Number));

const gcd = (a, b) => {
  if (a % b === 0) {
    return b;
  }
  return gcd(b, a % b);
};

const answer = [];

arrSort.forEach((numbers) => {
  const [N, ...nums] = numbers;
  let sum = 0;
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      sum += gcd(nums[i], nums[j]);
    }
  }
  answer.push(sum);
});

console.log(answer.join("\n"));

// 입력
// 3
// 4 10 20 30 40
// 3 7 5 12
// 3 125 15 25

// 출력
// 70
// 3
// 35
