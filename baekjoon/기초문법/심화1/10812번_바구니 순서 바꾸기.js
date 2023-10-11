// 바구니 순서 바꾸기
// 링크: https://www.acmicpc.net/problem/10812

/*
  문제설명
  N개의 바구니에서 각각의 바구니에는 1번부터 N번까지 번호가 순서대로 적혀있다.
  M번의 바구니의 순서를 회전시키려고 한다.
*/

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input.shift().split(" ").map(Number);

const arr = Array.from({ length: N }, (v, i) => i);

for (let i = 0; i < M; i++) {
  let [start, end, mid] = input[i].split(" ").map(Number);
}

/*
  입력
  10 5
  1 6 4
  3 9 8
  2 10 5
  1 3 3
  2 6 2

  출력
  1 4 6 2 3 7 10 5 8 9
*/
