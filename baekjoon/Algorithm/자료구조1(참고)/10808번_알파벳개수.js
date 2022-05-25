/* 알파벳 개수
링크: https://www.acmicpc.net/problem/10808

[문제접근]
알파벳을 리스트에 담아 해당하는 알파벳이 나오면 값을 +해준다.
*/ 

// 문제풀이(1)
// function solution(input){
//    //const s = require('fs').readFileSync('/dev/stdin').toString().split('');
//    const s = input.split('');
//    let stack = [];

//    // 대문자: 56 ~ 90, 소문자: 97 ~ 122
//    for (let i = 97; i <= 122; i++){
//       // console.log(String.fromCharCode(i));
//       stack[String.fromCharCode(i)] = 0;
//    }
//    console.log(stack);

//    for (let i = 0; i < s.length; i++){
//       // console.log(stack[s[i]]);
//       stack[s[i]] += 1;
//    }
//    console.log(stack);

//    console.log(Object.values(stack).join(' '));

// }

// TC1은 출력이 된다. 하지만 제출이 되지않는다. 반례가 머지?
// Object로 해서 그런가?


// 문제풀이(2)
function solution(input){
   //const s = require('fs').readFileSync('/dev/stdin').toString().split('');
   const s = input.split('');
   let stack = [];
   let answer = [];
   // 대문자: 56 ~ 90, 소문자: 97 ~ 122
   for (let i = 97; i <= 122; i++){
      // console.log(String.fromCharCode(i));
      stack.push(String.fromCharCode(i));
      answer.push(0);
   }
   console.log(stack, answer);

   for (let i = 0; i < s.length; i++){
      // console.log(stack[s[i]]);
      for (let j = 0; j < 26; j++){
         if (s[i] === stack[j]){
            answer[j] += 1;
         }
      }
   }
   console.log(answer);

   console.log(answer.join(' '));

}

console.log(solution(`baekjoon`));