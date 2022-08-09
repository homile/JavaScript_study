// 모의고사
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42840?language=javascript

// 문제풀이(1)
function solution(answers) {
  let result = [];
  
  // 문제 속에 패턴이 있다.
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let count = [0, 0, 0];
  
  for (let i = 0; i < answers.length; i++){
      if(answers[i] === arr1[i]) count[0] += 1;
      if(answers[i] === arr2[i]) count[1] += 1;
      if(answers[i] === arr3[i]) count[2] += 1;
  }
  
  
  return count;
}

console.log(solution([1, 2, 3, 4, 5]));   // [1]
console.log(solution([1, 3, 2, 4, 2]));   // [1, 2, 3]