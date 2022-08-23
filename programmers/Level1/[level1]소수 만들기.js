/* 소수 만들기

링크: https://programmers.co.kr/learn/courses/30/lessons/12977?language=javascript

[문제 설명]
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, 
nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 
return 하도록 solution 함수를 완성해주세요.

[제한사항]
nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

[문제접근]
주어진 숫자 3개를 가지고 경우의 수를 만든다.
소수를 판별하는 식을 만든다.
*/

// 문제풀이(1)
function solution(nums) {
    let answer = 0;

    for (let i = 0; i < nums.length-2; i++){
        for (let j = i + 1; j < nums.length-1; j++ ){
            for (let k = j + 1; k < nums.length; k++){
                // console.log(nums[i], nums[j], nums[k])
                let sum = nums[i] + nums[j] + nums[k];
                if (primNumber(sum)){
                    answer++;
                }
            }
        }
    }
    
    return answer;
}

// 소수 판별 함수
function primNumber(n){
    for (let i = 2; i <= Math.sqrt(n); i ++){
        if (n % i == 0){
            return false;
        }
    }
    return true;
}

console.log(solution([1, 2, 3, 4]));        // 1
console.log(solution([1, 2, 7, 6, 4]));     // 4
