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
// 소문자 알파벳이 담긴 배열을 만든다.
// 위의 배열에서 skip에 있는 단어를 제거한다.
// 스킵해서 넘긴다.

function solution(s, skip, index) {
    // 알파벳 초기 세팅
    const alphabet = Array.from({length: 26}, (v, i) => String.fromCharCode(i + 97));
    
    // 스킵 알파벳을 제외한 알파벳 목록 만들기
    const skipAlphabet = alphabet.filter((el) => !skip.includes(el))
    
    const result = s.split("").map((el) => {
        // 스킵알파벳을 제외한 알파벳 목록에서 현재 알파벳의 인덱스번호 찾기
        let findIdx = skipAlphabet.indexOf(el) + index;
        // 범위를 넘어갈 경우 앞에서 시작하기 위함
        return skipAlphabet[findIdx % skipAlphabet.length]
    })
    
    
    return result.join('');
}

console.log(solution("aukks", "wbqd", 5)); // "happy"
console.log(solution("ybcde", "az", 1)); // "bcdef"
