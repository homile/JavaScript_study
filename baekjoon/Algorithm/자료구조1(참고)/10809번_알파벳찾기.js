/* 알파벳 찾기
링크: https://www.acmicpc.net/problem/10809
*/ 

// 문제풀이(1)
function solution(input){
   //const s = require('fs').readFileSync('/dev/stdin').toString().split('');
   const s = input.split('');
   let stack = [];
   let answer = [];
   // 대문자: 56 ~ 90, 소문자: 97 ~ 122
   for (let i = 97; i <= 122; i++){
      // console.log(String.fromCharCode(i));
      stack.push(String.fromCharCode(i));
      answer.push(-1);
   }

   for (let i = 0; i < s.length; i++){
      // console.log(stack[s[i]]);
      for (let j = 0; j < 26; j++){
         if (s[i] === stack[j]){
            if (answer[j] !== -1){
               continue;
            }
            answer[j] = i;
         }
      }
   }
   console.log(answer);

   console.log(answer.join(' '));

}

console.log(solution(`baekjoon`));