// 정수 제곱근
// 링크: https://www.acmicpc.net/problem/2417

// 문제풀이(1)
// 처음엔 간단하게 Math.sqrt를 사용해서 제곱근을 구하면 될 것이라 생각해서 풀어보았다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const n = Number(require("fs").readFileSync(filePath).toString().trim());

// 제곱근을 찾는다.
// let result = Math.floor(Math.sqrt(n));

// 제곱근보다 작을 경우 +1을 해준다.
// console.log(result ** 2 < n ? result + 1 : result);

// 문제풀이(2)
// 이진 탐색으로 푸는 방법이 있다고하여 구현해보았다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = Number(require("fs").readFileSync(filePath).toString().trim());

const binarySearch = (num) => {
  let low = 0;
  let high = num;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid * mid < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
};

console.log(binarySearch(n));

// input
// 122333444455555

// output
// 11060446
