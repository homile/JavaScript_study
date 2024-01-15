// N과 M (1)
// 링크: https://www.acmicpc.net/problem/15649

// 문제풀이(1)
// 자신과 같거나 방문했던 노드는 선택하지 않는 점에서 DFS로 풀어야 한다고 생각했다.
// 찾아보니 이와 같은 문제를 백트래킹 문제라고 한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, M] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

let result = "";
const answer = [];
const visited = new Array(N).fill(false);

const dfs = (count) => {
  if (count === M) {
    return (result += `${answer.join(" ")}\n`);
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      answer.push(i + 1);
      dfs(count + 1);
      answer.pop();
      visited[i] = false;
    }
  }
};

dfs(0);

console.log(result.trim());

// input
// 3 1

// output
// 1
// 2
// 3
