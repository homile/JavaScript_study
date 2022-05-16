/* 최대공약수와 최소공배수
링크: https://www.acmicpc.net/problem/2609
*/ 

// 문제풀이(1)
function solution(input){
   //const numbers = require('fs').readFileSync('/dev/stdin').toString().split(' ');
   const numbers = input.split(' ');
   let minNum = Math.min(...numbers);
   let maxNum = Math.max(...numbers);

   // 유클리드 호제법
   while (minNum % maxNum !== 0){
      let n = minNum % maxNum;
      if (n !== 0){
         minNum = maxNum;
         maxNum = n;
      }
   }

   console.log(maxNum);
   console.log(numbers[0]*numbers[1]/maxNum);

   // console.log(Math.min(...numbers), Math.max(...numbers));
}

solution(`24 18`);
// 6
// 72