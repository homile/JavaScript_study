// 귤 고르기
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/138476

// 문제풀이(1)
// 귤의 크기 별로 빈도수를 객체에 할당한다.
// 객체에 있는 빈도수를 기준으로 내림차순으로 정렬하고,
// 배열을 순회하며 각 인덱스 마다 더해준뒤 k랑 같거나 클 경우 종료하고,
// 순회한 횟수를 정답으로 제출한다.

// 문제풀이(1)로 풀었을 경우 555ms만큼 속도가 저하되는 현상이 발생했다.

// 귤의 종류가 최소이며 k개에 해당하는 경우
function solution(k, tangerine) {
  let answer = 0;
  // 귤의 빈도수를 담는 배열
  const tangerine_count = {};

  for (let i = 0; i < tangerine.length; i++) {
    // 귤의 크기 (tangerine[i])마다 개수 카운트
    tangerine_count[tangerine[i]] = ++tangerine_count[tangerine[i]] || 1;
  }

  const sort_count = Object.values(tangerine_count).sort((a, b) => b - a);

  let sum = 0;

  for (let i = 0; i < sort_count.length; i++) {
    answer++;
    sum += sort_count[i];

    if (sum >= k) break;
  }

  return answer;
}

// 문제풀이(2)
// 객체에 할당하는 것을 forEach 문으로 변경했을 때, 최대 98ms까지 줄었다.
function solution(k, tangerine) {
  let answer = 0;
  const tangerine_count = {};

  tangerine.forEach((value) => (tangerine_count[value] = ++tangerine_count[value] || 1));

  const sort_count = Object.values(tangerine_count).sort((a, b) => b - a);

  let sum = 0;

  for (let i = 0; i < sort_count.length; i++) {
    answer++;
    sum += sort_count[i];

    if (sum >= k) break;
  }

  return answer;
}

// 6	[1, 3, 2, 5, 4, 5, 2, 3] /	3
// 4	[1, 3, 2, 5, 4, 5, 2, 3] /	2
// 2	[1, 1, 1, 1, 2, 2, 2, 3] /	1
