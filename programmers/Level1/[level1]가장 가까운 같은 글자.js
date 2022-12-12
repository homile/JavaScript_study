// 가장 가까운 같은 글자
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/142086

// 문제풀이(1)
// 문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서
// 자신과 가장 가까운 곳에 있는 같은 글자가 어디있느지 알고 싶다.
function solution(s) {
  const answer = [];
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    let index = arr.lastIndexOf(s[i]);
    if (index !== -1) {
      answer.push(Math.abs(index - i));
    } else {
      answer.push(index);
    }
    arr.push(s[i]);
  }

  return answer;
}

console.log(solution("banana")); // [-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); // [-1, -1, 1, -1, -1, -1]
