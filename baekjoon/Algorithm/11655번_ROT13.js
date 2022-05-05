/* ROT13
링크: https://www.acmicpc.net/problem/11655

[문제접근]
ROT13은 카이사르 암호에 대해 알아야 풀 수 있는 문제
알파벳을 13씩 뒤로 밀어서 표현하는 암호

총 알파벳 = 26자, 대문자시작 = 65, 소문자시작 = 97
아스키 코드를 문자로 String.fromCharCode()), 문자를 아스키코드로charCodeAt()
*/

// 문제풀이(1)
function solution(input){
   //const str = require('fs').readFileSync('/dev/stdin').toString().trim();
   const str = input;
   let answer = '';

   for (let i = 0; i < str.length; i++){
      char = str.charCodeAt(i);
      // 대문자일 경우
      if(char >= 65 && char <= 90){
         char += 13;
         if(char > 90){
            answer += String.fromCharCode(char-26);
         }else{
            answer += String.fromCharCode(char)
         }
         // 소문자일 경우
      }else if(char >= 97 && char <= 122){
         char += 13;
         if(char > 122){
            answer += String.fromCharCode(char-26);
         }else{
            answer += String.fromCharCode(char);
         }
      }else{
         answer += str[i];
      }
   }

   console.log(answer);

   // console.log(String.fromCharCode(90), str.charCodeAt(1));

}

console.log(solution(`Baekjoon Online Judge`)); 