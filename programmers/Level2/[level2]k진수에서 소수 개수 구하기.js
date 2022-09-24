// k진수에서 소수 개수 구하기
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/92335

// 문제풀이(1)
function primeNumber(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n, k) {
  let answer = 0;
  let change = n.toString(k).split(0);

  for (let i = 0; i < change.length; i++) {
    if (primeNumber(Number(change[i]))) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(437674, 3));   // 3
console.log(solution(110011, 10));   // 2
