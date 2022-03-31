/* 요세푸스 문제
링크: https://www.acmicpc.net/problem/1158
*/ 

// 문제풀이(1)
function solution(input){
   //const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
   const [n, k] = input.split(' ');
   const stack = []
   const answer = []
   let cnt = 0;

   for (let i = 0; i < n; i++){
      stack.push(i+1);
   }

   while (stack.length){
      cnt++;
      if (cnt % k === 0){
         answer.push(stack.shift())
      }else{
         stack.push(stack.shift())
      }
   }
   console.log(`<${answer.join(', ')}>`);

}

console.log(solution(`7 3`));