// 가운데 글자 가져오기
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12903

// 문제풀이(1)
function solution(s) {
  let len = s.length;

  return len % 2 === 0 ? s[len/2-1] + s[len/2] : s[Math.ceil(len/2)-1];
}

console.log(solution("abcde"));   // "c"
console.log(solution("qwer"));   // "we"