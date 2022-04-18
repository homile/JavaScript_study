/* 그룹 단어 체커
링크: https://www.acmicpc.net/problem/1316
*/ 

function solution(input){
   //const [num, ...command] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
   const [num, ...command] = input.split('\n');

   console.log(num, command);


   for (let i = 0; i < Number(num); i++){
      let stack = [];
      let check = 1;
      for (let j = 0; j < command[i].length; j++){
         console.log(command[i][j]);
      }
   }


}

console.log(solution(`3
happy
new
year`));    // 3