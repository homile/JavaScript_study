/* 단어의 개수
링크: https://www.acmicpc.net/problem/1152
*/ 

// 문제풀이(1)
function solution(input){
   //const str = require('fs').readFileSync('/dev/stdin').toString().split(' ');
   const str = input.split(' ');
   // 입력값이 ""일 경우
   console.log(str[0] === "" ? 0 : str.length);

}

console.log(solution(`The Curious Case of Benjamin Button`));