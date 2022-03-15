/* 최소, 최대
링크: https://www.acmicpc.net/problem/10818

[문제]
N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

[입력]
첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 
둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 
모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

[출력]
첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.
*/

// 문제풀이(1)
function solution(input){
   // const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
   const num = input.split('\n');
   const numbers = num[1].split(' ');

   let min = numbers[0];
   let max = numbers[0];

   for(let i = 1; i < Number(num[0]); i++){
      if (max < Number(numbers[i])){
         max = Number(numbers[i]);
      }
      if(min > Number(numbers[i])){
         min = Number(numbers[i]);
      }
   }

   console.log(min, max);
}

console.log(solution(`5
20 10 35 30 7`));