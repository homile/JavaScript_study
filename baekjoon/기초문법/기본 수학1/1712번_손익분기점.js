/* 손익분기점
링크: https://www.acmicpc.net/problem/1712

[문제접근]
A = 고정비용, B = 재료비/인건비, C = 노트북 가격
*/ 

// 문제풀이(1)
function solution(input){
   //const [A, B, C] = require('fs').readFileSync('/dev/stdin').toString().split(' ');
   const [A, B, C] = input.split(' ');
   console.log(A, B, C);

   let answer = Math.floor(Number(A) / (Number(C)-Number(B))) + 1;

   console.log((C-B) <= 0 ? -1 : answer);
}

console.log(solution(`1000 70 170`));     // 11
console.log(solution(`3 2 1`));           // -1
console.log(solution(`2100000000 9 10`)); // 2100000001