/* 단어 뒤집기2
링크: https://www.acmicpc.net/problem/17413

[문제접근]
문자열의 단어마다 뒤집어 준다.
이때, <>안에 있는 문자는 뒤집지 않는다.
*/ 

// 문제풀이(1)  // 실패
// function solution(input){
//    const str = input;
//    let stack = [];
//    let answer = '';
//    let temp = [];

//    for (let i = 0; i < str.length; i++){
//       if (str[i] === '<' || stack.includes('<')){
//          stack.push(str[i]);
//          if (str[i] === '>'){
//             answer += stack.join('');
//             stack = [];
//          }
//       }else if(str[i] === ' '){
//          answer += temp.reverse().join('');
//          answer += ' ';
//          temp = [];
//       }else{
//          temp.push(str[i]);
//       }
//       console.log(stack);
//    }

//    answer += temp.reverse().join('');

//    console.log(answer);
// }

// 일반 문자열은 해결했으나 <>가 있는 경우 안됨.


// 문제풀이(2)  // 통과
function solution(input){
   //const str = require('fs').readFileSync('/dev/stdin').toString().trim();
   const str = input;
   let stack = [];
   let answer = '';
   let temp = [];

   for (let i = 0; i < str.length; i++){
      if (str[i] === '<' || stack.includes('<')){
         stack.push(str[i]);
         if (str[i] === '>'){
            answer += temp.reverse().join('');
            temp = [];
            answer += stack.join('');
            stack = [];
         }
      }else if(str[i] === ' '){
         answer += temp.reverse().join('');
         answer += ' ';
         temp = [];
      }else{
         temp.push(str[i]);
      }
      // console.log(stack);
   }

   answer += temp.reverse().join('');

   console.log(answer);
}

console.log(solution(`baekjoon online judge`));
console.log(solution(`<open>tag<close>`));