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
  
  // 반복돼야하기 때문에 수포자들의 찍기 패턴의 길이를 i로 나눈 나머지로 하면 무한 순회 가능
  for (let i = 0; i < answers.length; i++){
      if(answers[i] === arr1[i%arr1.length]) count[0] += 1;
      if(answers[i] === arr2[i%arr2.length]) count[1] += 1;
      if(answers[i] === arr3[i%arr3.length]) count[2] += 1;
  }
  
  for (let i = 0; i < 3; i++){
      Math.max(...count) <= count[i] && result.push(i+1)    
  }
  
  return result;
}

console.log(solution([1, 2, 3, 4, 5]));   // [1]
console.log(solution([1, 3, 2, 4, 2]));   // [1, 2, 3]