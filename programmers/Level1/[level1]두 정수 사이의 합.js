// 두 정수 사이의 합
// 링크: https://programmers.co.kr/learn/courses/30/lessons/12912?language=javascript

// 문제풀이(1)
function solution(a, b) {
  let answer = 0;
  
  for (let i = Math.min(a,b); i <= Math.max(a,b); i++){
      answer += i;
  }
  return answer;
}

console.log(solution(3, 5));    // 12
console.log(solution(3, 3));    // 3
console.log(solution(5, 3));    // 12