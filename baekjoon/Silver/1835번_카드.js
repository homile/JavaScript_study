// 카드
// Link: https://www.acmicpc.net/problem/1835

// solution(1)
// 문제에 나와있는 방식을 반대로 진행하면 초기 카드의 세팅값을 찾을 수 있다.
// 1. N 번 카드가 있다. (N = 4)
// 2. N - 1, N번의 카드가 있다. 가장 뒤에 있는 카드를 가장 앞으로 옮긴다.(N회 반복)
//    [3, 4] -> [4, 3] -> [3, 4] -> [4, 3]
// 3. [4, 3]의 카드 배열에 N - 2를 맨 앞에 추가한다. 가장 뒤에 있는 카드를 가장 앞으로 옮긴다.(N - 1회 반복)
//    [2, 4, 3] -> [3, 2, 4] -> [4, 3, 2]
// 4. [4, 3, 2]의 카드 배열에 N - 3을 맨 앞에 추가한다. 가장 뒤에 있는 카드를 가장 앞으로 옮긴다.(N - 2회 반복)
//    [1, 4, 3, 2] -> [2, 1, 4, 3]
// 5. 마지막으로 추가된 배열[2, 1, 4, 3]을 출력한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = Number(require("fs").readFileSync(filePath).toString().trim());

// N번 카드 추가
const arr = [N];

// N - 1부터 1까지 반복
for (let i = N - 1; i > 0; i--) {
  // i번째 값을 배열의 첫번째에 추가한다.
  arr.unshift(i);

  // i번 만큼 순회한다.
  for (let j = 0; j < i; j++) {
    // 마지막 카드를 추출한다.
    const lastCard = arr.pop();
    // 마지막 카드를 맨앞으로 옮긴다.
    arr.unshift(lastCard);
  }
}

console.log(arr.join(" "));

// input
// 4

// output
// 2 1 4 3
