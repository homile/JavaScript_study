// 비밀지도
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/17681?language=javascript

// 문제풀이(1)
function solution(n, arr1, arr2) {
  // 10진수의 수를 2진수로 변환 후
  // 1일 경우 # 0일경우 공백으로 넣는다.
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = arr1[i].toString(2);
    arr2[i] = arr2[i].toString(2);
    while (arr1[i].length < n) {
      arr1[i] = "0" + arr1[i];
    }

    while (arr2[i].length < n) {
      arr2[i] = "0" + arr2[i];
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      if (arr1[i][j] === "1" || arr2[i][j] === "1") {
        answer[i] === undefined ? (answer[i] = "#") : (answer[i] += "#");
      } else {
        answer[i] === undefined ? (answer[i] = " ") : (answer[i] += " ");
      }
    }
  }

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
// ["#####","# # #", "### #", "# ##", "#####"]
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
// ["######", "### #", "## ##", " #### ", " #####", "### # "]