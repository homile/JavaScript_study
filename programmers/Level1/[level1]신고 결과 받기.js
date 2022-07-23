// 신고 결과 받기
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/92334

// 문제풀이(1)    통과: 최대시간 835ms
function solution(id_list, report, k) {
  // 정지당한 아이디
  let stop = [];

  // 각 유저는 한 번에 한 명의 유저를 신고할 수 있다. (중복배재)
  report = [...new Set(report)];

  // 신고받은 횟수
  let user = Array(id_list.length).fill(0);

  // 정지당한 유저의 수
  let cnt = Array(id_list.length).fill(0);

  for (let i of report) {
    let list = i.split(" ");
    let idx = id_list.indexOf(list[1]);
    user[idx] += 1;

    if (user[idx] >= k) {
      stop.push(id_list[idx]);
    }
  }

  for (let j of report) {
    let list = j.split(" ");

    if (stop.includes(list[1])) {
      let idx = id_list.indexOf(list[0]);
      cnt[idx] += 1;
    }
  }

  return cnt;
}

// 문제풀이(2)    통과: 최대시간 371ms
function solution(id_list, report, k) {
  // 정지당한 아이디
  let stop = [];

  // 각 유저는 한 번에 한 명의 유저를 신고할 수 있다. (중복배재)
  report = [...new Set(report)];

  // 신고받은 횟수
  let user = Array(id_list.length).fill(0);

  // 정지당한 유저의 수
  let cnt = Array(id_list.length).fill(0);

  for (let i of report) {
    let list = i.split(" ");
    // 실행시간 줄이기 위해 추가 (이유: stop에 있는 사람은 뒤에 조건을 볼 필요성이 없음)
    if (stop.includes(list[1])) continue;

    let idx = id_list.indexOf(list[1]);
    user[idx] += 1;

    if (user[idx] >= k) {
      stop.push(id_list[idx]);
    }
  }

  for (let j of report) {
    let list = j.split(" ");

    if (stop.includes(list[1])) {
      let idx = id_list.indexOf(list[0]);
      cnt[idx] += 1;
    }
  }

  return cnt;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);

// [2,1,1,0]

console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
);

// [0,0]