/* 크로아티아 알파벳
링크: https://www.acmicpc.net/problem/2941

[문제접근]
배열에 크로아티아 알파벳을 넣어주고 단어가 있다면 갯수 count
*/ 

// 문제풀이(1)
function solution(input){
   //const str = require('fs').readFileSync('/dev/stdin').toString().trim();
   const str = input;
   const dict = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
   let count = 0;

   for (let i = 1; i <= str.length; i++){
      // console.log('start',str[i-1]+str[i]);
      if (dict.includes(str[i-1]+str[i]+str[i+1])){
         count += 1;
         i += 2;
      }else if (dict.includes(str[i-1]+str[i])){
         // console.log('비교문',str[i-1]+str[i]);
         count += 1;
         i += 1;  
      }else{
         count += 1;
      }
   }

   console.log(count);

}

console.log(solution(`ljes=njak`));    // 6
console.log(solution(`nljj`));      // 3
console.log(solution(`dz=ak`));     // 3