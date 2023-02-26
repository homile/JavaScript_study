// 공 바꾸기
// 링크: https://www.acmicpc.net/problem/10813

/*
  1번부터 N번까지 번호가 매겨져 있다.
  바구니에는 1개씩 들어있고, 처음에는 바구니에 적혀있는 번호와 같은 번호가 적힌 공이 들어있다.
  도현이는 M번 공을 바꾸려고 한다.
  공을 바꿀 바구니 2개를 선택하고, 두 바구니에 들어있는 공을 서로 교환한다.
*/

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
let [N, M] = input.shift().split(" ").map(Number);

// 기본 바구니 순서 지정
const result = Array.from({ length: N }, (v, i) => i + 1);

// 바구니 변경
for (let i = 0; i < M; i++) {
  let [A, B] = input[i].split(" ").map((num) => num - 1);
  let value = result[A];
  result[A] = result[B];
  result[B] = value;
}

console.log(result.join(" "));
