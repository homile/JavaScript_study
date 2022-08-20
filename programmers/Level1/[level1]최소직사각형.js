// 최소직사각형
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/86491?language=javascript

// 문제풀이(1)
function solution(sizes) {
  let ver = 0;   // 세로
  let hor = 0;   // 가로

  for(let i = 0; i < sizes.length; i++){
    if (hor < Math.max(...sizes[i])) {
      hor = Math.max(...sizes[i])
    }
    if(ver < Math.min(...sizes[i])){
      ver = Math.min(...sizes[i])
    }
  }

  return hor * ver
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));  // 4000
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]));  // 120
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]));  // 133