// 문자열 내 마음대로 정렬하기
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12915?language=javascript

// 문제풀이(1)
function solution(strings, n) {
  let answer = [];
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i][n] + strings[i];
  }
  strings.sort();

  for (let i of strings) {
    answer.push(i.slice(1));
  }
  return answer;
}

console.log(solution(["sun", "bed", "car"], 1));
// ["car", "bed", "sun"]
console.log(solution(["abce", "abcd", "cdx"], 2));
// ["abcd", "abce", "cdx"]
