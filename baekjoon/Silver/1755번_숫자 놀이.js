// 숫자 놀이
// 링크: https://www.acmicpc.net/problem/1755

// 문제풀이(1)
// 1. 영어와 숫자가 일치하는 객체를 생성한다.
// 2. 최대 2자리수까지 있는 숫자들을 한글자씩 영어로 변경하는 로직을 구현한다.
// 3. 각 자리수를 영어를 기준으로 정렬해준다.
// 4. 정렬하여 맞는 숫자를 출력한다. 이때, 10개씩 끊어서 출력한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [M, N] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

const dictionary = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  0: "zero",
};

const changeResult = [];

let answer = "";

const NumberToString = (number) => {
  const str = String(number);
  const temp = [];
  temp.push(number);

  for (let i = 0; i < str.length; i++) {
    temp.push(dictionary[str[i]]);
  }

  return temp;
};

for (let i = M; i <= N; i++) {
  changeResult.push(NumberToString(i));
}

changeResult.sort((a, b) => {
  if (a[1] > b[1]) return 1;
  if (a[1] < b[1]) return -1;
  if (a[2] > b[2]) return 1;
  if (a[2] < b[2]) return -1;
});

changeResult.forEach((value, idx) => {
  answer += `${value[0]} `;
  if ((idx + 1) % 10 === 0) {
    answer.trim();
    answer += "\n";
  }
});

console.log(answer);

// input
// 8 28

// output
// 8 9 18 15 14 19 11 17 16 13
// 12 10 28 25 24 21 27 26 23 22
// 20
