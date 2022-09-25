// 최대공약수와 최소공배수
// 링크:https://school.programmers.co.kr/learn/courses/30/lessons/12940

// 문제풀이(1)
function solution(n, m) {
  let answer = [];

  let gcd = 1;

  // 최대공약수 구하는 식
  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }
  // console.log(gcd);
  answer.push(gcd);

  // 최소공배수 구하는 식
  let lcm = (n * m) / gcd;
  answer.push(lcm);

  return answer;
}

console.log(solution(3, 12));   // [3, 12]
console.log(solution(2, 5));   // [1, 10]
