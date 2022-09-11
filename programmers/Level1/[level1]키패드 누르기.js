// 키패드 누르기
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/67256?language=javascript

// 문제풀이(1)
function solution(numbers, hand) {
  let answer = "";

  const left_numbers = [1, 4, 7, 10];
  const right_numbers = [3, 6, 9, 12];
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
// "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
// "LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));
// "LLRLLRLLRL"