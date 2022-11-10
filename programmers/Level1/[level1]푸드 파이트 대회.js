// 푸드 파이트 대회
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/134240

// 문제풀이(1)
function solution(food) {
  // 1대1로 푸드 파이트 대회
  // 한명은 왼쪽부터 한명은 오른쪽부터 순서대로 음식을 먹는다.
  // 중앙에는 물을 배치하고 먼저 먹는 선수가 승리
  // 음식의 종류와 양은 같다.
  // 1번 = 3개, 2번 = 4개, 3번 = 6개, 0번 = 물
  // food[i] = i번 음식의 수

  let eatting = "";
  for (let i = 1; i < food.length; i++) {
    if (food[i] >= 2) {
      eatting += String(i).repeat(Math.floor(food[i] / 2));
    }
  }

  return eatting + "0" + eatting.split("").reverse().join("");
}

// sudo code
// 1-1. 음식의 개수가 2이상인지 판별한다.
// 1-2. 음식의 개수가 짝수인지 판별한다.
// 2. 음식의 개수가 1-1,1-2의 판별을 통과한다면 절반을 추가한다.
// 3. 모든 경우의 수가 끝난 뒤 나열된 음식의 개수를 answer에 담는다.
// 4. answer += '0'
// 5. answer에 나열된 음식의 개수를 내림차순으로 정렬한다.

console.log(solution([1, 3, 4, 6])); // '1223330333221'
console.log(solution([1, 7, 1, 2])); // '111303111'
