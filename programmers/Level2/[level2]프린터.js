/* 프린터

링크: https://programmers.co.kr/learn/courses/30/lessons/42587

[문제 설명]
일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다. 
그렇기 때문에 중요한 문서가 나중에 인쇄될 수 있습니다. 
이런 문제를 보완하기 위해 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발했습니다. 
이 새롭게 개발한 프린터는 아래와 같은 방식으로 인쇄 작업을 수행합니다.

1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 
J를 대기목록의 가장 마지막에 넣습니다.
3. 그렇지 않으면 J를 인쇄합니다.
예를 들어, 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고 
중요도가 2 1 3 2 라면 C D A B 순으로 인쇄하게 됩니다.

내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶습니다. 
위의 예에서 C는 1번째로, A는 3번째로 인쇄됩니다.

현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 
내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 
매개변수로 주어질 때, 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 
return 하도록 solution 함수를 작성해주세요.

[제한사항]
현재 대기목록에는 1개 이상 100개 이하의 문서가 있습니다.
인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻입니다.
location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 
대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.

[문제접근]
현재 대기중인 문서와 다음 문서의 중요도를 비교하여
다음 문서가 중요도가 높다면 현재 문서를 가장 뒤로 보낸다.
이때, 배열중 가장 높은 중요도를 찾아서 비교하면 될 것 같다.
*/

// 문제풀이(1)
function solution(priorities, location) {
    var answer = 0;
    // 배열의 가장 큰 값 찾기
    let max = Math.max.apply(null, priorities);
    console.log(max);

    // 우선순위 비교하여 정렬하기
    for (let i = 0; i < priorities.length; i++){
        if (priorities[0] < max){
            priorities.push(priorities.shift());
        }
    }
    console.log(priorities);

    return answer;
}

/* priorities.length만큼 반복한다면 자신의 위치를 찾을 수 없다.
while문을 사용해야 할 것 같다. */


// 문제풀이(2)      //실패 20점 TC는 all pass
function solution(priorities, location) {
    var answer = 0;
    // 배열의 가장 큰 값 찾기
    let max = Math.max.apply(null, priorities);
    let loc = Array.from({length: priorities.length}, (v, i) => i);
    // console.log(max);
    // console.log(loc);

    // 우선순위 비교하여 정렬하기
    for (let i = 0; i < priorities.length; i++){
        if (priorities[0] < max){
            priorities.push(priorities.shift());
            loc.push(loc.shift());
        }else{
            break;
        }
    }
    for (let j = 0; j < loc.length; j++){
        if (loc[j] === location){
            return j+1;
        }
    }
    // console.log(priorities);
    // console.log(loc);
}

/* for문을 너무 많이 사용한듯 */


// 문제풀이(3)      
function solution(priorities, location) {
    var answer = 0;
    // 배열의 가장 큰 값 찾기
    let max = Math.max(...priorities);
    // console.log(priorities);

    // 우선순위 비교하여 정렬하기
    while (true){
        if (priorities[0] == max){
            answer++;   //pop하므로 answer증가
            if (location === 0){    // 자신의 순위가 0이 되면
                return answer;
            }
        }else{
            priorities.push(priorities.shift());
        }
        location--; //한 차례마다 자신의 순위를 계속 줄여나간다.
        if (location == -1){    // 자신의 순위가 -1이 되면 배열의 맨뒤로 보낸다.
            location = priorities.length-1;
        }
    }
}

console.log(solution([2,1,3,2], 2));    //1
console.log(solution([1,1,9,1,1,1], 0));    //5