// 빙고
// 링크: https://www.acmicpc.net/problem/2578

// 문제풀이(1)
// 사회자가 부르는 수의 순서에 맞게 철수의 빙고판에 'O'로 변경한다.
// 빙고가 3개가 되는 시점이 사회자가 몇번 수를 불렀는지를 판단하는 로직을 구현한다.
// 사회자가 수를 불러서 철수의 빙고판에 칠하는 로직과 빙고 여부를 알 수 있는 로직을 구현한다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// const chulsoo = input.slice(0, 5).map((numbers) => numbers.split(" ").map(Number));
// const moderator = input.slice(5).map((numbers) => numbers.split(" ").map(Number));

// const N = 5;

// let answer = 0;

// // 빙고판 숫자 색칠하기
// const bingoPainting = (targetNum) => {
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//       if (chulsoo[i][j] === targetNum) {
//         chulsoo[i][j] = "O";
//       }
//     }
//   }
// };

// // 빙고 확인하기
// const bingoCheck = () => {
//   let totalBingoCount = 0;
//   // 가로줄 빙고 확인
//   for (let x = 0; x < N; x++) {
//     if (chulsoo[x].filter((x) => x === "O").length === 5) {
//       totalBingoCount++;
//     }
//   }

//   // 세로줄 빙고 확인
//   for (let x = 0; x < N; x++) {
//     let yBingoCount = 0;
//     for (let y = 0; y < N; y++) {
//       if (chulsoo[y][x] === "O") {
//         yBingoCount++;
//       }
//     }
//     if (yBingoCount === 5) {
//       totalBingoCount++;
//     }
//   }

//   // 대각선 빙고 확인(대각선인 경우는 엑스자 일 경우 밖에 없기 때문에 2번만 확인하면 됨)
//   // [[0,0], [1,1], [2,2], [3,3], [4,4]]
//   // [[0,4], [1,3], [2,2], [3,1], [4,0]]
//   let leftDiagonalBingoCount = 0;
//   let rightDiagonalBingoCount = 0;
//   for (let i = 0; i < N; i++) {
//     if (chulsoo[i][i] === "O") {
//       leftDiagonalBingoCount++;
//     }

//     if (chulsoo[i][N - 1 - i] === "O") {
//       rightDiagonalBingoCount++;
//     }
//   }

//   if (leftDiagonalBingoCount === N) {
//     totalBingoCount++;
//   }

//   if (rightDiagonalBingoCount === N) {
//     totalBingoCount++;
//   }

//   return totalBingoCount;
// };

// for (let i = 0; i < N; i++) {
//   let bingoCount = 0;
//   for (let j = 0; j < N; j++) {
//     answer++;
//     bingoPainting(moderator[i][j]);
//     bingoCount = bingoCheck();
//     if (bingoCount >= 3) {
//       break;
//     }
//   }

//   if (bingoCount >= 3) {
//     break;
//   }
// }

// console.log(answer);

// 문제풀이(2) - 리팩토링
// 1. 중복된 코드 최소화
// 2. 빙고확인할 때 every 메서드 사용
// 3. for문 중단문 2개를 process.exit(0);를 사용하여 종료
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const chulsoo = input.slice(0, 5).map((numbers) => numbers.split(" ").map(Number));
const moderator = input.slice(5).map((numbers) => numbers.split(" ").map(Number));

const N = 5;

let answer = 0;

// 빙고판 숫자 색칠하기
const bingoPainting = (targetNum) => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (chulsoo[i][j] === targetNum) {
        chulsoo[i][j] = "O";
      }
    }
  }
};

// 빙고 확인하기
const bingoCheck = () => {
  let count = 0;

  // 가로, 세로, 대각선 빙고 확인
  for (let i = 0; i < N; i++) {
    if (chulsoo[i].every((val) => val === "O")) count++; // 가로 빙고 확인
    if (chulsoo.every((row) => row[i] === "O")) count++; // 세로 빙고 확인
  }

  // 대각선 빙고 확인
  if (chulsoo.every((row, idx) => row[idx] === "O")) count++;
  if (chulsoo.every((row, idx) => row[N - idx - 1] === "O")) count++;

  return count;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    answer++;
    bingoPainting(moderator[i][j]);
    if (bingoCheck() >= 3) {
      console.log(answer);
      process.exit(0);
    }
  }
}

// 입력
// 11 12 2 24 10
// 16 1 13 3 25
// 6 20 5 21 17
// 19 4 8 14 9
// 22 15 7 23 18
// 5 10 7 16 2
// 4 22 8 17 13
// 3 18 1 6 25
// 12 19 23 14 21
// 11 24 9 20 15

// 출력
// 15
