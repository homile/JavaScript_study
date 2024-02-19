// 당근 키우기
// 링크: https://www.acmicpc.net/problem/20363

// 문제풀이(1)
// 햇빛을 10번 받을 때 마다 수분이 1 감소하고, 물을 10번 줄 때 마다 온기가 1 감소한다.
// 맨 처음 온기와 수분은 0이다.
// X와 Y의 값을 더해주고 10마다 온기 또는 수분이 감소하기 떄문에 최소한으로 하려면 X와 Y의 최솟값을 10으로 나눈 것을 합해준다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [X, Y] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

console.log(X + Y + Math.floor(Math.min(X, Y) / 10));

// input
// 123456 12345

// output
// 137035
