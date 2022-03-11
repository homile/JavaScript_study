/* 스택
링크: https://www.acmicpc.net/problem/10828

[문제]
정수를 저장하는 스택을 구현한 다음, 
입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 다섯 가지이다.

push X: 정수 X를 스택에 넣는 연산이다.
pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 
만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 스택에 들어있는 정수의 개수를 출력한다.
empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
top: 스택의 가장 위에 있는 정수를 출력한다. 
만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

[입력]
첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)이 주어진다. 
둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 
주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다. 
문제에 나와있지 않은 명령이 주어지는 경우는 없다.

[출력]
출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.

[문제접근]
첫째줄 값을 가지고 반복하여 명령어와 값을 2차원 배열로 저장?
*/

// 문제풀이(1)      // 런타임 에러
// function solution(input){

//     // const com_input = require('fs').readFileSync('/dev/stdin').toString.split('\n');
//     const com_input = input.split('\n');
//     const command = [];
//     const stack = [];

//     // 명령어와 값을 나누기 위함
//     for (i = 1; i <= com_input[0]; i++ ){
//         command[i-1] = com_input[i].split(' ');
//     }

//     for (i = 0; i < command.length; i++){
//         console.log(command[i]);
//         if (command[i][0] === 'push'){
//             stack.push(command[i][1]);
//         }
//         else if(command[i][0] === 'pop'){
//             if (stack.length != 0){
//                 console.log(stack.pop());
//             }
//             else{
//                 console.log(-1);
//             }
//         }
//         else if(command[i][0] === 'size'){
//             console.log(stack.length);
//         }
//         else if(command[i][0] === 'empty'){
//             if (stack.length === 0){
//                 console.log(1);
//             }
//             else{
//                 console.log(0);
//             }
//         }
//         else if(command[i][0] === 'top'){
//             if (stack.length != 0){
//                 console.log(stack[stack.length-1]);
//             }
//             else{
//                 console.log(-1);
//             }
//         }
//     }

// }

// 런타임에러가 난 이유 각 명령어마다 console을 찍으면 에러남


// 문제풀이(2)     // 런타임 에러 
// function solution(input){

//     // const com_input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//     const com_input = input.split('\n');
//     const command = [];
//     let stack = [];
//     let answer = ''

//     // 명령어와 값을 나누기 위함
//     for (i = 1; i <= com_input[0]; i++ ){
//         command[i-1] = com_input[i].split(' ');
//     }

//     for (i = 0; i < command.length; i++){
//         // console.log(command[i]);
//         if (command[i][0] === 'push'){
//             stack.push(command[i][1]);
//         }
//         else if(command[i][0] === 'pop'){
//             if (stack.length != 0){
//                 answer = answer + stack.pop() + '\n';
//             }
//             else{
//                 answer = answer +  '-1\n';
//             }
//         }
//         else if(command[i][0] === 'size'){
//             answer = answer + stack.length + '\n';
//         }
//         else if(command[i][0] === 'empty'){
//             if (stack.length === 0){
//                 answer = answer + '1\n';
//             }
//             else{
//                 answer = answer + '0\n';
//             }
//         }
//         else if(command[i][0] === 'top'){
//             if (stack.length != 0){
//                 answer = answer + stack[stack.length-1] + '\n';
//             }
//             else{
//                 answer = answer + '-1\n';
//             }
//         }
//     }
//     return answer;
// }

// if문이 너무 많아져서 에러가 난다고 한다.
// switch case로 변경해보자

// 추가사항 -> toString에서 ()을 사용안함.
// 수정시 통과


// 문제풀이(3)      
function solution(input){

    // const com_input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    const com_input = input.split('\n');
    const command = [];
    let stack = [];
    let answer = [];

    // 명령어와 값을 나누기 위함
    for (i = 1; i <= com_input[0]; i++ ){
        command[i-1] = com_input[i].split(' ');
    }

    for (i = 0; i < command.length; i++){
        switch (command[i][0]){
            case 'push':
                stack.push(command[i][1]);
                break;
            case 'pop':
                answer.push(stack.pop() || -1);
                break;
            case 'top':
                answer.push(stack[stack.length-1] || -1);
                break;
            case 'size':
                answer.push(stack.length);
                break;
            case 'empty':
                answer.push(stack[0] ? 0 : 1);
                break;
        }
    }
    return answer.join('\n');
}


// toString할때 ()을 빼먹음

// 문제 효율성 높임
// const com_input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// const len = com_input.shift();

// let stack = [];
// let answer = [];

// for (let i = 0; i < len; i++){
//     switch (com_input[i]){
//         case 'push':
//             stack.push(command[i][1]);
//             break;
//         case 'pop':
//             answer.push(stack.pop() || -1);
//             break;
//         case 'top':
//             answer.push(stack[stack.length-1] || -1);
//             break;
//         case 'size':
//             answer.push(stack.length);
//             break;
//         case 'empty':
//             answer.push(stack[0] ? 0 : 1);
//             break;
//         default:
//             stack.push(com_input[i].split(" ")[1]);
//             break;
//     }
// }
// console.log(answer.join('\n'));

console.log(solution(`14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top`))

// 2
// 2
// 0
// 2
// 1
// -1
// 0
// 1
// -1
// 0
// 3