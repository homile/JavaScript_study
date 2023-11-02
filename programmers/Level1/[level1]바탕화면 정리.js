// 바탕화면 정리
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/161990

// 문제풀이(1)
// 컴퓨터 바탕화면 각 칸이 정사각형 격자판
// 바탕화면의 상태 = wallpaper
// 빈칸 = ""
// 파일이 있는 칸 = #
// 모두 한번에 선택할 때 좌표값

// 가장 좌측, 가장 상단에 있는 값 / 가장 우측, 가장 하단에 있는 값
// 위의 값이 찾으려는 좌표값이 된다.
function solution(wallpaper) {
  const answer = [];
  const files_locate_x = [];
  const files_locate_y = [];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        files_locate_x.push(i);
        files_locate_y.push(j);
      }
    }
  }

  files_locate_x.sort((a, b) => a - b);
  files_locate_y.sort((a, b) => a - b);
  answer.push(files_locate_x[0], files_locate_y[0], files_locate_x.at(-1) + 1, files_locate_y.at(-1) + 1);

  return answer;
}

// 문제풀이(2)
// 첫 번째 풀이의 경우 sort, at 메서드를 사용해서 실행시간이 오래걸릴것으로 예상되어 sort와 at메서드를 제거하여 실행속도를 올려보았다.
function solution(wallpaper) {
  const answer = [];
  const files_locate_x = [];
  const files_locate_y = [];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        files_locate_x.push(i);
        files_locate_y.push(j);
      }
    }
  }

  answer.push(
    Math.min(...files_locate_x),
    Math.min(...files_locate_y),
    Math.max(...files_locate_x) + 1,
    Math.max(...files_locate_y) + 1
  );

  return answer;
}

// [".#...", "..#..", "...#."]	[0, 1, 3, 4]
// ["..........", ".....#....", "......##..", "...##.....", "....#....."]	[1, 3, 5, 8]
// [".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."]	[0, 0, 7, 9]
// ["..", "#."]	[1, 0, 2, 1]
