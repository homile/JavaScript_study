// 콜라 문제
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/132267

// 문제풀이(1)
function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    let cola = n % a;
    n = Math.floor(n / a) * b;

    answer += n;
    n += cola;
  }

  return answer;
}

console.log(solution(2, 1, 20)); // 19
console.log(solution(3, 1, 20)); // 9
