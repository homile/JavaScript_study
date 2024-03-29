/* [level1]문자열 정수로 바꾸기

링크: https://programmers.co.kr/learn/courses/30/lessons/12925

[문제 설명]
문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

[제한 조건]
s의 길이는 1 이상 5이하입니다.
s의 맨앞에는 부호(+, -)가 올 수 있습니다.
s는 부호와 숫자로만 이루어져있습니다.
s는 "0"으로 시작하지 않습니다.

[문제접근]
Number함수를 사용한다.
*/

// 문제풀이(1)
function solution(s) {
    return Number(s);
}

console.log("1234")     // 1234
console.log("-1234")    // -1234
