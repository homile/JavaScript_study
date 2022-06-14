// 핸드폰 번호 가리기
// 링크: https://programmers.co.kr/learn/courses/30/lessons/12948?language=javascript

// 문제풀이(1)
function solution(phone_number) {
    
  pLen = phone_number.length-4
  
  return '*'.repeat(pLen) + phone_number.slice(pLen)
}

// 문제풀이(2)
// 정규표현식 사용
function solution(phone_number) {
    
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}

console.log(solution("01033334444"))    // "*******4444"
console.log(solution("027778888"))      // "*****8888"