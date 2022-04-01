/* 문자열 반복
링크: https://www.acmicpc.net/problem/2675
*/ 

// 문제풀이(1)
function solution(input){
   //const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
   const input_list = input.split('\n');

   for (let i = 1; i <= Number(input_list[0]); i++){
      let num = input_list[i].split(' ');
      let str = num[1].split('');
      let answer = '';
      for (let j = 0; j < str.length; j++){
         answer += str[j].repeat(num[0]);
      }
      console.log(answer);
   }
}

console.log(solution(`2
3 ABC
5 /HTP`));