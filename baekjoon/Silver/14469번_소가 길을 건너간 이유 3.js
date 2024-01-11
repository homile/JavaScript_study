// 소가 길을 건너간 이유 3
// 링크: https://www.acmicpc.net/problem/14469

// 문제풀이(1)
// 1 2(1번소) 3(1번소 검사완료) 4 5(3번소) 6 7 8 9 10 11 12(3번소 검사완료) 13(2번소) 14 15(2번소 검사완료)
// 위와 같이 진행될 때 소는 먼저온 순서로 들어가는 형식이다. 그렇기때문에 소의 도착시간 순서로 정렬한 뒤 계산한다.
// 배열 순회할 때 마다 time에 start + end를 더해준다.
// 이때, 현재 time > start이면 time에 end 만 더해주고, time <= start 일 경우 start - time + end로 계산한다.
// start - time을 하는 이유는 이전에 지나간 시간은 start에서 제거를 해야하기 때문이다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const arr = input.map((el) => el.split(" ").map(Number));
arr.sort((a, b) => a[0] - b[0]);

let time = 0;

arr.forEach((value) => {
  const [start, end] = value;
  if (time > start) {
    time += end;
  } else {
    time += start - time + end;
  }
});

console.log(time);

// input
// 3
// 2 1
// 8 3
// 5 7

// output
// 15
