/* 설탕 배달
링크: https://www.acmicpc.net/problem/2839

[문제접근]
봉지 3킬로그램, 5킬로그램
최대한 적은 봉지를 들고 가려고 한다.
정확하게 떨어지지 않는 경우는 -1을 return 한다.
*/

function solution(input){
   //let num = require('fs').readFileSync('/dev/stdin').toString();
   //num = Number(num);
   let num = Number(input);
   let count = 0;
   
   while (true){
      if (num % 5 === 0){
         console.log(num / 5 + count);
         break;
      }
      if (num < 0){
         console.log(-1);
         break;
      }
      count++;
      num -= 3;
   }
   
}

console.log(solution(`18`));  // 4
console.log(solution(`4`));   // -1