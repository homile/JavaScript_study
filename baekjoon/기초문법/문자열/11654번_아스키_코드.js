/* 아스키 코드
링크: https://www.acmicpc.net/problem/11654
*/ 

// 문제풀이(1)
function solution(input){
   //const eng = require('fs').readFileSync('/dev/stdin').toString().trim();
   const eng = input.trim();

   console.log(eng.charCodeAt(0));

}

console.log(solution(`A`));