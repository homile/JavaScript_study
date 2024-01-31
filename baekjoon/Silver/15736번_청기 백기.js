// 청기 백기
// 링크: https://www.acmicpc.net/problem/15736

// 문제풀이(1)
// 모든 깃발이 위가 청색일 때, N명의 사람이 i배수 만큼 뒤집게된다. 이때, 해당 번호의 약수가 홀수 인것은 백기가 된다.
// 백기의 개수를 구하는 문제이기 때문에 해당 번호의 약수가 홀수인 것을 찾으면 될 것이다.
// 1 = 1번 = 백기, 2 = 2번 = 청기, 3 = 2번 = 청기, 4 = 3번 = 백기 ...
// 루트 i 가 정수일 때, 약수가 홀수로 나오게 된다.
// 시간제한이 1초이고, N은 최대 21억 번이기 때문에 일반적인 반복문을 순회할 경우 21초 걸리게된다.
// 그렇기 때문에 루트 i가 N보다 작을 경우를 카운트 해주면 된다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = Number(require("fs").readFileSync(filePath).toString().trim());

// 1 = 백기, 2 = 청기기 때문에 초기 값을 1로 둔다.
let answer = 1;

for (let i = 2; i * i <= N; i++) {
  answer++;
}

console.log(answer);

// input
// 24

// output
// 4
