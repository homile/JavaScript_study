// 이진 변환 반복하기
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/70129?language=javascript

// 문제풀이(1)
function solution(s) {
  let cnt = 0;
  let zero = 0;

  while (s != "1") {
    zero += [...s].filter((el) => el === "0").length;
    s = s.replace(/0/gi, "");
    s = s.length.toString(2);
    cnt++;
  }
  return [cnt, zero];
}

console.log(solution("110010101001")); // [3,8]
