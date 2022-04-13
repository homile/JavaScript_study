/* 쇠막대기
링크: https://www.acmicpc.net/problem/10799

[문제접근]
괄호를 가지고 레이저와 쇠막대기를 구분해내는 문제이다.
() = 레이저를 뜻하며
(쇠막(레이저)대기) = 이중 괄호는 쇠막대기의 길이와 레이저를 뜻한다.
'('을 만나고 다음이 ')' 일 때 = 레이저
*/ 

function solution(input){
   //const bracket = require('fs').readFileSync('/dev/stdin').toString().split('');
   const bracket = input.split('');
   let stack = [];
   let answer = 0;

   for (let i = 0; i < bracket.length; i++){
      // 현재 괄호가 '('이고 다음 괄호가')' 일 경우 
      if (bracket[i] === '(' && bracket[i+1] === ')'){
         console.log(bracket[i], bracket[i+1]);
         answer += stack.length;
         i += 1;
      }else if(bracket[i] === '('){
         stack.push(bracket[i]);
      }else if(bracket[i] === ')'){
         stack.pop();
         answer += 1;
      }
   }

   console.log(answer);
}

console.log(solution(`()(((()())(())()))(())`));   // 17