/* 셀프 넘버
링크: https://www.acmicpc.net/problem/4673
*/ 

// 문제풀이(1) 
const numbers = [];
const self_numbers = [];
const answer = [];

for (let i = 1; i <= 10000; i++){
   numbers.push(i);
}

for (let j = 1; j <= 10000; j++){
   let num = j;
   for (let k = 0; k < String(j).length; k++){
      num += Number(String(j)[k]);
   }
   self_numbers.push(num);
}

for (let i = 1; i <= 10000; i++){
   if (!self_numbers.includes(i)){
      answer.push(i);
   }
}

console.log(answer.join('\n'));
