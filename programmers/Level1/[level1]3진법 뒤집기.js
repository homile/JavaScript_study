// 3진법 뒤집기
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/68935

// 문제풀이(1)
function solution(n) {
  // toString으로 3진법으로 변환 뒤집기 위해서 split으로 자르고 reverse로 뒤집고
  // join으로 붙인다음 parseInt로 3진법을 10진수로 변경한다.
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

console.log(solution(45)); // 7
console.log(solution(125)); // 229
