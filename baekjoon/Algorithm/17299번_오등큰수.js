/* 오등큰수
링크: https://www.acmicpc.net/problem/17299

[문제접근]
오등큰 수는 오른쪽에 있는 값이 현재 값보다 큰 값인지 확인하는 문제였다면
오등큰수는 현재 값의 개수가 오른쪽에 있는 값들 중 개수가 많은 값을 찾는다.
만일 현재 값보다 많은 개수를 가지고 있는 값이 없다면 -1을 return 한다.
*/ 

function solution(input){
   //const [n, number] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
   const [n, number] = input.split('\n');
   const numbers = number.split(' ');
   let count = {};
   let stack = [];

   // numbers에 담긴 배열에 값을 count 한다.
   // stack 보단 dict를 사용하는 것이 찾기 편함.
   for (let i = 0; i < Number(n); i++){
      if (!count[numbers[i]]){
         count[numbers[i]] = 1;
      }else{
         count[numbers[i]] += 1;
      }
   }

   // 오등큰수가 존재하지 않는 경우의 인덱스 번호를 찾아낸다.   
   for (let i = 0; i < Number(n); i++){
      while(stack.length !== 0 && count[numbers[i]] > count[numbers[stack[stack.length-1]]]){
         numbers[stack.pop()] = numbers[i];
         console.log(count[numbers[i]], numbers);
      }
      stack.push(i);
   }

   // 오등큰수가 없는 경우의 인덱스 값이 담겨있는 배열 stack에서 numbers의 인덱스 번호에 -1을 치환
   while(stack.length !== 0){
      numbers[stack.pop()] = -1;
   }


   console.log(numbers.join(' ').trim());
}

console.log(solution(`7
1 1 2 3 4 2 1`));    // -1 -1 1 2 2 1 -1