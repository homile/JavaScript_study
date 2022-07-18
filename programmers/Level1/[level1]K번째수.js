/* K번째수

링크: https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

[문제 설명]
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, 
k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
2에서 나온 배열의 3번째 숫자는 5입니다.
배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

[제한사항]
array의 길이는 1 이상 100 이하입니다.
array의 각 원소는 1 이상 100 이하입니다.
commands의 길이는 1 이상 50 이하입니다.
commands의 각 원소는 길이가 3입니다. 

[문제접근]
빈 리스트에 array를 복사한다. 
계속 자르고 붙여야 하는데 array가 망가지는 것을 막기 위함이다.
위의 것은 slice로 망가지지 않게 사용할 수 있다.
*/

// 문제풀이(1)
function solution(array, commands) {
    let answer = [];

    for (let i in commands){
        let list = array.slice(commands[i][0]-1, commands[i][1]).sort();
        console.log(list);
        answer.push(list[commands[i][2]-1]);
    }
    return answer;
}

// TC2 실패 -> 정렬 오류

// 문제풀이(2)
function solution(array, commands) {
    let answer = [];

    for (let i in commands){
        let list = array.slice(commands[i][0]-1, commands[i][1]).sort((a, b) => a-b);
        console.log(list);
        answer.push(list[commands[i][2]-1]);
    }
    return answer;
}

// 다른 사람의 풀이(1)
function solution(array, commands) {
    return commands.map(v => {
        return array.slice(v[0] - 1, v[1]).sort((a, b) => a - b).slice(v[2] - 1, v[2])[0];
    });
}

// [5, 6, 3]
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));     
