// 수박수박수박수박수박수?
// 링크: https://programmers.co.kr/learn/courses/30/lessons/12922?language=javascript

// 문제풀이(1)
function solution(n) {
  // 이럴 경우 수박*4 = 수박수박수박수박으로 결과 도출 후 슬라이스 방식
  // 메모리를 너무 많이 사용한다.
  return '수박'.repeat(n).slice(0, n);
}


// 문제풀이(2)
function solution(n) {
  // n/2를 올림하여 계산 후 슬라이스한다.
  // 수박수박 -> 수박수 로 받아오는 문자열의 길이가 짧아졌다.
  // 제한이 10,000이기 때문에 메모리를 아낄 수 있다.
  let m = Math.ceil(n/2);
  return '수박'.repeat(m).slice(0,n)
}

console.log(solution(3));     // "수박수"
console.log(solution(4));     // "수박수박"