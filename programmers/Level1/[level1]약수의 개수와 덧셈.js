// 약수의 개수와 덧셈
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/77884

// 문제풀이(1)
function solution(left, right) {
  let answer = 0;
  
  for(let i = left; i <= right; i++){
      let count = 0;
      for(let j = 1; j <= i; j++){
          if (i % j === 0) count += 1;
          
      }
      count % 2 === 0 ? answer += i : answer -= i;
  }
  
  return answer;
}

console.log(solution(13, 17));  // 43
console.log(solution(24, 27));  // 52