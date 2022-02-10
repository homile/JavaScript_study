/* 소수 찾기

링크 : https://programmers.co.kr/learn/courses/30/lessons/12921

[문제 설명]
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, 
solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

[제한 조건]
n은 2이상 1000000이하의 자연수입니다.

[문제접근]
에라토스테네스의 체를 이용해야 한다.
초기 값을 세팅한다.
소수 판별식을 사용한다.

*/

// 문제풀이(1)
function solution(n) {
    let array = [];

    // 배열에 초기 값 지정
    for (let i = 2; i <= n; i++){
        array[i] = i;
    }
    console.log(array);

    // 에라토스 테네스의 체
    for (let i = 2; i*i <= n; i++){
        if (array[i] !== 0){
            for (let j = i*i; j <= n; j+=i){
                array[j] = 0;
            }
        }
    }
    console.log(array);

    return array.filter(num => 0 !== num).length;
}


// 다른 사람의 풀이(1)
function solution(n) {
    const s = new Set();
    for(let i=1; i<=n; i+=2){
        s.add(i);
    }
    s.delete(1);
    s.add(2);
    for(let j=3; j<Math.sqrt(n); j++){
        if(s.has(j)){
             for(let k=j*2; k<=n; k+=j){    
                s.delete(k);
             }
        }
    }
    return s.size;
}

console.log(solution(10));  // 4
console.log(solution(5));   // 3