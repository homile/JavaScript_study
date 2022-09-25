// 하샤드 수
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12947?language=javascript

// 문제풀이(1)
function solution(x) {
  // 7시 22분 -> 7시 25분
  // 18 -> 1+8 = 9 -> 18 / 9 === 0 하샤드 수
  let divide = 0;
  let arr = String(x).split("");

  for (let i in arr) {
    divide += Number(arr[i]);
  }

  return x % divide === 0 ? true : false;
}

console.log(solution(10));    // true
console.log(solution(12));    // true
console.log(solution(11));    // false
console.log(solution(13));    // false

