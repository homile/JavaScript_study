/* 그룹 단어 체커
링크: https://www.acmicpc.net/problem/1316
*/ 

// 문제풀이(1)
function solution(input){
   //const [num, ...command] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
   const [num, ...command] = input.split('\n');
   let answer = 0;
   console.log(num, command);


   for (let i = 0; i < Number(num); i++){
      let stack = [];
      let check = true;
      for (let j = 1; j <= command[i].length; j++){
         // console.log(`시작: ${command[i][j]} ${stack} `);
         // 연속적이면 넘어감
         if (command[i][j-1] === command[i][j]){
            continue;
         }
         // stack 안에 값이 있다면 조건에 맞지 않음
         if (stack.includes(command[i][j-1])){
            // console.log(`있음: ${command[i][j]}`);
            check = false;
            break;
         }else{
            stack.push(command[i][j-1]);
         }
      }
      if (check){ answer++; }
   }

   console.log(answer);

}

console.log(solution(`3
happy
new
year`));    // 3