// 체스판 다시 칠하기
// 링크: https://www.acmicpc.net/problem/1018

// 문제풀이(1)
// 8x8의 체스판은 흰색과 검은색으로 칠하는데 번갈아서 칠해져 있어야 한다.
// 다시 칠했을 경우 8x8의 정사각형의 최소 개수를 구하는 문제.

// 정상적인 체스판을 시작이 검은색인것 하나 흰색인거 하나 총 2개를 만든다.
// 8x8의 체스판으로 쪼개서 확인했을 때 변경해야할 부분이 몇개인지 찾는 로직을 구현한다.
// 주어진 체스판 내에서 반복순회한다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// const [N, M] = input.shift().split(" ").map(Number);

// const whiteStartBoard = [
//   "WBWBWBWB",
//   "BWBWBWBW",
//   "WBWBWBWB",
//   "BWBWBWBW",
//   "WBWBWBWB",
//   "BWBWBWBW",
//   "WBWBWBWB",
//   "BWBWBWBW",
// ];

// const blackStartBoard = [
//   "BWBWBWBW",
//   "WBWBWBWB",
//   "BWBWBWBW",
//   "WBWBWBWB",
//   "BWBWBWBW",
//   "WBWBWBWB",
//   "BWBWBWBW",
//   "WBWBWBWB",
// ];

// const answer = [];

// // 정상적인 보드인지 체크하는 함수
// const boardCheck = (x, y, colorBoard) => {
//   let count = 0;

//   for (let i = y; i < y + 8; i++) {
//     for (let j = x; j < x + 8; j++) {
//       if (input[i][j] !== colorBoard[i - y][j - x]) {
//         count++;
//       }
//     }
//   }

//   return count;
// };

// for (let i = 0; i + 7 < N; i++) {
//   for (let j = 0; j + 7 < M; j++) {
//     answer.push(boardCheck(j, i, whiteStartBoard));
//     answer.push(boardCheck(j, i, blackStartBoard));
//   }
// }

// console.log(Math.min(...answer));

// 문제풀이(2)
// whiteStartBoard, blackStartBoard를 직접적으로 정의하지 않고 구현하는 코드를 작성한다.
// 임의로 사용자가 지정했을 경우 반복되는 알파벳이기 때문에 오류가 생길수 있다. 이를 방지하기 위한 코드를 추가하는 방법이다.
// 속도는 당연히 풀이1번보다는 느릴 수 있다. 하지만, 그 차이가 적을 것이라 생각해 보드를 생성하는 함수를 추가했다.
// 실행속도 차이 192ms -> 196ms
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const generateStartBoard = (word1, word2) => {
  const startBoard = [];
  const colors = [word1, word2];

  for (let i = 0; i < 8; i++) {
    const row = [];

    for (let j = 0; j < 8; j++) {
      // 보드의 색깔을 번갈아가며 채우기
      const colorIndex = (i + j) % 2;
      row.push(colors[colorIndex]);
    }

    startBoard.push(row.join(""));
  }

  return startBoard;
};

const whiteStartBoard = generateStartBoard("W", "B");
const blackStartBoard = generateStartBoard("B", "W");

const answer = [];

// 정상적인 보드인지 체크하는 함수
const boardCheck = (x, y, colorBoard) => {
  let count = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (input[i][j] !== colorBoard[i - y][j - x]) {
        count++;
      }
    }
  }

  return count;
};

for (let i = 0; i + 7 < N; i++) {
  for (let j = 0; j + 7 < M; j++) {
    answer.push(boardCheck(j, i, whiteStartBoard));
    answer.push(boardCheck(j, i, blackStartBoard));
  }
}

console.log(Math.min(...answer));

// 입력
// 10 13
// BBBBBBBBWBWBW
// BBBBBBBBBWBWB
// BBBBBBBBWBWBW
// BBBBBBBBBWBWB
// BBBBBBBBWBWBW
// BBBBBBBBBWBWB
// BBBBBBBBWBWBW
// BBBBBBBBBWBWB
// WWWWWWWWWWBWB
// WWWWWWWWWWBWB

// 출력
// 12
