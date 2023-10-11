// 바구니 뒤집기
// 링크: https://www.acmicpc.net/problem/10811

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
