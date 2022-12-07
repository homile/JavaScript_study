// 멀리 뛰기
// 링크:

// 문제풀이(1)
// 효진이는 한번에 1칸 or 2칸을 뛸 수 있는데 n개의 칸을 뛸 수 있는 경우의 수를 물어보는 문제
// 피보나치 수 = 동적 프로그래밍
function solution(n) {
  // 초기 빈 배열 추가
  const dp = new Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    // % 1234567을 하는 이유
    // 피보나치수로 계산하게 될 경우 50번째까지만 가도 int형을 초과하게 된다.
    // (A + B) % C ≡ ( ( A % C ) + ( B % C) ) % C의 공식
    // int 형의 범위를 벗어나지 않도록하기 위함.
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  return dp[n];
}

console.log(solution(4)); // 5
console.log(solution(3)); // 3
