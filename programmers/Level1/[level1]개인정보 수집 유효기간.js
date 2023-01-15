// 개인정보 수집 유효기간
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/150370

// 문제풀이(1)
// today = 오늘 날짜
// terms = 약관의 유효기간을 담은 1차원 문자 배열
// privacies = 수집된 개인정보
function solution(today, terms, privacies) {
  let answer = [];
  let [todayYear, todayMonth, todayDay] = today.split(".");
  let termsObj = {};

  // terms 배열로 저장
  for (let i = 0; i < terms.length; i++) {
    let [code, num] = terms[i].split(" ");
    termsObj[code] = Number(num);
  }

  // 개인정보 유효기간 분리
  for (let i = 0; i < privacies.length; i++) {
    let [todaySplit, code] = privacies[i].split(" ");
    let [year, month, day] = todaySplit.split(".");

    let num = termsObj[code] * 28;

    let sum = 0;

    sum += (todayYear - year) * 12 * 28;
    sum += (todayMonth - month) * 28;
    sum += todayDay - day;

    if (num <= sum) {
      answer.push(i + 1);
    }
  }

  return answer;
}

console.log(
  solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"])
);
// [1, 3]

console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]
  )
);
// [1, 4, 5]
