// JadenCase 문자열 만들기
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12951

// 문제풀이(1)
function solution(s) {
  let answer = "";
  s = s.toLowerCase().split("");

  for (let i = 0; i < s.length; i++) {
    i === 0 || s[i - 1] === " "
      ? (answer += s[i].toUpperCase())
      : (answer += s[i]);
  }

  return answer;
}

console.log(solution("3people unFollowed me")); // "3people Unfollowed Me"
console.log(solution("for the last week")); // "For The Last Week"
