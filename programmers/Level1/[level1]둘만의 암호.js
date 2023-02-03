// 둘만의 암호
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/155652

// 문제풀이(1)
// 1번만 통과 다양한 테스트 케이스가 필요할 듯
function solution(s, skip, index) {
  let answer = "";

  const sAscii = [...s].map((el) => el.charCodeAt());
  const skipAscii = [...skip].map((el) => el.charCodeAt());

  for (let i = 0; i < sAscii.length; i++) {
    let sAsciiIndex = sAscii[i] + index;

    for (let j = 0; j < skipAscii.length; j++) {
      if (sAscii[i] + index >= skipAscii[j] && sAscii[i] < skipAscii[j]) {
        sAsciiIndex++;
      }
    }

    if (sAsciiIndex > 122) {
      answer += String.fromCharCode(sAsciiIndex - 26);
    } else {
      answer += String.fromCharCode(sAsciiIndex);
    }
  }

  return answer;
}

// 문제풀이(2)

console.log(solution("aukks", "wbqd", 5)); // "happy"
console.log(solution("ybcde", "az", 1)); // "bcdef"
