/* 상수
링크: https://www.acmicpc.net/problem/2908
*/ 

function solution(input){
   //const number = require('fs').readFileSync('/dev/stdin').toString().split(' ');
   const number = input.split(' ');
   let result = [];

   for (let i = 0; i < number.length; i++){
      let answer = '';
      for (let j = number[i].length-1; j >= 0; j--){
         answer += number[i][j];
      }
      result.push(Number(answer));
   }

   console.log(Math.max(...result));
}

console.log(solution(`734 893`));