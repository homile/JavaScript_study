/* 큰 수 A+B
링크: https://www.acmicpc.net/problem/10757
*/

// 문제풀이(1)
function solution(input){
   //let [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
   let [A, B] = input.split(' ');
   A = BigInt(A);
   B = BigInt(B);

   let answer = String(BigInt(A) + BigInt(B));

   console.log(answer);
}

console.log(solution(`9223372036854775807 9223372036854775808`));