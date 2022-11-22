// N개의 최소공배수
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12953?language=javascript

// 문제풀이(1)
// 유클리드 호제법 (최대 공약수)
function gcd(a, b) {
  if (a % b === 0) return b;
  return gcd(b, a % b);
}

function solution(arr) {
  let answer = 1;

  for (let i of arr) {
    // 최소 공배수 구하는 식
    answer = Math.floor((answer * i) / gcd(answer, i));
  }

  return answer;
}

console.log(solution([2, 6, 8, 14])); // 168
console.log(solution([1, 2, 3])); // 6
