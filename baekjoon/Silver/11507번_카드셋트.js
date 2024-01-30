// 카드셋트
// 링크: https://www.acmicpc.net/problem/11507

// 문제풀이(1)
// P, K, H, T의 카드가 각 13개씩 존재하는데 입력에 중복되지 않은 각 카드의 종류별로 개수를 세어주면 될 것이다.
// 1. 3자리씩 끊어서 카드의 총 개수를 파악한다.
// 2. 카드의 총 개수 중 중복여부를 확인한다. (중복일 경우 'GRESKA' 출력)
// 3. 카드 종류별로 13-가지고 있는 카드수 를 계산한뒤 출력한다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim();

// // 전체 카드 목록
// const totalCardList = [];
// // 중복된 카드 여부
// let flag = false;

// // 카드 등록
// for (let i = 0; i < input.length; i += 3) {
//   const card = input.slice(i, i + 3);

//   if (!totalCardList.includes(card)) {
//     totalCardList.push(card);
//   } else {
//     flag = true;
//     break;
//   }
// }

// if (flag) {
//   console.log("GRESKA");
// } else {
//   const answer = { P: 13, K: 13, H: 13, T: 13 };
//   for (let i = 0; i < totalCardList.length; i++) {
//     answer[totalCardList[i][0]] -= 1;
//   }
//   console.log(Object.values(answer).join(" ").trim());
// }

// 문제풀이(2)
// 문제풀이(1)도 문제는 풀렸지만 입력단계에서 런타임 에러가 발생하는 문제였다.
// 입력을 readline으로 변경하니 해결되었다.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 전체 카드 목록
const totalCardList = [];
// 중복된 카드 여부
let flag = false;

rl.on("line", function (line) {
  const input = line.trim();

  // 카드 등록
  for (let i = 0; i < input.length; i += 3) {
    const card = input.slice(i, i + 3);

    if (!totalCardList.includes(card)) {
      totalCardList.push(card);
    } else {
      flag = true;
      break;
    }
  }

  if (flag) {
    console.log("GRESKA");
  } else {
    const answer = { P: 13, K: 13, H: 13, T: 13 };
    for (let i = 0; i < totalCardList.length; i++) {
      answer[totalCardList[i][0]] -= 1;
    }
    console.log(Object.values(answer).join(" ").trim());
  }

  rl.close();
}).on("close", function () {
  process.exit();
});

// input
// P01K02H03H04

// output
// 12 12 11 13
