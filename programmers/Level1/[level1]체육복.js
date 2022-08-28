// 체육복
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42862

// 문제풀이(1)
function solution(n, lost, reserve) {
  // n = 전체 학생의 수
  // lost = 체육복 도난당한 학생들의 번호가 담긴 배열
  // reserve = 여벌의 체육복이 있는 학생들의 번호가 담긴 배열
  // 여분이 있지만 도난 당한 학생들을 제외한다.
  let filterLost = lost.filter((el) => !reserve.includes(el)).sort();
  let filterReserve = reserve.filter((el) => !lost.includes(el));

  for (let i = 0; i < filterLost.length; i++) {
    if (filterReserve.includes(filterLost[i] - 1)) {
      filterReserve[filterReserve.indexOf(filterLost[i]-1)] = 0;
      filterLost[i] = 0;
    }else if (filterReserve.includes(filterLost[i] + 1)) {
      filterReserve[filterReserve.indexOf(filterLost[i]+1)] = 0;
      filterLost[i] = 0;
    }
  }

  const result = filterLost.filter((el) => el !== 0).length;
  return n - result;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
