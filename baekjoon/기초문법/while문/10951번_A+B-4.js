/* A+B-4
링크: https://www.acmicpc.net/problem/10951

[문제]
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

[입력]
입력은 여러 개의 테스트 케이스로 이루어져 있다.

각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

[출력]
각 테스트 케이스마다 A+B를 출력한다.
*/

// 문제풀이(1)
function solution(input){
   // const num = require("fs").readFileSync('/dev/stdin').toString().split('\n');
   const num = input.split('\n');
   let len = num.length;
   let i = 0;

   while (i < len-1){
      let numbers = num[i].split(' ');
      let a = Number(numbers[0]);
      let b = Number(numbers[1]); 
      
      console.log(a+b);
      i++;
   }
}

console.log(solution(`1 1
2 3
3 4
9 8
5 2`));