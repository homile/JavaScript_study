// 올바른 괄호
// 링크:

// 문제풀이(1)
function solution(s) {
  if (s[0] === ")") return false;
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      arr.push(s[i]);
    } else {
      arr.pop();
    }
  }

  return arr.length === 0 ? true : false;
}

console.log(solution("()()")); // true
console.log(solution("(())()")); // true
console.log(solution(")()(")); // false
console.log(solution("(()(")); // false
