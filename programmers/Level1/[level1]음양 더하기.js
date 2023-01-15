// 음양 더하기
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/76501

/* 
  [문제접근]
  signs의 값이 true이면 양수, fasle이면 음수로 
  absolutes의 값을 변경한 후 더하면 된다.
*/

// 문제풀이(1)
function solution(absolutes, signs) {
  let answer = 0;

  for (let i in absolutes) {
    if (signs[i] === false) {
      absolutes[i] = -absolutes[i];
    }
    answer += absolutes[i];
  }

  return answer;
}

// 다른 사람의 풀이(1)
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
console.log(solution([1, 2, 3], [false, false, true])); // 0
