/* 오큰수
링크: https://www.acmicpc.net/problem/17298
*/ 

// 문제풀이(1)    // 시간초과
// function solution(input){
//    //const [num, ...numbers] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
//    const [num, ...number] = input.split('\n');
//    let numbers = number[0].split(' ');
//    let max = 0;
//    let result = [];

//    for (let i = 0; i < Number(num); i++){
//       max = Number(numbers[i])
//       for (let j = i + 1; j <= Number(num); j++){
//          if (Number(numbers[j]) > max){
//             max = numbers[j];
//             break;
//          }
//       }

//       if (max === Number(numbers[i])){
//          result.push('-1');
//       }else{
//          result.push(max);
//       }
//    }

//    console.log(result.join(' '));
// }

// 시간초과남 비교하는 문항이 너무 많은 듯


// 문제풀이(2)
function solution(input){
   //const [num, ...number] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
   const [num, ...number] = input.split('\n');
   let numbers = number[0].split(' ');
   let result = [];

   // 오큰수가 존재하지 않는 경우의 인덱스 번호를 찾아낸다.
   for (let i = 0; i < Number(num); i++){
      while (result.length !== 0 && Number(numbers[i]) > Number(numbers[result[result.length-1]])){
         numbers[result.pop()] = numbers[i];
      }
      // console.log(Number(numbers[i]), Number(numbers[result[result.length-1]]));
      // console.log(result.pop());
      result.push(i);
   }
   console.log(result, numbers);

   // 오큰수가 존재하지 않는 경우의 인덱스에 -1값으로 치환한다.
   while (result.length !== 0){
      numbers[result.pop()] = -1;
   }

   console.log(numbers.join(' ').trim());
}

console.log(solution(`4
3 5 2 7`));    // 5 7 7  -1

console.log(solution(`4
9 5 4 8`));    // -1 8 8 -1