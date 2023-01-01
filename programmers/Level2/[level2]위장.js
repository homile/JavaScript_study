// 위장
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42578

// 문제풀이(1)
function solution(clothes) {
  let answer = 1;
  const obj = {};

  // 기본 의상에 다른 의상을 더해서 입을 경우 기본값 1
  // 아닐 경우 + 1
  for (let i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
  }

  for (let i in obj) {
    answer *= obj[i];
  }

  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
); // 5

console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
); // 3
