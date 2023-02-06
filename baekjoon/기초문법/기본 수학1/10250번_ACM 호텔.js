// ACM 호텔
// 링크 : https://www.acmicpc.net/problem/10250

// 문제 풀이(1)
// h: 호텔의 층 수, w: 각 층의 방 수, n: 몇 번째 손님인지
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const loopNum = Number(input.shift());

for (let i = 0; i < loopNum; i++) {
  let [h, w, n] = input[i].split(" ");

  let roomNum = Math.floor(n / h) + 1;
  let floor = n % h;

  if (n % h === 0) {
    roomNum = n / h;
    floor = h;
  }
  console.log(floor * 100 + roomNum);
}


// input
// 2
// 6 12 10
// 30 50 72
