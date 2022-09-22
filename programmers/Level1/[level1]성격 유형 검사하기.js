// 성격 유형 검사하기
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/118666

// 문제풀이(1)
function solution(survey, choices) {
  // 4개의 지표로 성격 유형 검사
  // 1번 지표 R, T
  // 2번 지표 C, F
  // 3번 지표 J, M
  // 4번 지표 A, N
  // 총 16가지의 경우의 수가 있다.

  // n개의 질문, 7개의 선택지
  // 네오형             어피치형
  // 3점 2점 1점 0점 1점 2점 3점

  // survey 지표
  // choices 선택

  // ex.N, C, N, T, A
  // [{N:1}, {C:1}, {M: 2}, {T:3}, {A:1}]
  //R:X, T:3
  //C:1, F:X
  //J:X, M:2
  //A:1, N:1  점수가 같을 경우 사전순으로 빠른 A

  let answer = "";

  let obj = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  for (let i = 0; i < survey.length; i++) {
    let score = Math.abs(choices[i] - 4);
    if (choices[i] < 4) {
      obj[survey[i][0]] += score;
    } else if (choices[i] > 4) {
      obj[survey[i][1]] += score;
    }
  }

  answer += obj["R"] >= obj["T"] ? "R" : "T";
  answer += obj["C"] >= obj["F"] ? "C" : "F";
  answer += obj["J"] >= obj["M"] ? "J" : "M";
  answer += obj["A"] >= obj["N"] ? "A" : "N";

  return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
// "TCMA"

console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));
// "RCJA"
