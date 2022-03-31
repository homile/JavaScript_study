/* 한수
링크: https://www.acmicpc.net/problem/1065
*/

// 문제풀이(1)
function solution(input){
   //const num = require('fs').readFileSync('/dev/stdin').toString().trim();
   const num = input.trim();
   let count = 0;
   for (let i = 1; i <= Number(num); i++){
      if (i < 100){
         count++;
      }else{
         if(Number(String(i)[0]) - Number(String(i)[1]) === Number(String(i)[1]) - Number(String(i)[2])){
            count++;
         }
      }
   }
   console.log(count);


}

console.log(solution(`1000`));