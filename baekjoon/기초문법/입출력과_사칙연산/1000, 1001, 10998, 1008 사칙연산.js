//https://velog.io/@das01063/VSCode%EC%97%90%EC%84%9C-ESLint%EC%99%80-Prettier-TypeScript-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
function add(input){
    // const inputData = require("fs").readFileSync('/dev/stdin').toString().split(' ');
    const data = input.trim().split(' ');

    const A = parseInt(data[0]);
    const B = parseInt(data[1]);

    return A + B 
}

let result_add = add(`3 4`);
console.log(result_add);


function sub(input){
    // const data = require("fs").readFileSync('/dev/stdin').toString().split(' ');
    const data = input.trim().split(' ');

    const A = parseInt(data[0]);
    const B = parseInt(data[1]);

    // console.log(A*B);
    return A - B;
}

let result_sub = sub(`3 4`);
console.log(result_sub);


function multiply(input){
    // const data = require("fs").readFileSync('/dev/stdin').toString().split(' ');
    const data = input.trim().split(' ');

    const A = parseInt(data[0]);
    const B = parseInt(data[1]);

    // console.log(A*B);
    return A * B;
}

let result_multiply = multiply(`3 4`);
console.log(result_multiply);


function division(input){
    // const data = require("fs").readFileSync('/dev/stdin').toString().split(' ');
    const data = input.trim().split(' ');

    const A = parseInt(data[0]);
    const B = parseInt(data[1]);

    // console.log(A/B);
    return A / B;
}

let result_division = division(`3 4`);
console.log(result_division);


function operaiton(input){

    // const data = require("fs").readFileSync('/dev/stdin').toString().split(' ');
    const data = input.trim().split(' ');

    const A = parseInt(data[0]);
    const B = parseInt(data[1]);

    // console.log(A+B);
    // console.log(A-B);
    // console.log(A*B);
    // console.log(Math.floor(A/B));
    // console.log(A%B);
    
    return (`${A+B, A-B, A*B, A/B, A%B}`)
}

let result_operation = operaiton(`3 4`);
console.log(result_operation);
