// 달리기 경주
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/178871

// 문제풀이(1)
// 실패 -> 테스트 9 ~ 13까지 시간초과 다른 풀이법 생각해야함
// 생각한 이유: 반복문을 계속순회하고 배열을 변경하는 빈도가 많아지기 때문이라고 생각됨.
// 해결방안: 배열로 바꾸지 않고 객체로 인덱스 번호만 변경하여 마지막에 배열에 해당 선수의 이름을 순서대로 추가하는 방식
function solution(players, callings) {
  let answer = players;

  callings.forEach((calling) => {
    let prev = answer[players.indexOf(calling) - 1];
    let callingIdx = answer.indexOf(calling);

    answer[callingIdx - 1] = calling;
    answer[callingIdx] = prev;
  });

  return answer;
}

console.log(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]); // ["mumu", "kai", "mine", "soe", "poe"]
