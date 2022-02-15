/* [level2]다리를 지나는 트럭

링크: https://programmers.co.kr/learn/courses/30/lessons/42583

[문제 설명]
트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 
모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 
다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 
다리는 weight 이하까지의 무게를 견딜 수 있습니다. 
단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.

예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다. 
무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 
다음과 같이 건너야 합니다.

경과 시간	다리를 지난 트럭	다리를 건너는 트럭	대기 트럭
0	            []	                []	         [7,4,5,6]
1~2	            []	                [7]	         [4,5,6]
3	            [7]	                [4]	         [5,6]
4	            [7]	                [4,5]	     [6]
5	            [7,4]	            [5]	         [6]
6~7	            [7,4,5]	            [6]	         []
8	            [7,4,5,6]	        []	         []
따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 
다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다. 
이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 
return 하도록 solution 함수를 완성하세요.

[제한 조건]
bridge_length는 1 이상 10,000 이하입니다.
weight는 1 이상 10,000 이하입니다.
truck_weights의 길이는 1 이상 10,000 이하입니다.
모든 트럭의 무게는 1 이상 weight 이하입니다.

[문제접근]
다리위에 트럭이 올라갈 경우의 무게가 weight이하일 경우 다음 트럭이 올라가며
지나가는 시간은 1당 1초로 계산한다.
만약, 견딜 수 있는 무게 10, 트럭의 무게 10, 5, 다리의 길이가 20일 경우
총 시간은 40초이다.
1. 다리위에 트럭은 얹는다.
1-1. 다리위의 트럭무게가 견딜수 있는지 확인한다.
1-2. 견딜 수 있다면 다음 트럭을 올리고 없다면 올라가 있는 트럭이 지나간 뒤
     다음 트럭을 올린다.
shift와 push를 사용한다.
*/

// 문제풀이(1)
function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    // 다리의 길이 만큼 0으로 채워진 배열 생성
    // from 함수 사용
    let on_truck = Array.from({length: bridge_length}, () => 0);

    // console.log(on_truck);

    while (on_truck.length){
        // 1초씩 증가
        answer++;
        // 스택의 빈 공간을 만들어 주기 위해 선입선출
        on_truck.shift();
        // reduce함수를 사용하여 다리위의 현재 무게를 구함
        let sum = on_truck.reduce((a,b) => a+b); 
        // 다리위의 현재 무게와 다음에 올라올 트럭의 무게가 weight보다 작거나 같다면
        if (sum + truck_weights[0] <= weight){
            // 다리위에 맨 앞에 대기중인 트럭을 push
            on_truck.push(truck_weights.shift());
        }else{
            // 다리위의 무게가 넘치기 때문에 진행 사항을 알기위해 0을 push
            on_truck.push(0);
            // 다리위의 총 무게가 0이라면 모든 트럭이 지나갔기 때문에 break
            if (sum === 0){break;}
        }
    }

    return answer;
}

console.log(solution(2, 10, [7,4,5,6]));    // 8
console.log(solution(100, 100, [10]));      // 101
console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10]));    // 110