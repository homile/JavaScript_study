// 행렬의 곱셈
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12949?language=javascript

// 문제풀이(1)
function solution(arr1, arr2) {
  const answer = [];

  // 초기 배열 값 0으로 설정
  for (let i = 0; i < arr1.length; i++) {
    answer.push(new Array(arr2[0].length).fill(0));
  }

  // 3중 for문을 이용한 행렬 곱셈
  for (let i in arr1) {
    for (let j in arr2[0]) {
      for (let k in arr1[0]) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);

// [[15, 15], [15, 15], [15, 15]]

console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
);

// [[22, 22, 11], [36, 28, 18], [29, 20, 14]]
