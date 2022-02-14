/* 음양 더하기

링크: https://programmers.co.kr/learn/courses/30/lessons/76501

[문제 설명]
어떤 정수들이 있습니다. 
이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 
차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 
실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

[제한사항]
absolutes의 길이는 1 이상 1,000 이하입니다.
absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
signs의 길이는 absolutes의 길이와 같습니다.
signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 
그렇지 않으면 음수임을 의미합니다.

[문제접근]
signs의 값이 true이면 양수, fasle이면 음수로 
absolutes의 값을 변경한 후 더하면 된다.
*/

// 문제풀이(1)
function solution(absolutes, signs) {
    var answer = 0;

    for (let i in absolutes){
        if (signs[i] === false){
            absolutes[i] = -absolutes[i];
        }
        answer += absolutes[i];
    }

    console.log(absolutes);
    return answer;
}


// 다른 사람의 풀이(1)
function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
    }
    return answer;
}
// 이항연산자 사용

console.log(solution([4,7,12], [true,false,true]));
console.log(solution([1,2,3], [false,false,true]));