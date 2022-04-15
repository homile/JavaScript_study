/* 다이얼
링크: https://www.acmicpc.net/problem/5622

[문제접근]
할머니가 전화를 다이얼로 거는데 숫자를 외우시지 않고 알파벳으로 기억하심.
알파벳에 해당하는 숫자를 누르고 움직이기 때문에 딕셔너리를 사용하면 될 듯함.
나온 숫자를 더한 총 값 + 나온 숫자의 길이 = 전화거는 시간
1과 0은 알파벳이 속해있지 않기 때문에 제외해도 된다?
*/ 

// 문제풀이(1)
function solution(input){
   //const input = require('fs').readFileSync('/dev/stdin').toString().trim();
   // 번호에 맞는 알파벳 dict화 시킴
   let number = input.trim();
   let alphabet = {
      2: "ABC", 3:"DEF", 4:"GHI", 5:"JKL", 6:"MNO", 7:"PQRS", 8:"TUV", 9:"WXYZ"
   };

   let answer = 0;

   console.log(alphabet);


   for (let i = 0; i < number.length; i++){
      for (let j = 2; j <= 9; j++){
         if (alphabet[j].includes(number[i])){
            answer += j+1;
            break;
         }
      }
   }
   console.log(answer)

}

console.log(solution(`WA`));  // 13
console.log(solution(`UNUCIC`));  // 36