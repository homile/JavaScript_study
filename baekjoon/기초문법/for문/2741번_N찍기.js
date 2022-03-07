/* N찍기
링크: https://www.acmicpc.net/problem/2741

[문제]
자연수 N이 주어졌을 때, 
1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

[입력]
첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.

[출력]
첫째 줄부터 N번째 줄 까지 차례대로 출력한다.
*/

// 문제풀이(1)
function solution(input){
    // input을 linux에서 받아오면 /dev/stdin에서 받아오고 아니라면 input에서 받아옴.
    //const filePath = process.platform === "linux" ? "/dev/stdin" : input;

    //const num = require("fs").readFileSync('/dev/stdin').toString().split('\n');
    const num = input;
    answer = '';

    for (let i = 1; i <=num; i++){
        answer += i + '\n';
    }
    console.log(answer);
}

console.log(solution(5));