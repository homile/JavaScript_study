// 짝지어 제거하기
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12973?language=javascript

// 문제풀이(1)
function solution(s) {
  const arr = [...s];
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === answer[answer.length - 1]) {
      answer.pop();
    } else {
      answer.push(arr[i]);
    }
  }

  return answer.length ? 0 : 1;
}

console.log(solution(baabaa)); //1
console.log(solution(cdcd)); //0
