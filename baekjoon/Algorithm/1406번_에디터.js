/* 에디터
링크: https://www.acmicpc.net/problem/1406
*/

// 문제풀이(1)
// function solution(input){
//    // const commands = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//    const commands = input.split('\n');
//    const left = commands[0].split('');
//    const right = [];
//    const num = Number(commands[1]);
//    const command = [];

//    for (let i = 2; i < commands.length; i++){
//       command.push(commands[i].split(' '));
//    }

//    console.log(command, left);

//    for (let i = 0; i < num; i++){
//       if (command[i][0] === 'L'){
//          if (left.length !== 0){
//             right.push(left.pop());
//          }
//       }else if(command[i][0] === 'D'){
//          if (right.length !== 0){
//             left.push(right.pop());
//          }
//       }else if(command[i][0] === 'B'){
//          if (left.length !==0){
//             left.pop();
//          }
//       }else if(command[i][0] === 'P'){
//          left.push(command[i][1]);
//       }
//       console.log(i,left, right);
//    }

//    console.log(left, right);
   
//    console.log(left.concat(right).join(''));
// }

// left와 right 배열을 합칠때 concat으로 했지만
// right에 들어가있는 내용을 역순으로 left에 붙여줘야했다.


// 문제풀이(2)
function solution(input){
   // const commands = require('fs').readFileSync('/dev/stdin').toString().split('\n');
   const commands = input.split('\n');
   const left = commands[0].split('');
   const right = [];
   const num = Number(commands[1]);
   const command = [];

   for (let i = 2; i < commands.length; i++){
      command.push(commands[i].split(' '));
   }

   console.log(command, left);

   for (let i = 0; i < num; i++){
      if (command[i][0] === 'L'){
         if (left.length !== 0){
            right.push(left.pop());
         }
      }else if(command[i][0] === 'D'){
         if (right.length !== 0){
            left.push(right.pop());
         }
      }else if(command[i][0] === 'B'){
         if (left.length !==0){
            left.pop();
         }
      }else if(command[i][0] === 'P'){
         left.push(command[i][1]);
      }
      console.log(i,left, right);
   }

   console.log(left, right);
   
   console.log(left.concat(right.reverse()).join(''));
}

console.log(solution(`abc
9
L
L
L
L
L
P x
L
B
P y`));