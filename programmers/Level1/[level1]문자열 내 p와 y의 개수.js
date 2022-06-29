/* 문자열 내 p와 y의 개수

링크: https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript

[문제 설명]
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. 
s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 
다르면 False를 return 하는 solution를 완성하세요. 
'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 
단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

[제한사항]
문자열 s의 길이 : 50 이하의 자연수
문자열 s는 알파벳으로만 이루어져 있습니다.

[문제접근]
문자열을 소문자 또는 대문자로 변환한다.
p와 y의 개수를 count하여 같다면 true를 return 한다.
*/

// 문제풀이(1)
function solution(s){
    // s의 문자열을 모두 소문자로 변경
    s = s.toLowerCase();
    let p_count = 0;
    let y_count = 0;

    for (let i of s){
        if (i === 'p'){
            p_count++;
        }else if(i === 'y'){
            y_count++;
        }
    }

    if (p_count === y_count){ return true; }

    return false;
}

console.log(solution("pPoooyY"));   // true
console.log(solution("Pyy"));       // false

// 다른 사람의 풀이(1)
function numPY(s){
      return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
  }

console.log(solution("pPoooyY"));   // true
console.log(solution("Pyy"));       // false
