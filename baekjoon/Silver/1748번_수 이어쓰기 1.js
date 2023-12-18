// 수 이어쓰기 1
// 링크: https://www.acmicpc.net/problem/1748

// 문제풀이(1)
// 수의 범위가 1억까지이기 때문에 for로 전체 순회를 할 경우 시간초과가 날것으로 예상된다.
// 수의 자릿수를 구하는 공식을 작성하여 구해본다.
// 1~9는 한자리수, 10~99는 두자리수, 100~999는 세자리수이다.
// 위의 규칙성을 봤을 때 1의 자리수부터 10의 배수로 자리수를 계산할 수 있음을 알 수 있다. (1 -> 10 -> 100 -> 100)
// N - (자리수) + 1 = 자리수의 개수이다.
// 15 -> 15 - 1 + 1 = 15 = 한자리수의 개수
// 15 -> 15 - 10 + 1 = 6 = 두자리수의 개수
// 위와 같은 형식으로 규칙성을 가질 수 있다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = Number(require("fs").readFileSync(filePath).toString().trim());

let answer = 0;

for (let i = 1; i <= N; i *= 10) {
  answer += N - i + 1;
}

console.log(answer);

// 입력
// 15

// 출력
// 21
