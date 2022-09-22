// 실패율
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42889?language=javascript

// 문제풀이(1)
function solution(N, stages) {
  // 실패율 = 스테이지 도달 클리어 x 플레이어의 수 / 스테이지에 도달한 플레이어의 수
  // 전체 스테이지의 개수 N, 사용자가 멈춰있는 스테이지 배열 stages
  // 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열 return
  let answer = [];
  let obj = {};

  // 참가 유저의 수
  let user = stages.length;
  for (let i = 1; i <= N; i++) {
    // 진행중인 참가 유저가 있을 경우
    if (user !== 0) {
      // 현재 스테이지에 머물고 있는 유저
      let fail = stages.filter((el) => el === i).length;
      // 실패율
      obj[i] = fail / user;
      // 현재 스테이지에 머물고 있는 유저는 다음 스테이지에 참가하지 않기 때문에 빼준다.
      user -= fail;
    } else {
      obj[i] = 0;
    }
  }

  // 실패율에 따라 속성을 정렬한다.
  const result = Object.keys(obj).sort((a, b) => {
    return obj[b] - obj[a];
  });

  // answer 배열에 푸쉬...
  for (let i = 0; i < result.length; i++) {
    answer.push(Number(result[i]));
  }

  return answer;
}

// 문제풀이(2)
function solution(N, stages) {
  // 실패율 = 스테이지 도달 클리어 x 플레이어의 수 / 스테이지에 도달한 플레이어의 수
  // 전체 스테이지의 개수 N, 사용자가 멈춰있는 스테이지 배열 stages
  // 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열 return
  let answer = []
  
  let user = stages.length;
  for (let i = 1; i <= N; i++){
      let fail = stages.filter((el) => el === i).length;
      answer.push([i ,fail / user])
      user -= fail
  }

  answer.sort((a,b) => b[1] - a[1])
  
  return answer.map((el) => el[0]);
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
// [3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4]));
// [4,1,2,3]
