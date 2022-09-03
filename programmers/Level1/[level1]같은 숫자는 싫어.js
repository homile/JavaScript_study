// 같은 숫자는 싫어
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12906

// 문제풀이(1)
function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      answer.push(arr[i]);
    }
  }

  let r = arr.filter((v, i) => v === v[i + 1]);

  return r;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); // [4,3]
