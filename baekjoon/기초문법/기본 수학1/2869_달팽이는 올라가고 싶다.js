// 달팽이는 올라가고 싶다.
// 링크: https://www.acmicpc.net/problem/2869

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [A, B, V] = require("fs").readFileSync(filePath).toString().trim().split(" ");

console.log(Math.ceil((V - B) / (A - B)));
