// 문자열 나누기
// 링크:

// 문제풀이(1)
// 가장 처음에 나온 알파멧 x와 다른 알파벳들의 개수가 같을 때 answer++
function solution(s) {
  let answer = 0;
  // 처음 나온 문자
  let x = "";
  // x가 나온 갯수
  let cnt = 0;
  // x외 다른 문자가 나온 갯수
  let otherCnt = 0;

  for (let i = 0; i < s.length; i++) {
    // x의 초기값이 없거나 cnt가 0으로 초기화 된 경우
    if (x === "" || cnt === 0) {
      x = s[i];
      cnt++;
      continue;
    }

    // 현재 문자가 x와 같은지 판별
    s[i] === x ? cnt++ : otherCnt++;

    // x문자의 갯수와 다른 문자들의 갯수가 같은지 판별
    if (cnt === otherCnt) {
      answer++;
      cnt = 0;
      otherCnt = 0;
    }
  }

  // x만 나오다가 끝날경우 answer++
  if (cnt !== 0) answer++;

  return answer;
}

console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3
