// 나누어 떨어지는 숫자 배열
// 링크: https://programmers.co.kr/learn/courses/30/lessons/12910?language=javascript

// 문제풀이(1)
function solution(arr, divisor) {
  let answer = [];
  
  for (let i = 0; i < arr.length; i++){
      if (arr[i]%divisor === 0){
          answer.push(arr[i])
      }
  }
  
  return answer.length === 0 ? [-1] : answer.sort((a,b) => a-b);
}


// 문제풀이(2)
function solution(arr, divisor) {
  let answer = arr.filter((el) => el%divisor === 0)
  
  return answer.length === 0 ? [-1] : answer.sort((a,b) => a-b);
}

console.log(solution([5, 9, 7, 10], 5));    // [5, 10]
console.log(solution([2, 36, 1, 3], 1));    // [1, 2, 3, 36]
console.log(solution([3,2,6], 10));    // [-1]