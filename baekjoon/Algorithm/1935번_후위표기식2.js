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

function solution(input){

   //const [num, ex, ...numbers] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
   const [num, [...ex], ...numbers] = input.split('\n');
   const op = ['*', '/', '+', '-'];
   console.log(num, ex, numbers);

   for (let i = 0; i < ex.length; i++){
      // console.log(ex[i]);
      if (op.includes(ex[i])){
         // let right = Number(numbers[i-2]);
         // let left = Number(numbers[i-1]);
         // console.log(Number(ex[i-2]));

         if (ex[i] === '*'){
            let cal = right * left;
            console.log(i, ex.splice(i-2, 3, cal));
            console.log(ex);   
            i = 0;
         }
         // console.log(i, ex.splice(i-2, 3, '변경'));
         // i = 0;   
      }
   }
   

}

console.log(solution(`5
ABC*+DE/-
1
2
3
4
5`));