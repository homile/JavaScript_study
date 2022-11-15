// 영어 끝말잇기
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12981?language=javascript

// 문제풀이(1)
function solution(n, words) {
  let answer = [0, 0];
  // 이전 단어
  let prev = words[0];
  // 이전 단어들
  let arr = [prev];

  for (let i = 1; i < words.length; i++) {
    // 현재 단어
    let now = words[i];

    // 이전 단어의 끝과 현재 단어의 첫 알파벳 비교
    if ((prev.at(-1) !== now.at(0)) | arr.includes(now)) {
      // 틀린사람 번호
      answer[0] = (i % n) + 1;
      // 몇 번째 차례인지
      answer[1] = Math.floor(i / n) + 1;
      break;
    }
    arr.push(now);
    prev = now;
  }

  return answer;
}
