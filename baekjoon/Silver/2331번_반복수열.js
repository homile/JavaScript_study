// 반복수열
// 링크: https://www.acmicpc.net/problem/2331

// 문제풀이(1)
// 주어진 수 A부터 한자리수씩 A^P로 계산하여 더한 값을 배열에 추가한 뒤 배열에 한번이라도 나왔던 수라면 반복을 정지한다.
// [57, 74(=5^2+7^2=25+49), 65(=7^2+4^2=49+16), 61, 37, 58, 89, 145, 42, 20, 4, 16, 37]

// 그 후 한번이라도 나왔던 수가 몇번째 인덱스에 추가되었는지 확인하면 반복수열을 제거했을 때 남는 수열의 개수를 구할 수 있다.
// 57, 74, 65, 61, 37, 58, 89, 145, 42, 20, 4, 16, 37 일 경우 37이 두번등장 하기 때문에 그 사이는 반복수열이다.
// 반복수열을 제거하면 57, 74, 65, 61 이므로 4개가 남는데 이때, 37이 처음으로 나온 index값은 4이므로 4를 출력하면 반복수열을 제외한 나머지 수열의 개수를 알 수 있다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [A, P] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

const arr = [A];

const answer = [];

while (true) {
  const prevNum = String(arr.at(-1));
  const nextNum = prevNum.split("").reduce((acc, cur) => acc + Number(cur) ** P, 0);

  if (arr.includes(nextNum)) {
    console.log(arr.indexOf(nextNum));
    break;
  }

  arr.push(nextNum);
}

// 입력
// 57 2

// 출력
// 4
