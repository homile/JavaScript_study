// 숫자의 표현
// 링크:https://school.programmers.co.kr/learn/courses/30/lessons/12924?language=javascript

// 문제풀이(1)
function solution(n) {
  let answer = 1;
  for (let i = 1; i < n; i++) {
    let sum = i;
    for (let j = i + 1; j < n; j++) {
      sum += j;
      if (sum === n) {
        answer++;
        break;
      }
      if (sum > n) break;
    }
  }
  return answer;
}

console.log(solution(15)); // 4
