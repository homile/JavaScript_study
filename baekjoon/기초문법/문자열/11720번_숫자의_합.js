/* 숫자의 합
링크: https://www.acmicpc.net/problem/11720
*/ 

// 문제풀이(1)
function solution(input){
   //const num = require('fs').readFileSync('/dev/stdin').toString().split('\n');
   const num = input.split('\n');
   const numbers = num[1].split('');
   let answer = 0;
   for (let i = 0; i < Number(num[0]); i++){
      answer += Number(numbers[i]);
   }

   console.log(answer);
}

console.log(solution(`5
54321`));