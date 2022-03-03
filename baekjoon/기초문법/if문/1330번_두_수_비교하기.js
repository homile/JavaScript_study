/* 두 수 비교하기
링크: https://www.acmicpc.net/problem/1330

[문제]
두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

[입력]
첫째 줄에 A와 B가 주어진다. A와 B는 공백 한 칸으로 구분되어져 있다.

[출력]
첫째 줄에 다음 세 가지 중 하나를 출력한다.

A가 B보다 큰 경우에는 '>'를 출력한다.
A가 B보다 작은 경우에는 '<'를 출력한다.
A와 B가 같은 경우에는 '=='를 출력한다.
[제한]
-10,000 ≤ A, B ≤ 10,000
*/

// 문제풀이(1)
function solution(input){
    //const num = require("fs").readFileSync('/dev/stdin').toString().split(' ');
    const num = input.split(' ');
    let num1 = Number(num[0]);
    let num2 = Number(num[1]);
    if (num1 > num2){
        console.log('>');
    }
    else if(num1 < num2){
        console.log('<');
    }
    else if(num1 == num2){
        console.log('==');
    }

}

console.log(solution(`1 2`));   // <
console.log(solution(`10 2`));  // >
console.log(solution(`5 5`));   // ==