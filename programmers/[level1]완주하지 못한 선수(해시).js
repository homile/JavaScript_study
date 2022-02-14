/* 완주하지 못한 선수(해시)

링크: https://programmers.co.kr/learn/courses/30/lessons/42576

[문제 설명]
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 
완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

[제한사항]
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.

[문제접근]
두 배열을 정렬 하여 참여자 명단에서 완주자 명단과 비교한 후 완주자 명단에 있다면 
참여자, 완주자 명단에서 pop을 시켜준다.
while문을 다 돌리고 난 뒤 남아있는 참여자를 return 해준다.
*/

// 문제풀이(1)      실패
function solution(participant, completion) {
    let answer = '';
    
    for (let i in participant){
        for (let j in completion){
            if (participant[i] === completion[j]){
                participant.splice(i, 1);
                participant.splice(j, 1);
            }
        }
    }

    return answer;
}
/* 배열을 잘라낼 경우 인덱스 번호가 앞으로 밀리게 되어 비교 불가 */


// 문제풀이(2)      통과
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for (let i in participant){
        if (participant[i] !== completion[i]){
            return participant[i];
        }
    }
}

/* 통과하였지만 for in 코드는 성능을 하락 시키는 주요 코드이다.
for in 코드 대신 let i = 0 으로 시작하는 코드로 변경해보자.
*/

// 문제풀이(3)      통과
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for (let i = 0; i < participant.length; i++){
        if (participant[i] !== completion[i]){
            return participant[i];
        }
    }
}

/* for in 코드를 사용하지 않았더니 속도가 10ms정도 빨라졌다. */


console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));   // 	"leo"

console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], 
["josipa", "filipa", "marina", "nikola"]));     // "vinko"

console.log(solution(["mislav", "stanko", "mislav", "ana"],
["stanko", "ana", "mislav"]));      // "mislav"