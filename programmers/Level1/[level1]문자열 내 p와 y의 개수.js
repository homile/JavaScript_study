// 문자열 내 p와 y의 개수

// 링크: https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript

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


// 문제풀이(2)
function solution(s){
    
    s = s.split('');
    p = s.filter((el) => el.toLowerCase() === 'p').length;
    y = s.filter((el) => el.toLowerCase() === 'y').length;

    
    return p === y ? true : false;
}

console.log(solution("pPoooyY"));   // true
console.log(solution("Pyy"));       // false


// 다른 사람의 풀이(1)
function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

console.log(solution("pPoooyY"));   // true
console.log(solution("Pyy"));       // false
