// 방문 길이
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/49994

// U: 위로 한 칸
// D: 아래쪽 한 칸
// R: 오른쪽 한 칸
// L: 왼쪽 한 칸

// 처음걸어본 길의 길이를 찾는 것 (중복 제거)

// 0,0에서 시작
// U -> ((0,0), (0,1))와 같이 걸어본 길이를 카운트 한다. (중복제거)
// 벽에 막혔을 경우 명령어를 수행하지 않는다.

// 문제풀이(1)
function solution(dirs) {
  const setLoadCount = new Set(); // 길의 개수 중복제거
  let x = 0; // 좌표
  let y = 0;

  for (let i = 0; i < dirs.length; i++) {
    let prevLocation = [x, y]; // 움직이기 전 좌표값

    if (dirs[i] === "U") {
      y += 1;
    } else if (dirs[i] === "D") {
      y -= 1;
    } else if (dirs[i] === "R") {
      x += 1;
    } else if (dirs[i] === "L") {
      x -= 1;
    }

    if (x > 5 || x < -5 || y > 5 || y < -5) {
      [x, y] = prevLocation;
      continue;
    }

    const moveLoad = [prevLocation, [x, y]].sort(); // 움직이기 전과 후의 좌표값 = 방문 거리(중복제거 위해 정렬)
    setLoadCount.add(String(moveLoad)); // 중복제거를 원활하게 하기 위해 문자형으로 치환
  }

  return setLoadCount.size;
}

// "ULURRDLLU"	7
// "LULLLLLLU"	7