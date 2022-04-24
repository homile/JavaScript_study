/* 후위 표기식2
링크: https://www.acmicpc.net/problem/1935

[문제접근]
후위 표기식으로 되어있는 식을 일반식으로 변경하여 값을 계산하면 될 것이다.
후위 표기식: ABC*+DE/-   ->   중위 표기식: (A+(B*C))-(D/E)

[풀이]
1. A(B*C)+DE/-       2. (A+(B*C))DE/-   
3. (A+(B*C))/(DE)-   4. (A+(B*C))/(D-E)

[참고자료]
https://woongsios.tistory.com/288
*/

// 문제풀이(1)
// function solution(input){

//    //const [num, ex, ...numbers] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//    const [num, [...ex], ...numbers] = input.split('\n');
//    const op = ['*', '/', '+', '-'];
//    let stack = [];
//    // console.log(num, ex, numbers);

//    for (let i = 0; i < ex.length; i++){
//       // console.log(ex[i]);
//       if (op.includes(ex[i])){
//          let right = Number(numbers[i-2]);
//          let left = Number(numbers[i-1]);
//          // console.log(Number(ex[i-2]));

//          if (ex[i] === '*'){
//             let cal = right * left;
//             console.log('ex: ', ex.splice(i-2, 3, cal));
//             console.log('numbers: ', numbers.splice(i-2, 2, cal));
//             console.log('곱: ',ex, numbers);   
//             i = 0;
//          }else if (ex[i] === '+'){
//             let cal = right + left;
//             console.log('ex: ', ex.splice(i-2, 3, cal));
//             console.log('numbers: ', numbers.splice(i-2, 2, cal));
//             console.log('더: ', ex);   
//             i = 0;
//          }else if (ex[i] === '/'){
//             let cal = right / left;
//             console.log('ex: ', ex.splice(i-2, 3, cal));
//             console.log('numbers: ', numbers.splice(i-2, 2, cal));
//             console.log('나: ', ex);   
//             i = 0;
//          }else if (ex[i] === '-'){
//             let cal = right - left;
//             console.log('ex: ', ex.splice(i-2, 3, cal));
//             console.log('numbers: ', numbers.splice(i-2, 2, cal));
//             console.log('빼: ', ex);   
//             i = 0;
//          }
//          // console.log(i, ex.splice(i-2, 3, '변경'));
//          // i = 0;   
//       }
//    }
   
//    console.log(`answer: ${ex[0].toFixed(2)}`);

// }

// TC1은 풀리지만 TC2는 풀리지 않는다 
// 이유: number를 입력받을 때 TC2는 A에 1을 대입 시켜두고 계산하기 때문이다.
// 위와 같은 풀이로 풀경우 A가 2개를 초과할 경우 풀리지 않는다.
// 찾아본 결과 아스키 코드 값으로 스택을 하나 만들고
// 그값에 해당하는 알파벳이 나온다면 대입시켜 계산한다.


// 문제풀이(2)
function solution(input){

   //const [num, ex, ...numbers] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
   const [num, [...ex], ...numbers] = input.split('\n');
   const op = ['*', '/', '+', '-'];
   const asciiStack = [];
   let ascii = 65;
   const stack = [];

   console.log(ex, numbers);

   for (let i = 0; i < Number(num); i++){
      asciiStack[String.fromCharCode(ascii)] = Number(numbers[i]);
      ascii++;
   }

   console.log(asciiStack);
   
   for (let i = 0; i < ex.length; i++){
      // console.log(ex[i]);
      if (op.includes(ex[i])){
         let left = stack.pop();
         let right = stack.pop();
         if (ex[i] === '*'){
            let cal = right * left;
            console.log('numbers: ', stack.splice(i-2, 2, cal));
         }else if (ex[i] === '/'){
            let cal = right / left;
            console.log('numbers: ', stack.splice(i-2, 2, cal));
         }else if (ex[i] === '-'){
            let cal = right - left;
            console.log('numbers: ', stack.splice(i-2, 2, cal));
         }else if (ex[i] === '+'){
            let cal = right + left;
            console.log('numbers: ', stack.splice(i-2, 2, cal));
         }
      }else{
         stack.push(asciiStack[ex[i]]);
      }
      console.log(stack);
   }
   console.log(stack[0].toFixed(2));

}

console.log(solution(`5
ABC*+DE/-
1
2
3
4
5`));