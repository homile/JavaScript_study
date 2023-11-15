// 2xn 타일링
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12900

// 문제풀이(1)
// 피보나치 수열 - dp문제
// n이 1인경우부터 하나하나 계산했을 경우 피보나치 수 인것을 알 수 있다.
function solution(n) {
  const dp = [1, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }

  return dp[n];
}

// 4	5
