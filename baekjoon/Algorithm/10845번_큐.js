/* 큐
링크: https://www.acmicpc.net/problem/10845
*/ 

// 문제풀이(1)     // 시간초과
// function solution(input){
//    // const [num, ...commands] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//    const [num, ...commands] = input.split('\n');
//    let queue = [];
//    let command = [];

//    for (let i = 0; i < Number(num); i++){
//       command[i] = commands[i].split(' ');
//    }

//    for (let j = 0; j < command.length; j++){
//       switch (command[j][0]){
//          case 'push':
//             queue.push(command[j][1]);
//             break;
//          case 'pop':
//             if (queue.length == 0){
//                console.log(-1);
//             }else{
//                console.log(queue.shift());
//             }
//             break;
//          case 'size':
//             console.log(queue.length);
//             break;
//          case 'empty':
//             if (queue.length == 0){
//                console.log(1);
//             }else{
//                console.log(0);
//             }
//             break;
//          case 'front':
//             if (queue.length == 0){
//                console.log(-1);
//             }else{
//                console.log(queue[0]);
//             }
//             break;
//          case 'back':
//             if (queue.length == 0){
//                console.log(-1);
//             }else{
//                console.log(queue[queue.length-1]);
//             }
//             break;
//       }
//    }

// }

// 1. 삼항연산자로 변경해볼 것 (x)
// 2. 스택 풀이와 같이 출력값을 스택에 저장해볼 것 (o)


// 문제풀이(2)
function solution(input){
   // const [num, ...commands] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
   const [num, ...commands] = input.split('\n');
   let queue = [];
   let command = [];
   let answer = [];

   for (let i = 0; i < Number(num); i++){
      command[i] = commands[i].split(' ');
   }

   for (let j = 0; j < command.length; j++){
      switch (command[j][0]){
         case 'push':
            queue.push(command[j][1]);
            break;
         case 'pop':
            answer.push(queue.shift() || -1);
            break;
         case 'size':
            answer.push(queue.length);
            break;
         case 'empty':
            answer.push(queue.length ? 0 : 1);
            break;
         case 'front':
            answer.push(queue[0] || -1);
            break;
         case 'back':
            answer.push(queue[queue.length-1] || -1);
            break;
      }
   }

   console.log(answer.join('\n'));

}

console.log(solution(`15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front`));