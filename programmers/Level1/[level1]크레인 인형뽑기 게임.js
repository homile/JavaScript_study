// 크레인 인형뽑기 게임
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/64061

// 문제풀이(1)    // 테스트케이스 1,2번 x
function solution(board, moves) {
  let count = 0;
  const stack = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        stack.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
    if (stack[stack.length - 2] === stack[stack.length - 1]) {
      stack.pop();
      stack.pop();
      count += 2;
    }
  }

  return count;
}

// 문제풀이(2)
function solution(board, moves) {
  let count = 0;
  const stack = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        if(stack[stack.length-1] === board[j][moves[i] - 1]){
          stack.pop();
          count +=2;
        }else{
          stack.push(board[j][moves[i] - 1]);
        }
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }

  return count;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); // 4
