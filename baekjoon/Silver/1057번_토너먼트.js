// 토너먼트
// 링크: https://www.acmicpc.net/problem/1057

// 문제풀이(1)
// N명의 참가자수 중에서 김지민과 임한수가 무조건 이겨서 둘이 대결하는 라운드를 찾는 문제이다.
// 이진탐색 알고리즘을 사용하여 풀수 있다.
// 김지민과 임한수가 무조건 이겨서 올라가고 2명식 경기를 치루기 때문에 각자의 번호 / 2를 해서 반복해서 올라가면서 만나기 전까지를 카운트하면된다.
// 이문제와 비슷한 문제는 프로그래머스에서 푼기억이 있어서 쉽게 풀 수 있었다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, Kim, Lim] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

let count = 0;

while (Kim !== Lim) {
  Kim = Math.ceil(Kim / 2);
  Lim = Math.ceil(Lim / 2);
  count++;
}

console.log(count);

// 입력
// 16 1 2

// 출력
// 1
