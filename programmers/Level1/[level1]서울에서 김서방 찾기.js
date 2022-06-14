// 서울에서 김서방 찾기
// 링크: https://programmers.co.kr/learn/courses/30/lessons/12919

// 문제풀이(1)
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}

console.log(solution(["Jane", "Kim"]));     // "김서방은 1에 있다"