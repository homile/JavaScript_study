// 최댓값과 최솟값
// 링크:https://school.programmers.co.kr/learn/courses/30/lessons/12939?language=javascript

// 문제풀이(1)
function solution(s) {
  let answer = "";
  s = s.split(" ");
  answer += Math.min(...s) + " ";
  answer += Math.max(...s);

  return answer;
}

console.log(solution("1 2 3 4")); // "1 4"
console.log(solution("-1 -2 -3 -4")); // "-4 -1"
console.log(solution("-1 -1")); // "-1 -1"
