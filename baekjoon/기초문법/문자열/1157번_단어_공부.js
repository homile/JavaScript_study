/* 단어 공부
링크: https://www.acmicpc.net/problem/1157
*/ 

// 문제풀이(1)
function solution(input){
   //const word = require('fs').readFileSync('/dev/stdin').toString().trim().toLowerCase();
   const word = input.toLowerCase();
   const alpha = [...new Set(word.split(''))];
   let max = 0;
   let max_str = '';

   for (let i = 0; i < alpha.length; i++){
      // 인덱스 i에 들어있는 문자로 끊어준뒤 length를 알아내면 됨.
      let cnt = word.split(alpha[i]).length-1;

      if (cnt > max){
         max = cnt;
         max_str = alpha[i];
      }else if(cnt === max){
         max_str = '?';
      }
   }
   console.log(max_str.toUpperCase());

   // console.log(word, word.split(alpha[2]));

}

console.log(solution(`baaa`));