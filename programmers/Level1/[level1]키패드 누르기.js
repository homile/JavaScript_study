// 키패드 누르기
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/67256?language=javascript

// 문제풀이(1)
function solution(numbers, hand) {
  let answer = "";

  // 왼쪽 패드
  const left_numbers = [1, 4, 7];
  // 오른쪽 패드
  const right_numbers = [3, 6, 9];
  // 왼 손가락의 패드 위치
  let left_finger = 10;
  //오른 손가락의 패드 위치
  let right_finger = 12;

  for (let i = 0; i < numbers.length; i++) {
    // 2번 조건
    if (left_numbers.includes(numbers[i])) {
      answer += "L";
      left_finger = numbers[i];
    }
    // 3번 조건
    else if (right_numbers.includes(numbers[i])) {
      answer += "R";
      right_finger = numbers[i];
    } else {
      let middle_num = numbers[i];
      if (middle_num === 0) middle_num = 11;
      // 왼, 오른쪽 손가락이 2, 5, 8, 0에 위치할 경우도 생각 해야함.
      let left_num =
        Math.floor(Math.abs(left_finger - middle_num) / 3) +
        (Math.abs(left_finger - middle_num) % 3);
      let right_num =
        Math.floor(Math.abs(right_finger - middle_num) / 3) +
        (Math.abs(right_finger - middle_num) % 3);

      // 거리가 같을 때
      if (left_num === right_num) {
        if (hand === "right") {
          answer += "R";
          right_finger = middle_num;
        } else {
          answer += "L";
          left_finger = middle_num;
        }
      }else if(left_num < right_num){
        answer += "L"
        left_finger = middle_num;
      }else{
        answer += "R"
        right_finger = middle_num
      }
    }
  }
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
// "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
// "LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));
// "LLRLLRLLRL"
