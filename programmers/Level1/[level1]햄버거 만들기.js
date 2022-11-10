// 햄버거 만들기
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/133502

// 햄버거 포장
// 재료를 조리해 주면 조리된 순서대로 상수의 앞에 아래서부터 위로 쌓이게 한다.
// 상수는 순서에 맞게 쌓여서 완성된 햄버거를 따로 옮겨 포장한다.
// 아래서부터, 빵 - 야채 - 고기 - 빵 순서로 포장

// [야채, 빵, 빵, 야채, 고기, 빵, 야채, 고기, 빵]
// 여섯 번째 재료(빵)가 쌓였을 때,
// 세 번째 자료부터 여섯 번째 재료를 이용하여 햄버거를 포장한다.

// 아홉 번째 재료(빵)가 쌓였을 때,
// 두 번째 재료와 일곱 번째 재료부터 아홉번째 재료를 이용하여 햄버거를 포장한다.

// 1 = 빵, 2 = 야채, 3 = 고기

// 문제풀이(1)
// 문제는 통과했으나 시간이 너무 오래걸림 해결방안은?
function solution(ingredient) {
  let count = 0;
  const arr = [];

  for (let i = 0; i < ingredient.length; i++) {
    arr.push(ingredient[i]);
    if (arr.length >= 4) {
      if (arr.slice(-4).join("") === "1231") {
        count++;
        arr.splice(-4);
      }
    }
  }

  return count;
}

// sudo code
// 1. 입력된 배열의 앞에서 하나씩 추출해서 새로운 배열에 담는다.
// 2. 새로운 배열에 담긴 내용이 1, 2, 3, 1이 아니라면 배열을 비워준다.
// 3. 새로운 배열에 담긴 내용이 1, 2, 3, 1이 된다면 count를 1증가한 뒤 배열을 초기화한다.

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0
