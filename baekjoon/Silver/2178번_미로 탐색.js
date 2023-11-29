// 미로탐색
// 링크: https://www.acmicpc.net/problem/2178

// [문제접근]
/*
  문제를 봤을 때 최소의 경로를 구하는 문제이기 때문에 BFS, DFS를 생각해볼 수 있다.
  1은 이동할 수 있는 칸
  0은 이동할 수 없는 칸
  (1, 1) 출발하여 (N, M)의 위치로 이동할 때 지나야 하는 최소의 칸수 구하는 문제
 */

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const maze = input.map((block) => block.split("").map(Number));

function BFS(x, y) {
  // 큐 구현
  const queue = [[x, y]];
  // 방문 정보
  const visited = [...Array(N)].map((e) => Array(M).fill(0));

  // 현재 노드 방문
  visited[x][y] = 1;

  // 상하좌우 판별
  const ds = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  // 큐가 빌 때까지 반복
  while (queue.length) {
    // // 큐에서 x와 y 추출
    const [nX, nY] = queue.shift();

    // // 현재 노드가 0일 경우 패스
    if (!maze[nX][nY]) continue;
    // 방문 처리
    maze[nX][nY] = 0;

    for (let i = 0; i < 4; i++) {
      const posX = nX + ds[i][0];
      const posY = nY + ds[i][1];

      if (posX < 0 || posY < 0 || posX >= N || posY >= M) continue;
      if (maze[posX][posY]) {
        queue.push([posX, posY]);
        visited[posX][posY] = visited[nX][nY] + 1;
      }
    }
  }

  return visited[N - 1][M - 1];
}

// 호출
console.log(BFS(0, 0));

// 다른 사람풀이(1)
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// const ds = [
//   [-1, 0],
//   [1, 0],
//   [0, 1],
//   [0, -1],
// ];
// const [N, M] = input.shift().split(" ").map(Number);
// const visit = [...Array(N)].map((e) => Array(M).fill(0));
// const graph = [];
// for (let i = 0; i < N; i++) {
//   graph.push([...input[i].replace(/\r/g, "").split("").map(Number)]);
// }

// const queue = [[0, 0]];
// visit[0][0] = 1;
// while (queue.length) {
//   const [x, y] = queue.shift();
//   if (!graph[x][y]) continue;
//   graph[x][y] = 0; // 방문 처리
//   for (let i = 0; i < 4; i++) {
//     const xPos = x + ds[i][0];
//     const yPos = y + ds[i][1];

//     if (xPos < 0 || yPos < 0 || xPos >= N || yPos >= M) continue;
//     if (graph[xPos][yPos]) {
//       queue.push([xPos, yPos]);
//       visit[xPos][yPos] = visit[x][y] + 1;
//     }
//   }
// }

// console.log(visit[N - 1][M - 1]);
