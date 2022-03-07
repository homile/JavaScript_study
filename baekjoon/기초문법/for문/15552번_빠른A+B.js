/* 빠른 A+B
링크: https://www.acmicpc.net/problem/15552

*/

// 문제풀이(1)
// function solution(input){
//     //const num = require("fs").readFileSync('/dev/stdin').toString().split('\n');
//     const num = input.split('\n');

//     for (let i = 1; i <= Number(num[0]); i++){
//         let numbers = num[i].split(' ');
//         console.log(Number(numbers[0]) + Number(numbers[1]));
//     }
// }

// 시간초과
// 아마 매번 console.log를 찍어서 그런듯


// 문제풀이(2)
function solution(input){
    //const num = require("fs").readFileSync('/dev/stdin').toString().split('\n');
    const num = input.split('\n');
    let answer = '';

    for (let i = 1; i <= Number(num[0]); i++){
        let numbers = num[i].split(' ');
        answer += Number(numbers[0]) + Number(numbers[1])+'\n';
    }
    console.log(answer);
}

console.log(solution(`5
1 1
12 34
5 500
40 60
1000 1000`));