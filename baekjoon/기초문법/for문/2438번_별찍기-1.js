/* 별 찍기 - 1
링크: https://www.acmicpc.net/problem/2438

[문제]
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

[입력]
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

[출력]
첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.
*/

// 문제풀이(1)
function solution(input){

   const num = input;

   for (let i = 1; i <= Number(num); i++){
      console.log('*'.repeat(i));
   }
}

console.log(solution(5));