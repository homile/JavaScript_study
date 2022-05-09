/* 접미사 배열
링크: https://www.acmicpc.net/problem/11656
*/

function solution(input){
    //const str = require('fs').readFileSync('/dev/stdin').toString().trim();
   const str = input;

   let stack = [];

   for (let i = 0; i < str.length; i++){
      stack.push(str.slice(i));
   }
   console.log(stack.sort().join('\n'));
}

console.log(solution(`baekjoon`));