/* 문자열 다루기 기본

링크: https://programmers.co.kr/learn/courses/30/lessons/12918

[문제 설명]
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, 
solution을 완성하세요. 
예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

[제한 사항]
s는 길이 1 이상, 길이 8 이하인 문자열입니다.

[문제접근]
Number을 사용하여 문자와 숫자를 구분한다. (x)
정규표현식을 사용하여 문자와 숫자를 구분한다. (o)
 */

function solution(s) {
    if (s.length === 4 || s.length === 6){
        if (/^[0-9]+$/.test(s)){
            return true;
        }
    }
    return false;
}

console.log(solution("a234"));  // fasle
console.log(solution("1234"));  // true