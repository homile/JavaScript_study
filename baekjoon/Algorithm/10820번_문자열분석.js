/* 문자열 분석
링크: https://www.acmicpc.net/problem/10820
*/ 

// 문제풀이(1)
// function solution(input){
//    //const str = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//    const str = input.split('\n');
//    let answer = '';
//    console.log(str);

//    for (let i = 0; i < str.length; i++){
//       let stack = [0, 0, 0, 0];

//       for (let j = 0; j < str[i].length; j++){
//          // console.log(str[i][j]);
//          if (str[i][j] === ' '){
//             stack[3] += 1;
//          }else if (Number(str[i][j]) || str[i][j] === '0'){
//             stack[2] += 1;
//          }else if (str[i][j] === str[i][j].toLowerCase()){
//             stack[0] += 1;
//          }else if (str[i][j] === str[i][j].toUpperCase()){
//             stack[1] += 1;
//          }
//       }
//       // 한 줄씩 출력하면 안되는 듯?
//       // console.log(stack.join(' ').trim());
//       answer += stack.join(' ');
//       answer += '\n';
//    }
//    console.log(answer.trim());
// }

// uppercase와 lowercase 때문인가?


// 문제풀이(2)
function solution(input){
   //const str = require('fs').readFileSync('/dev/stdin').toString().split('\n');
   const str = input.trim().split('\n');
   let answer = '';
   console.log(str);
   // str.length에 -1을 해주니 해결됐다. 
   // 이유는 split 해줄때마다 마지막에 공백이 붙어서.
   for (let i = 0; i < str.length-1; i++){
      let stack = [0, 0, 0, 0];
      for (let j = 0; j < str[i].length; j++){
         // console.log(str[i][j]);
         if (str[i][j] >= 'a' && str[i][j] <= 'z'){
            stack[0] += 1;
         }else if(str[i][j] >= 'A' && str[i][j] <= 'Z'){
            stack[1] += 1;
         }else if(str[i][j] >= '0' && str[i][j] <= '9'){
            stack[2] += 1;
         }else if(str[i][j] >= ' '){
            stack[3] += 1;
         }
      }
      // 한 줄씩 출력하면 안되는 듯?
      // console.log(stack.join(' ').trim());
      answer += stack.join(' ') + '\n';
   }
   console.log(answer.trim());
}


// 두 풀이 모두 맞는 풀이지만 
// split할때마다 맨 뒤에 공백이 붙는다는 사실을 인지하지 못함.

console.log(solution(`This is String
SPACE    1    SPACE
 S a M p L e I n P u T     
0L1A2S3T4L5I6N7E8`));

// 10 2 0 2
// 0 10 1 8
// 5 6 0 16
// 0 8 9 0