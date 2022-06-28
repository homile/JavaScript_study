// 정수 제곱근 판별
// 링크: https://programmers.co.kr/learn/courses/30/lessons/12934?language=javascript

// 문제풀이(1)
function solution(n) {
    
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n)+1)**2 : -1;
}

console.log(solution(121));   // 144
console.log(solution(3));     // -1