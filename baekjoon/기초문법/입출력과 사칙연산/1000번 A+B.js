//https://velog.io/@das01063/VSCode%EC%97%90%EC%84%9C-ESLint%EC%99%80-Prettier-TypeScript-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
function solution(input){
    // const inputData = require("fs").readFileSync('/dev/stdin').toString().split(' ');
    const data = input.trim().split(' ');

    const A = parseInt(data[0]);
    const B = parseInt(data[1]);

    return A+B
}

let result = solution(`3 4`);
console.log(result);