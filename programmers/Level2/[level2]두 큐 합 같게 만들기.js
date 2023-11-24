// 두 큐 합 같게 만들기
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/118667

// 문제 풀이(1) 투 포인터 문제
// 길이가 같은 큐가 주어짐
// 하나의 큐를 골라 원소를 추출하고, 추출된 원소를 다른 큐에 집어 넣는 작업을 통해 각 큐의 합이 같도록 만들려고 한다.
// 한 번의 pop과 한 번의 insert를 합쳐서 작업을 1회 수행한 것으로 간주

// [3, 2, 7, 2] [4, 6, 5, 1]
// 14 + 16 = 30 / 2 = 15

// [2, 7, 2, 4] [6, 5, 1, 3]
// 15 + 15 = 30 / 2 = 15
// 왼쪽 pop + insert, 오른쪽 pop + insert = 2

// 더 큰쪽에서 작은쪽으로 전달하는 로직 필요 (반복, 같을 경우 stop)
// 나눴을 경우 같게 나눌수 있는지 여부 확인 필요
// 비교로직 필요
// pop, insert 로직을 실행할 경우 10^9때문에 시간초과일듯
function solution(queue1, queue2) {
  // 두 큐의 합
  let sumQ1 = queue1.reduce((a, b) => a + b, 0);
  let sumQ2 = queue2.reduce((a, b) => a + b, 0);

  // 중간값
  const middle = (sumQ1 + sumQ2) / 2;

  const queue = [...queue1, ...queue2];

  let pointer1 = 0;
  let pointer2 = queue1.length;

  for (let i = 0; i < queue1.length * 3; i++) {
    // Q1, Q2의 값이 같아 졌을 경우
    if (sumQ1 === middle) return i;

    if (sumQ1 > middle) {
      sumQ1 -= queue[pointer1++];
    } else {
      sumQ1 += queue[pointer2++];
    }
  }

  return -1;
}

// [3, 2, 7, 2]	[4, 6, 5, 1]	2
// [1, 2, 1, 2]	[1, 10, 1, 2]	7
// [1, 1]	[1, 5]	-1
