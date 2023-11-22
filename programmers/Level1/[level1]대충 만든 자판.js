// 대충 만든 자판
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/160586

// 문제풀이(1)
// 키 하나에 여러 문자가 할당된 경우, 동일한 키를 연속해서 빠르게 누르면 할당된 순서대로 문자가 바뀐다.

function solution(keymap, targets) {
  const answer = [];

  // 최솟값 map 생성
  const map = new Map();

  // 각 키의 최솟값 비교
  keymap.forEach((el) => {
    for (let i = 0; i < el.length; i++) {
      if (map.has(el[i])) {
        map.set(el[i], Math.min(map.get(el[i]), i + 1));
      } else {
        map.set(el[i], i + 1);
      }
    }
  });

  // 목표값 작성 가능여부 판단
  targets.forEach((el) => {
    let sum = 0;
    for (let i = 0; i < el.length; i++) {
      if (map.has(el[i])) {
        sum += map.get(el[i]);
      } else {
        sum = -1;
        break;
      }
    }
    answer.push(sum);
  });

  return answer;
}
