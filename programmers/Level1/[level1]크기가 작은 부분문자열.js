// 크기가 작은 부분문자열
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/147355

// 문제풀이(1)
// 숫자로 이루어진 문자열 t와 p가 주어질 때,
// t에서 p와 길이가 같은 부분문자열 중에서,
// 이 부분문자열이 나타내는수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수 return

// 1. t를 p.length 만큼 나눠서 arr에 추가한다. -> 추가할 필요 없을 듯
// 2. arr의 길이만큼 반복문을 실행해서 p보다 작거나 같은 수인지 판별하여 count한다.
function solution(t, p) {
  let count = 0;

  let pLen = p.length;

  for (let i = 0, j = pLen; i <= t.length - pLen; i++, j++) {
    if (Number(t.slice(i, j)) <= Number(p)) {
      count++;
    }
  }

  return count;
}

console.log(solution("3141592", "271")); // 2
console.log(solution("500220839878", "7")); // 8
console.log(solution("10203", "15")); // 3
