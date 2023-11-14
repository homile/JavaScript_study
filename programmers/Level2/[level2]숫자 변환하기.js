// 숫자 변환하기
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/154538

// 모든 결과값을 계산한 값을 dp에 할당한다.
// dp의

// 문제풀이(1)
function solution(x, y, n) {
  // 예외처리
  if (x === y) return 0;

  // dp 초기값 할당
  const dp = new Array(y + 1).fill(Infinity);
  dp[x] = 0;

  for (let i = x + 1; i <= y; i++) {
    // 계산한 값이 조건에 맞는다면 count++
    if (x <= i - n) dp[i] = Math.min(dp[i], dp[i - n] + 1);
    if (i % 2 === 0 && x <= i / 2) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 === 0 && x <= i / 3) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }

  return dp[y] === Infinity ? -1 : dp[y];
}

// 10	40	5	2
// 10	40	30	1
// 2	5	4	-1
