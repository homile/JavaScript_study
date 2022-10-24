// 최솟값 만들기
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12941?language=javascript

// 문제풀이(1)
function solution(A, B) {
  // 배열 A, B에서 각각 한개의 숫자를 뽑아 두 수를 곱한다.
  // 두 수를 곱한 값을 누적해서 더한다
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4])); // 29
console.log(solution([1, 2], [3, 4])); // 10
