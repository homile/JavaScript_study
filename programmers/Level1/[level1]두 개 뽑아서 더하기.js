// 두 개 뽑아서 더하기
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/68644

// 문제풀이(1)
function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];

      if (i !== j && answer.includes(sum) === false) {
        answer.push(sum);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1])); // [2,3,4,5,6,7]
console.log(solution([5, 0, 2, 7])); // [2,5,7,9,12]
