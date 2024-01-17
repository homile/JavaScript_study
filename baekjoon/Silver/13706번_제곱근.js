// 제곱근
// 링크: https://www.acmicpc.net/problem/13706

// 문제풀이(1) - 실패
// sqrt 메서드를 사용해서 풀면 될 줄 알았지만 되지 않았다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let number = BigInt(require("fs").readFileSync(filePath).toString().trim());

// console.log(Math.sqrt(number.toString()));

// 문제풀이(2)
// 알고리즘이 잘 생각나지 않아서 검색한 결과 이진탐색으로 풀 수 있다는 것을 알았다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let number = BigInt(require("fs").readFileSync(filePath).toString().trim());

const binarySearch = (number) => {
  let low = 1n;
  let high = BigInt(number);

  while (low <= high) {
    let mid = (low + high) / 2n;

    if (mid ** 2n > number) {
      high = mid - 1n;
    } else if (mid ** 2n < number) {
      low = mid + 1n;
    } else {
      return mid;
    }
  }
};

console.log(binarySearch(number).toString());

// input
// 36

// output
// 6
