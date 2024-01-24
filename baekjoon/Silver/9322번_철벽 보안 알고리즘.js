// 철벽 보안 알고리즘
// 링크: https://www.acmicpc.net/problem/9322

// 문제풀이(1)
// 1공개키의 위치에 맞는 2공개키의 인덱스 번호를 구한다.
// ㄴ 1공개키: A B C D, 2공개키: D A B C 일 때, 2공개키의 인덱스는 4 1 2 3 이다.
// 암호문을 2공개키로 구한 인덱스번호에 맞춰서 해독한다.
// ㄴ 암호문: C B A P, 2공개키의 인덱스: 4 1 2 3 일 때, 해독하면 B A P C 가 된다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const T = Number(input.shift());

const answer = [];

const checkIndex = (publicKey1, publicKey2) => {
  return publicKey2.map((targetKey) => publicKey1.indexOf(targetKey));
};

for (let i = 0; i < T; i++) {
  const wordCount = Number(input.shift());
  const publicKey1 = input.shift().split(" ");
  const publicKey2 = input.shift().split(" ");
  const ciphertext = input.shift().split(" ");

  const matchIndex = checkIndex(publicKey1, publicKey2);

  const arr = Array.from({ length: wordCount }).fill("");

  matchIndex.forEach((el, idx) => {
    arr[el] = ciphertext[idx];
  });

  answer.push(arr.join(" "));
}

console.log(answer.join("\n"));

// input
// 2
// 4
// A B C D
// D A B C
// C B A P
// 3
// SECURITY THROUGH OBSCURITY
// OBSCURITY THROUGH SECURITY
// TOMORROW ATTACK WE

// output
// B A P C
// WE ATTACK TOMORROW
