// 명예의 전당
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/138477

// 문제풀이(1)
// 문제와는 다르지만 풀렸다.
function solution(k, score) {
  let answer = [];
  let arr = [];

  for (let i = 0; i < score.length; i++) {
    // 현재 스코어 추가
    arr.push(score[i]);

    if (arr.length >= k) {
      // 내림차순 정렬
      arr.sort((a, b) => b - a);
      answer.push(arr[k - 1]);
      continue;
    }

    answer.push(Math.min(...arr));
  }
  return answer;
}

// 문제풀이(2)
function solution(k, score) {
  let answer = [];
  let arr = [];

  for (let i = 0; i < score.length; i++) {
    // 현재 스코어 추가
    if (i < k) {
      arr.push(score[i]);
    }
    if (score[i] > Math.min(...arr)) {
      arr.pop();
      arr.push(score[i]);
      arr.sort((a, b) => b - a);
    }

    answer.push(arr.at(-1));
  }
  return answer;
}

// [10, 10, 10, 20, 20, 100, 100]
console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
// [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
