/* 단어 뒤집기
링크: https://www.acmicpc.net/problem/9093

[문제]
문장이 주어졌을 때, 단어를 모두 뒤집어서 출력하는 프로그램을 작성하시오. 
단, 단어의 순서는 바꿀 수 없다. 단어는 영어 알파벳으로만 이루어져 있다.

[입력]
첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 
문장이 하나 주어진다. 단어의 길이는 최대 20, 문장의 길이는 최대 1000이다. 
단어와 단어 사이에는 공백이 하나 있다.

[출력]
각 테스트 케이스에 대해서, 입력으로 주어진 문장의 단어를 모두 뒤집어 출력한다.
*/

// 문제풀이(1)
function solution(input){
    // const com_input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
    const com_input = input.split('\n');

    for (let i = 1; i <= Number(com_input[0]); i++){
        let str_input = com_input[i].split(' ');
        let answer = '';
        
        for (let j = 0; j < str_input.length; j++){
            answer = answer + str_input[j].split('').reverse().join('')+' ';
        }
        console.log(answer.trim());
    }

}

console.log(solution(`2
I am happy today
We want to win the first prize`));
