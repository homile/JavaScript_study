// 점프와 순간 이동
// 링크:

// 문제풀이(1)
function solution(n) {
  // 한 번에 k 칸을 앞으로 점프하거나
  // 현재까지 온 거리 x 2에 해당하는 위치로 순간이동 할 수 있다.
  // 순간이동을 하면 건전지 사용량이 줄지 않지만, 앞으로 k칸을 점프하면 k만큼 건전지가 소모됨.
  // 건전지 사용량의 최솟값으 return
  let answer = 0;

  while (n > 0) {
    // 몫 (순간이동)
    let quotient = Math.floor(n / 2);
    // 나머지 (점프)
    let remainder = n % 2;

    n = quotient;
    // 짝수가 아닐경우 점프해야함
    if (remainder !== 0) {
      answer += 1;
    }
  }

  return answer;
}

console.log(solution(5)); // 2
console.log(solution(6)); // 2
console.log(solution(5000));  // 5
