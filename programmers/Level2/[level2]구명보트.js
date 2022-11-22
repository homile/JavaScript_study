// 구명보트
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42885?language=javascript

// 문제풀이(1)
// 최대 2명 탑승 / 무게 제한 = limit
// 모든 사람을 구출하기 위한 보트의 최소갯수 리턴
// 오름차순 정렬로 하니 테스트 케이스 많은 실패 내림차순으로 정렬
function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a);

  let left = 0;
  let right = people.length - 1;

  while (left < right) {
    // 제일 큰 값 + 제일 작은 값이 limit보다 클 경우 제일 큰 값의 사람만 탈출
    if (people[left] + people[right] > limit) {
      left++;
    } else {
      left++;
      right--;
    }
    answer++;
  }
  // left와 right가 같은경우는 원래 인원이 홀수일 경우
  return left === right ? (answer += 1) : answer;
}

console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3
