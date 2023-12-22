// 좋은단어
// 링크: https://www.acmicpc.net/problem/3986

// 문제풀이(1)
// 꾸벅꾸벅 졸다가 모든 글자의 A와 B가 바뀌었다면 그냥 ctr+z를 눌르면 될 것 같다는 생각이 들었지만 예시이기 때문에 넘어가기로 했다.
// 단어 위로 아치형 곡선을 그어 같은 글자끼리 짝을 짓고 선이 겹치지 않는 다는 것이 어떤 말인지 잘 감이 잡히지 않아서 직접 그려보았다.
// ABAB -> 곡선을 그었을때 첫번째 B와 두번쨰 A의 곡선이 겹치기 떄문에 좋은 단어가 아니다.
// AABB -> 곡선을 그었을때 겹치지 않기 떄문에 좋은 단어이다.
// ABBA -> 곡선을 그었을때 겹치지 않기 때문에 좋은 단어이다.
// 규칙성을 보았을 때, 올바른 괄호와 같은 형식으로 풀면될 것 같다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n");

let answer = 0;

arr.forEach((word) => {
  if (word.length % 2 === 0) {
    const stack = [];

    for (let i = 0; i < word.length; i++) {
      if (stack.length === 0) {
        stack.push(word[i]);
        continue;
      }

      if (stack.at(-1) === word[i]) {
        stack.pop();
      } else {
        stack.push(word[i]);
      }
    }

    if (stack.length === 0) {
      answer++;
    }
  }
});

console.log(answer);

// 입력
// 3
// ABAB
// AABB
// ABBA

// 출력
// 2
