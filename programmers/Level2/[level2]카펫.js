// 카펫
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42842?language=javascript

// 문제풀이(1)
function solution(brown, yellow) {
  let answer = [];

  // 카펫을 가로로 놓았을 경우 총 길이
  let total = brown + yellow;

  for (let i = 0; i <= total; i++) {
    // 높이가 잘 나누어 떨어지는 경우 찾기
    if (total % i === 0) {
      // 가로길이
      let a = Math.floor(total / i);
      // 높이와 길이에서 테두리를 제외한 값이 yellow랑 같은지 판별
      if (yellow === (i - 2) * (a - 2)) {
        return [a, i];
      }
    }
  }
  return answer;
}

console.log(solution());
