// 할인 행사
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/131127

// 일정한 금액 지불 시 10일 동안 회원 자격 부여
// 회원 대상으로 매일 한 가지 제품을 할인 행사
// 할인 제품은 하루에 하나씩만 구매 가능
// 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우에 맞춰서 회원가입을 하려한다.

// 바나나 3개, 사과 2개, 쌀 2개, 돼지고기 2개, 냄비 1개
// 15일 행사 - 치킨, 사과, 사과, 바나나, 쌀, 사과, 돼지고기, 바나나, 돼지고기, 쌀, 냄비, 바나나, 사과, 바나나

// 구매하려는 물건은 무조건 10개 이하
// 할인하는 날이 없을 수 있음

// 문제 풀이(1)
// 객체에 want와 number를 매칭한뒤 discount를 한칸씩 이동하며 매칭 검사를 한다.
// 객체에 총합이 0 일 경우 구매할 수 있는 날짜이므로 해당 날짜를 리턴한다.
function solution(want, number, discount) {
  var answer = 0;

  const obj = {};

  want.forEach((el, idx) => (obj[el] = number[idx]));

  for (let i = 0; i < discount.length; i++) {
    const discount_slice = discount.slice(i);
    const obj_copy = Object.assign({}, obj);

    for (let j = 0; j < discount_slice.length; j++) {
      if (!obj_copy[discount_slice[j]]) break;
      obj_copy[discount_slice[j]] = obj_copy[discount_slice[j]] - 1;
    }

    if (Object.values(obj_copy).reduce((a, b) => a + b) === 0) {
      answer = i + 1;
      return answer;
    }
  }

  return answer;
}

// 문제풀이(2) 실패(시간초과)
// 문제풀이(1)에서 문제를 잘 못 읽은 것을 확인했다.
// 10일 이상연속으로 물건을 모두 구매할 수 있는 날짜를 구하는 것이 아니라
// 10일 이상연속으로 물건을 모두 구매할 수 있는 날짜들의 수를 구하는 것이었다.
// 문제를 해결한 뒤 제출했지만 2문제가 시간 초과가 났다.... 또 메서드를 많이 사용한 것이 문제인것이다.
// 알고리즘을 적용해보자!
function solution(want, number, discount) {
  var answer = 0;

  const obj = {};

  want.forEach((el, idx) => (obj[el] = number[idx]));

  for (let i = 0; i < discount.length; i++) {
    const discount_slice = discount.slice(i);
    const obj_copy = Object.assign({}, obj);

    for (let j = 0; j < discount_slice.length; j++) {
      if (!obj_copy[discount_slice[j]]) break;
      obj_copy[discount_slice[j]] = obj_copy[discount_slice[j]] - 1;
    }

    if (Object.values(obj_copy).reduce((a, b) => a + b) === 0) {
      answer += 1;
    }
  }

  return answer;
}

// 문제풀이(3)
// 객체를 사용하는 방법도 좋았지만 사용할 것이라면 new Set 객체를 사용하는 것이 좋아보였다.
// 하지만, 객체가 굳이 필요한가에 대한 생각을 했고,
// 객체대신 discount를 10칸씩 잘라서 filter로 number의 값과 일치하는지 여부를 판단하는 방식으로 수정했다.
function solution(want, number, discount) {
  let answer = 0;

  for (let i = 0; i < discount.length; i++) {
    // 10개 배열로 자르기
    const discount_slice = discount.slice(i, i + 10);
    // want의 개수 만큼 필터를 돌리기 때문에 개수 카운트
    let count = 0;
    // 시간을 줄이기 위한 예외처리
    if (discount_slice.length < 10) break;

    for (let j = 0; j < want.length; j++) {
      // want의 j 번째 물품과 discount_slice의 j번째 물건이 같은 것들의 배열의 길이와
      // number의 j번째 값이 같을 경우 count++
      if (discount_slice.filter((el) => el === want[j]).length === number[j]) {
        count++;
      }
    }
    // count와 want의 길이가 같을 경우 10일을 모두 연속해서 물건을 구매할 수 있는 겨우
    if (count === want.length) answer++;
  }

  return answer;
}

// ["banana", "apple", "rice", "pork", "pot"]	[3, 2, 2, 2, 1]	["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]	3
// ["apple"]	[10]	["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]	0
