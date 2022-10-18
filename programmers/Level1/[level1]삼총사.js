// 삼총사
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/131705

// 문제풀이(1)
function solution(number) {
  var answer = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i; j < number.length; j++) {
      if (i === j) continue;
      for (let k = j; k < number.length; k++) {
        if (i === k || j === k) continue;
        if (number[i] + number[j] + number[k] === 0) answer += 1;
      }
    }
  }
  return answer;
}

console.log(solution([-2, 3, 0, 2, -5])); // 2
console.log(solution([-3, -2, -1, 0, 1, 2, 3])); // 5
console.log(solution([-1, 1, -1, 1])); // 0
