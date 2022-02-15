/* DFS */
function dfs(graph, v, visited) {
    // 현재 노드 방문
    visited[v] = true;
    // 방문 노드 출력
    console.log(v);
  
    // 인접 노드 탐색
    graph[v].forEach(i => {
      // 방문하지 않았다면
      if (!visited[i]) {
        // 재귀 호출
        dfs(graph, i, visited);
      }
    })
  }
  
  // 노드 연결 정보
  const graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
  ];
  
  // 방문 정보
  const visited = new Array(graph.length).fill(false);
  
  // 호출
  console.log(dfs(graph, 1, visited));



  
  /* BFS */
  function bfs(graph, v, visited) {
    // 큐 구현
    const queue = [v];
    // 현재 노드 방문
    visited[v] = true;
  
    // 큐가 빌 때까지 반복
    while (queue.length !== 0) {
      // 큐에서 원소 한 개 뽑아옴
      const node = queue.shift();
      // 방문
      console.log(node);
      
      // 원소의 인접 노드 탐색
      graph[node].forEach(i => {
        // 방문한 적이 없다면
        if (!visited[i]) {
          // 큐에 추가
          queue.push(i);
          // 방문 처리
          visited[i] = true;
        }
      })
    }
  }
  
  // 노드 연결 정보
  const graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
  ];
  
  // 방문 정보
  const visited = new Array(graph.length).fill(false);
  
  // 호출
  console.log(bfs(graph, 1, visited));