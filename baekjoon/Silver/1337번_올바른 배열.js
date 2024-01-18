// 올바른 배열
// 링크:

// 문제풀이(1)
// 배열안에 5개 연속으로 나올 수 있는 경우 0, 없을 경우 추가해야할 원소의 최소 개수를 구하는 문제이다.
// 주어진 배열에 값들을 오름차순으로 정렬한다.
// 연속적으로 숫자를 추가한 뒤 필요하지 않은 값들을 제거하여 크기를 비교한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const getMaxContinuousNum = (numbers) => {
  let max = 0;

  for (let i = 0; i < numbers.length; i++) {
    const set = new Set([numbers[i] + 1, numbers[i] + 2, numbers[i] + 3, numbers[i] + 4]);
    let cnt = 0;

    for (let j = 0; j < numbers.length; j++) {
      if (set.has(numbers[j])) {
        cnt++;
      }
    }

    max = Math.max(max, cnt);
  }

  return max;
};

const [N, ...numbers] = input.map(Number);
numbers.sort((a, b) => a - b);

console.log(4 - getMaxContinuousNum(numbers));

// input
// 3
// 5
// 6
// 7

// output
// 2
