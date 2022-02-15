/* 가장 큰 수

링크: https://programmers.co.kr/learn/courses/30/lessons/42746

[문제 설명]
0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 
만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 
순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 
return 하도록 solution 함수를 작성해주세요.

[제한 사항]
numbers의 길이는 1 이상 100,000 이하입니다.
numbers의 원소는 0 이상 1,000 이하입니다.
정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

[문제접근]
sort를 사용하여 가장 큰 수를 찾아내고 join을 붙여서 반환한다.
*/

// 문제풀이(1)      // 11번 실패
function solution(numbers) {
    // 숫자를 문자형으로 변경
    let strings = numbers.map(num => num + "");
    // 큰 수의 조합순으로 정렬
    let answer = strings.sort((a, b) => (b+a)-(a+b)).join("");
    return answer;
}

/* 000000일 경우 0으로 반환되어야 함. */


// 문제풀이(2)      
function solution(numbers) {
    // 숫자를 문자형으로 변경
    let strings = numbers.map(num => num + "");
    // 큰 수의 조합순으로 정렬
    let answer = strings.sort((a, b) => (b+a)-(a+b)).join("");
    if (answer[0] === "0"){
        return "0";
    }
    return answer;
}

console.log(solution([6, 10, 2]));  //"6210"
console.log(solution([3, 30, 34, 5, 9]	));     // "9534330"