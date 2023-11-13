// 롤케이크 자르기
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/132265

// 문제풀이(1) (전체 시간초과 O(n log N))
// 하나씩 잘라가면서 왼쪽과 오른쪽의 토핑의 개수가 같은지 판별한다. (중복제거)

// 시간초과 이유
// forEach안에 slice를 반복하여 중첩 for로 인식했음.
// 중첩 for문 되는 것을 해결해야함.
// 1,000,000 이상일 때는 중첩 for문을 피해라.
function solution(topping) {
  let answer = 0;
  topping.forEach((el, idx) => {
    const setLeft = new Set(topping.slice(0, idx + 1));
    const setRight = new Set(topping.slice(idx + 1));

    if (setLeft.size === setRight.size) answer++;
  });

  return answer;
}

// 문제풀이(2)
// 전체 토핑의 개수를 map에 담는다.
// 형의 토핑 개수를 담는다.

function solution(topping) {
  let answer = 0;

  const me = new Map();
  const brother = new Set();

  // 전체 토핑별 개수를 map에 담는다.
  topping.forEach((el) => {
    if (me.has(el)) {
      me.set(el, me.get(el) + 1);
    } else {
      me.set(el, 1);
    }
  });

  // 전체 토핑이 담긴 객체 me에서 하나씩 빼서 brother 객체에 넘겨준다.
  topping.forEach((el) => {
    let count = me.get(el) - 1;
    brother.add(el);

    if (count === 0) {
      me.delete(el);
    } else {
      me.set(el, count);
    }

    // 사이즈가 같을 때 answer에 1씩 더해준다.  
    if (me.size === brother.size) answer++;
  });

  return answer;
}

// [1, 2, 1, 3, 1, 4, 1, 2]	2
// [1, 2, 3, 1, 4]	0