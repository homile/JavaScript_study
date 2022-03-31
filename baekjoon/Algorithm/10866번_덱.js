/* 덱
링크: https://www.acmicpc.net/problem/10866
*/

// 문제풀이(1)
function solution(input){
   // const [num, ...commands] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
   const [num, ...commands] = input.split('\n');
   const deque = [];
   const command = [];
   const answer = [];

   for (let i = 0; i < commands.length; i++){
      command[i] = commands[i].split(' ');
   }

   for (let j = 0; j < command.length; j++){
      switch (command[j][0]){
         case 'push_front':
            deque.unshift(command[j][1]);
            break;
         case 'push_back':
            deque.push(command[j][1]);
            break;
         case 'pop_front':
            answer.push(deque.shift() || -1);
            break;
         case 'pop_back':
            answer.push(deque.pop() || -1);
            break;
         case 'size':
            answer.push(deque.length);
            break;
         case 'empty':
            answer.push(deque.length ? 0 : 1);
            break;
         case 'front':
            answer.push(deque[0] || -1);
            break;
         case 'back':
            answer.push(deque[deque.length-1] || -1);
            break;
      }
   }
   console.log(answer.join('\n'));
}

console.log(solution(`15
push_back 1
push_front 2
front
back
size
empty
pop_front
pop_back
pop_front
size
empty
pop_back
push_front 3
empty
front`));