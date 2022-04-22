/* 후위 표기식
링크: https://www.acmicpc.net/problem/1918

[문제접근]
중위 표기식을 후위 표기식으로 변경한다.
후위 표기식2와 같이 stack 문제이다.
https://ddb8036631.github.io/boj/1918_%ED%9B%84%EC%9C%84-%ED%91%9C%EA%B8%B0%EC%8B%9D/
*/ 

function solution(input){
   //const str = require('fs').readFileSync('/dev/stdin').toString().split('');
   const str = input.split('');
   const stack = [];
   let answer = '';
   console.log(str);

   for (let i = 0; i < str.length; i++){
      let ch = str[i];
      
      // 현재 문자가 알파벳일 경우 answer에 더해준다.
      if (ch >= 'A' && ch <= 'Z') {
         answer += ch;
      }else if (ch === '('){  // 열린괄호일 경우 stack에 push
         stack.push(ch);
      }else if (ch === ')'){  // 닫힌괄호일 경우
         // 마지막 값이 열린괄호가 아닐때 까지 stack에 담긴 문자를 answr에 +
         while (stack.length && stack[stack.length - 1] !== '('){
            answer += stack.pop();
         }
         // 마지막 열린괄호 pop
         stack.pop();
      }else if (ch === '+' || ch === '-'){
         while (stack.length && stack[stack.length - 1] !== '('){
            answer += stack.pop();
         }
         stack.push(ch);
      }else if (ch === '/' || ch === '*'){
         while (stack.length && stack[stack.length - 1] === '/' || stack[stack.length - 1] === '*'){
            answer += stack.pop();
         }
         stack.push(ch);
      }
   }
   console.log(answer, stack);
   while (stack.length){
      answer += stack.pop();
   }
   console.log(answer);
}

console.log(solution(`A*(B+C)`));   // ABC+*