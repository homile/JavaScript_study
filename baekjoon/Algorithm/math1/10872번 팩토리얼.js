/* 팩토리얼
링크: https://www.acmicpc.net/problem/10872
*/ 

// 문제풀이(1)
function solution(input){
  //const numbers = require('fs').readFileSync('/dev/stdin').toString().split(' ');
  const num = input;
  let total = 1;
  
  for (let i = 1; i <= num; i++){
    total *= i;
  }

  console.log(total);

}


console.log(solution(10));    // 3628800