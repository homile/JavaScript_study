// 다트게임
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/17682

// 문제풀이(1)
function solution(dartResult) {
  let num = "";
  const score = [];

  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      num += dartResult[i];
    } else if (dartResult[i] === "S") {
      score.push(Number(num) ** 1);
      num = "";
    } else if (dartResult[i] === "D") {
      score.push(Number(num) ** 2);
      num = "";
    } else if (dartResult[i] === "T") {
      score.push(Number(num) ** 3);
      num = "";
    } else if (dartResult[i] === "*") {
      score[score.length - 1] *= 2;
      if (score.length > 1) {
        score[score.length - 2] *= 2;
      }
    } else {
      score[score.length - 1] *= -1;
    }
  }

  return score.reduce((a, b) => a + b);
}

console.log(solution("1S2D*3T", 37));
console.log(solution("1D2S#10S", 9));
console.log(solution("1D2S0T", 3));
console.log(solution("1S*2T*3S", 23));
console.log(solution("1D#2S*3S", 5));
console.log(solution("1T2D3D#", -4));
console.log(solution("1D2S3T*", 59));
