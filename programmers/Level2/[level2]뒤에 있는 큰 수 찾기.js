// 뒤에 있는 큰 수 찾기
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/154539

// 정수로 이루어진 배열 numbers
// 배열의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이 있는 수 = 뒷 큰수
// 모든 원소에 대한 뒷 큰수들을 반환

// 문제풀이(1) 실패(시간초과 20 ~ 23)
function solution(numbers) {
  let answer = [];

  numbers.forEach((el, idx) => {
    for (let i = idx + 1; i < numbers.length; i++) {
      if (el < numbers[i]) {
        answer.push(numbers[i]);
        break;
      }
    }

    if (answer.length !== idx + 1) {
      answer.push(-1);
    }
  });

  return answer;
}

// 문제풀이(2)
// 결과 값에 모두 -1을 채운다.
// stack에 인덱스 값을 쌓아준다.
// stack에 값이 있거나 numbers 중 스택의 마지막값이 현재 값보다 작을 경우
// answer에 값을 변경한다.
function solution(numbers) {
  const answer = new Array(numbers.length).fill(-1);
  const stack = [];

  numbers.forEach((el, idx) => {
    while (stack && numbers[stack.at(-1)] < numbers[idx]) {
      answer[stack.pop()] = numbers[idx];
    }
    stack.push(idx);
  });

  return answer;
}

// [2, 3, 3, 5]	[3, 5, 5, -1]
// [9, 1, 5, 3, 6, 2]	[-1, 5, 6, 6, -1, -1]
