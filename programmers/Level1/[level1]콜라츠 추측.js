// 콜라츠 추축
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12943

// 문제풀이(1)
function solution(num) {
  let count = 0;
  while (num > 1) {
    num % 2 === 0 ? (num /= 2) : (num = num * 3 + 1);

    if (count === 500) {
      count = -1;
      break;
    }
    count++;
  }
  return count;
}

console.log(solution(6));     // 8
console.log(solution(16));     // 4
console.log(solution(626331));     // -1