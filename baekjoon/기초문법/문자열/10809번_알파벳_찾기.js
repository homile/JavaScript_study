/* 알파벳 찾기
링크: https://www.acmicpc.net/problem/10809

[문제접근]
String.fromCharCode() 아스키코드 함수사용법,
indexOf() 인덱스 번호 찾는 것을 묻는다.
*/ 

// 문제풀이(1)
function solution(input){
   //const str = require('fs').readFileSync('/dev/stdin').toString();
   const str = input.trim();
   const answer = [];

   for (let i = 97; i <= 122; i++){
      answer.push(str.indexOf(String.fromCharCode(i)));
   }

   console.log(answer.join(' '));
}

console.log(solution(`baekjoon`));