// 예상 대진표
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12985?language=javascript

// 문제풀이(1)
// N명이 참가, 토너먼트
// N명의 참가자는 각각 1부터 N번을 차례대로 배정받는다.
// 1번 <-> 2번, 3번 <-> 4번
// a와 b가 무조건 이긴다고 가정하여 언제 만나는지 찾기.
// 부전승 없음
function solution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    // 부전승이 없기 때문에 짝수로 계산하여 푼다.
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
    // 1 2  3 a  5 6  7 b
    // 2 a  6 b
    // a b
  }

  return answer;
}

console.log(solution(8, 4, 7)); // 3
