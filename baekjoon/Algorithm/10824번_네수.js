/* 네 수
링크: https://www.acmicpc.net/problem/10824
*/

// 문제풀이(1)
function solution(input){
   //const numbers = require('fs').readFileSync('/dev/stdin').toString().split('');
   const numbers = input.split(' ');

   let left = numbers[0] + numbers[1];
   let right = numbers[2] + numbers[3];

   console.log(Number(left)+Number(right));
}

console.log(solution(`10 20 30 40`));