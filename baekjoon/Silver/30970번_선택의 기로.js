// 선택의 기로
// Link: https://www.acmicpc.net/problem/30970

// solution(1)
// 1. 촉석루 미니어처 중 품질이 가장 높은 미니어처를 가져온다.
// 2. 여러개일 경우 가격이 가장 낮은 것을 가져온다.
// 3. 1-2를 1번더 반복한다.
// 4. 촉석루 미니어처 중 가격이 가장 낮은 미니어처를 가져온다.
// 5. 여러개일 경우 품질이 가장 높은 것을 가져온다.
// 6. 4-5를 1번더 반복한다.

// 1-3번을 반복했을 때의 결과를 추출하고, 4-6번을 반복한 결과를 추출한다.
// 첫번째 output으로 1-3번을 반복했을 경우의 상위 2순위를 출력하고,
// 두번째 output으로 4-6번을 반복했을 경우의 상위 2순위를 출력한다.
// 정렬 문제기때문에 sort에 조건을 정확하게 달아주는 것이 중요하다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const miniatures = input.map((el) => el.split(" ").map(Number));

// 품질을 기준으로 내림차순, 가격 오름차순 정렬
const sortByQualityThenPrice = (a, b) => {
  if (a[0] !== b[0]) return b[0] - a[0];
  return a[1] - b[1];
};

// 가격을 기준으로 오름차순, 품질 내림차순 정렬
const sortByPriceThenQuality = (a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  return b[0] - a[0];
};

// 결과 출력 함수
const printTopTwo = (arr) => {
  console.log(
    arr
      .slice(0, 2)
      .map((item) => item.join(" "))
      .join(" ")
  );
};

// 첫 번째 정렬 및 출력
miniatures.sort(sortByQualityThenPrice);
printTopTwo(miniatures);

// 두 번째 정렬 및 출력
miniatures.sort(sortByPriceThenQuality);
printTopTwo(miniatures);

// input
// 4
// 3 1
// 2 2
// 2 3
// 1 1

// output
// 3 1 2 2
// 3 1 1 1
