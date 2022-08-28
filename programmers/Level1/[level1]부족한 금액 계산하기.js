// 부족한 금액 계산하기
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/82612

// 문제풀이(1)
function solution(price, money, count) {
  // price = 이용로
  // money = 가지고 있는 금액
  // count = 이용 횟수

  // 3 + 6 + 9 + 12 = 30원 - money = answer
  let sum = 0;

  for (let i = 1; i <= count; i++) {
    sum = sum + price * i;
  }

  return sum < money ? 0 : sum - money;
}

console.log(solution(3, 20, 4)); // 10
