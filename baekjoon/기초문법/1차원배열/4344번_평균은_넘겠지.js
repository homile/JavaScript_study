/* 평균은 넘겠지
링크: https://www.acmicpc.net/problem/4344
*/

// 문제풀이(1)
function solution(input){
   // const [num, ...numbers] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
   const [num, ...numbers] = input.split('\n');

   for (let i = 0; i < Number(num); i++){
      let total = 0;
      let avg = 0;
      let result = 0;
      let score = numbers[i].split(' ');
      for (let j = 1; j <= Number(score[0]); j++){
         total += Number(score[j]);
      }
      avg = total / Number(score[0]);
      
      let count = 0;
      for (let j = 1; j <= Number(score[0]); j++){
         if (Number(score[j]) > avg ){
            count++;
         }
      }
      
      result = (count / Number(score[0])) * 100;
      console.log(result.toFixed(3) + '%');
   }

}

console.log(solution(`5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`));