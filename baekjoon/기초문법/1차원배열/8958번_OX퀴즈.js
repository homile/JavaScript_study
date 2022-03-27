/* OX 퀴즈
링크: https://www.acmicpc.net/problem/8958
*/

// 문제풀이(1)
function solution(input){
   // const [num, ...check] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
   const [num, ...check] = input.split('\n');
   
   for (let i = 0; i < Number(num); i++){
      let score = 0;
      let total = 0;
      for (let j = 0; j < check[i].length; j++){
         if (check[i][j] === 'O'){
            score++;
         }else{
            score = 0;
         }
         total += score;
      }
      console.log(total);
   }

}

console.log(solution(`5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX`));