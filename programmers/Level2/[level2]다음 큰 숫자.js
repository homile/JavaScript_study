// 다음 큰 숫자
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12911?language=javascript

// 문제풀이(1)
function binaryChange(el){
  el = el.toString(2).split("").filter((el) => el === "1").length
  return el
}

function solution(n) {
  // n의 다음 큰숫자는 n보다 큰 자연수
  // n의 다음 큰숫자와 n은 2진수로 변환했을 때 1의 갯수가 같다.
  // n의 다음 큰 숫자는 조건 1,2를 만족하는 수 중 가장 작은 수
  let answer = 0;
  let binaryCount = binaryChange(n);

  while (true){
      n++;
      let change = binaryChange(n);
      if(binaryCount === change){
          answer = n;
          break;
      }
  }
  
  return answer;
}

console.log(solution(78));  // 83
console.log(solution(15));  // 23
