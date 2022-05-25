/* 팩토리얼 0의 개수
링크: https://www.acmicpc.net/problem/1676
*/ 

// 문제풀이(1)
// function solution(input){
//   //const num = require('fs').readFileSync('/dev/stdin').toString();
//   const num = input;
//   let total = 1;
//   let answer = 0;
  
//   for (let i = 1; i <= num; i++){
//     total *= i;
//   }
  
//   for (let j = String(total).length-1; j >= 0; j--){
//     if(String(total)[j] === '0'){
//       answer += 1;
//     }else{
//       break;
//     }
//   }

//   console.log(answer);

// }

// 소인수분해의 성질을 이용한다.
// n팩토리얼의 결과값 끝에 붙은 0을 알기 위해서는 2와 5의 개수를 알면된다.



// 문제풀이(2)
function solution(input){
  //const num = require('fs').readFileSync('/dev/stdin').toString();
  const num = input;
  let answer = 0;
  
  for(let i = 5; i <= num; i *= 5){
    answer += Math.floor(num / i);
  }

  console.log(answer);

}

console.log(solution(10));  // 2
console.log(solution(3));   // 0