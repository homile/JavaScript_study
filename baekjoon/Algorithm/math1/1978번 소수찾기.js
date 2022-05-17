/* 소수찾기
링크: https://www.acmicpc.net/problem/1978

[문제접근]
2는 소수이다.
*/

function solution(input) {
  //const numbers = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  const numbers = input.split('\n');
  const num = numbers[1].split(' ');

  let answer = 0;
  for (let i = 0; i < numbers[0]; i++) {
    if (Number(num[i]) !== 1) {
      let count = 0;
      for (let j = 2; j < Number(num[i]); j++) {
        if (Number(num[i]) % j === 0) {
          count++;
        }
      }
      if (count === 0) {
        answer++;
      }
    }
  }
  console.log(answer);

}

console.log(solution(`4
1 3 5 7`));