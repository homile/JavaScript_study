// 동일한 단어 그룹화하기
// 링크: https://www.acmicpc.net/problem/16499

// 문제풀이(1)
// 1. 정해진 단어들을 오름차순으로 정렬한다.
// 2. set 객체를 활용하여 중복되는 단어들을 제거한다.
// 3. 중복이 제거된 set 객체의 size를 출력한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const setArr = new Set();

arr.forEach((el) => {
  setArr.add(el.split("").sort().join(""));
});

console.log(setArr.size);

// input
// 4
// cat
// dog
// god
// tca

// output
// 2
