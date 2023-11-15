// 택배상자
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/131704

// 문제풀이(1)
// 스택에 값을 담아 order를 순회하면 체크한다.
function solution(order) {
  let answer = 0;
  const stack = [];

  for (let i = 1; i <= order.length; i++) {
    stack.push(i);

    // 스택의 마지막 값과 같은지 체크
    while (stack.length !== 0 && stack.at(-1) === order[answer]) {
      stack.pop();
      answer++;
    }
  }

  return answer;
}

// [4, 3, 1, 2, 5]	2
// [5, 4, 3, 2, 1]	5
