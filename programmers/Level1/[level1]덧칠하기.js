// 덧칠하기
// 문제
// 페인트가 칠해진 n 미터인 벽
// 벽 1미터 길이의 구역 n개로 나눈고, 각 구역에 왼쪽부터 순서대로 1번부터 n번까지 번호 부여
// 벽에 페인트를 칠하는 롤러의 길이는 m 미터
// 규칙
// - 롤러가 벽을 벗어나면 안됨
// - 구역의 일부분만 포함되도록 칠하면 안됨

// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/161989

// 문제풀이(1)
// section 배열을 순회한다.
// section의 값을 마주하면 페인트를 칠한다.
// ㄴ 다시 페인트를 칠해야 하는 곳 + 롤러의 길이(m) - 1(배열은 0부터 시작)
function solution(n, m, section) {
  let answer = 0;
  let painted = 0;

  section.forEach((repaint) => {
    if (painted < repaint) {
      answer++;
      painted = repaint + m - 1;
    }
  });

  return answer;
}

console.log(solution(8, 4, [2, 3, 6])); // 2
