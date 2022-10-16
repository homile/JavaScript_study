// 숫자 짝궁
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/131128

// 문제풀이(1)
function solution(X, Y) {
  // x, y의 임의의 자리에서 (일의 자리수)가 같은게 있다면 내림차순으로
  // 없다면 -1
  // 한자릿수는 비교했지만 두자릿수 이상은 비교하지 못함.
  let answer = "";

  for (let i = 0; i < X.length; i++) {
    for (let j = 0; j < Y.length; j++) {
      if (answer.includes(X[i]) === false) {
        if (X[i] === Y[j]) {
          answer += X[i];
          break;
        }
      } else {
        break;
      }
    }
  }

  return answer === "" ? "-1" : [...answer].sort((a, b) => b - a).join("");
}

// 문제풀이(2)
// 시간초과
function solution(X, Y) {
  X = X.split("");
  Y = Y.split("");
  let answer = [];
  for (let i = 0; i < X.length; i++) {
    for (let j = 0; j < Y.length; j++) {
      if (X[i] === Y[j]) {
        answer.push(X[i]);
        X.splice(i, 1);
        Y.splice(j, 1);
        i--;
        j--;
        break;
      }
    }
  }

  return answer === "" ? "-1" : [...answer].sort((a, b) => b - a).join("");
}

// 문제풀이(3)
function solution(X, Y) {
  let answer = "";

  X = X.split("");
  Y = Y.split("");

  for (let i = 0; i < 10; i++) {
    const X_cnt = X.filter((el) => +el === i).length;
    const Y_cnt = Y.filter((el) => +el === i).length;
    answer += i.toString().repeat(Math.min(X_cnt, Y_cnt));
  }

  if (answer === "") {
    return "-1";
  } else if (answer.match(/[^0]/g) === null) {
    return "0";
  } else {
    return [...answer].sort().reverse().join("");
  }
}

console.log(solution("100", "2345")); // "-1"
console.log(solution("100", "203045")); // "0"
console.log(solution("100", "123450")); // "10"
console.log(solution("12321", "42531")); // "321"
console.log(solution("5525", "1255")); // "552"
