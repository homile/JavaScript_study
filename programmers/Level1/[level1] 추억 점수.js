// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/176963

// 문제풀이(1)
// 사진 속에 나오는 인물의 그리움 점수를 모두 합산한 값이 해당 사진의 추억 점수
// 그리워하는 사람의 이름을 담은 문자열 배열 name
// 각 사람별 그리움 점수를 담은 정수 배열 yearning
// 각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 photo

function solution(name, yearning, photo) {
  const answer = [];
  const nameToYearning = {};

  // name과 yearning에 맞게 객체로 할당
  name.forEach((name, idx) => (nameToYearning[name] = yearning[idx]));

  for (let i = 0; i < photo.length; i++) {
    // 통합 그리움 점수
    let yearningScore = 0;

    for (let j = 0; j < photo[i].length; j++) {
      // 개인 그리움 점수
      let photoScore = nameToYearning[photo[i][j]];

      if (photoScore) {
        yearningScore += photoScore;
      }
    }
    answer.push(yearningScore);
  }
  return answer;
}

// [19, 15, 6]
console.log(
  solution(
    ["may", "kein", "kain", "radi"][(5, 10, 1, 3)][
      (["may", "kein", "kain", "radi"], ["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"])
    ]
  )
);

// [67, 0, 55]
console.log(
  solution(
    ["kali", "mari", "don"][(11, 1, 55)][(["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"])]
  )
);

// [5, 15, 0]
console.log(
  solution(["may", "kein", "kain", "radi"][(5, 10, 1, 3)][(["may"], ["kein", "deny", "may"], ["kon", "coni"])])
);
