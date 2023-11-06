// 연속 부분 수열 합의 개수
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/131701

// 1, 4, 7, 9
// 7+9, 9+1, 1+1, 1+4, 4+7
// 16, 10, 2, 5, 11

// 문제 풀이(1) 시간초과

// elements의 길이 만큼 순회한다.
// 합해야할 부분 수열의 개수는 한번 순회할 때마다 1씩 증가한다. (최대 - elements의 길이)
// 부분 수열의 합을 배열에 저장한다.
// 합할 때 배열의 마지막을 넘어갈 경우 첫번째로 돌아온다.
// 부분 수열의 합이 들어있는 배열의 중복을 제거한다.

// 시간초과 원인 분석
// 1. 메서드를 너무 많이 사용했다.
// 2. find 메서드를 사용해서 중복 제거할 경우 시간이 많이 걸린다. (매번 중복을 제거하기 때문)

// 생각한 해결방안
// 1. 메서드의 사용을 줄인다.
// 2. 중복 제거 방법을 변경한다.

function solution(elements) {
  const answer = [];

  let elements_length = elements.length;

  // elements의 길이 순회 (합해야할 부분 수열의 개수)
  for (let i = 1; i <= elements_length; i++) {
    for (let j = 0; j < elements_length; j++) {
      let sum = 0;
      sum += elements.slice(j, j + i).reduce((a, b) => a + b);

      if (j + i > elements_length) {
        sum += elements.slice(0, Math.abs(elements_length - i - j)).reduce((a, b) => a + b);
      }

      if (answer.indexOf(sum) === -1) {
        answer.push(sum);
      }
    }
  }

  return answer.length;
}

// 문제 풀이(2)

// 중복 제거 방법을 find 대신 new Set 메서드를 사용했다.
// for 문을 순회할 때 중복 제거를 매번하는 것이 아니라 최종적으로 중복제거 하기 때문에 시간이 적게 든다.
// 이렇게 변경해도 최대시간이 1100ms 이다. 더 줄일 수 있는 방법을 생각해본다.
function solution(elements) {
  const answer = [];

  let elements_length = elements.length;

  // elements의 길이 순회 (합해야할 부분 수열의 개수)
  for (let i = 1; i <= elements_length; i++) {
    for (let j = 0; j < elements_length; j++) {
      let sum = 0;
      sum += elements.slice(j, j + i).reduce((a, b) => a + b);

      if (j + i > elements_length) {
        sum += elements.slice(0, Math.abs(elements_length - i - j)).reduce((a, b) => a + b);
      }

      answer.push(sum);
    }
  }

  const set = new Set(answer);

  return [...set].length;
}

// 다른 사람 풀이(1)
function solution(elements) {
  const circular = elements.concat(elements);
  const set = new Set();
  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      sum += circular[i + j];
      set.add(sum);
    }
  }
  return set.size;
}

// [7,9,1,1,4]	18
