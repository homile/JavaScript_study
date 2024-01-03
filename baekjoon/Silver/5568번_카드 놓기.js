// 카드 놓기
// 링크: https://www.acmicpc.net/problem/5568

// 문제풀이(1)
// n개의 카드중에서 k개의 카드만 나열하여 만들 수 있는 중복이 제거된 정수들의 수를 구하는 순열, 조합 문제이다.
// 중복을 제거하기 위해 set을 사용한다.
// dfs로 탐색한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, k, ...cards] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

const combinations = new Set();
const selectedCards = [];
const visitedCards = new Array(n).fill(false);

findDistinctCombinations(selectedCards, visitedCards);

console.log(combinations.size);

function findDistinctCombinations(selected, visited) {
  // 선택된 카드의 개수가 k랑 같을 경우 조합에 추가
  if (selected.length === k) {
    combinations.add(selected.join(""));
    return;
  }

  for (let i = 0; i < cards.length; i++) {
    // 선택되지 않은 카드들의 조합을 찾기위함
    if (!visited[i]) {
      visited[i] = true;
      selected.push(cards[i]); // 선택된 카드에 추가
      findDistinctCombinations(selected, visited); // 재귀
      visited[i] = false;
      selected.pop();
    }
  }
}

// 입력
// 4
// 2
// 1
// 2
// 12
// 1

// 출력
// 7
