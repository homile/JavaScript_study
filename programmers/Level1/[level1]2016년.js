// 2016년
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12901

// 문제풀이(1)
function solution(a, b) {
  let date = new Date(2016, a-1, b).toString().split(' ');
  return date[0].toUpperCase();
}

console.log(solution(5 ,24)); // "TUE"