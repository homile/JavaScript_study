/* 합
링크: https://www.acmicpc.net/problem/8393

[문제]
n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

[입력]
첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

[출력]
1부터 n까지 합을 출력한다.
*/
function solution(input){
    //const num = require("fs").readFileSync('/dev/stdin').toString().trim();
    const num = input;
    let hap = 0;

    for (let i = 1; i <= num; i++){
        hap += i;
    }
    console.log(hap);
}

console.log(solution(3));