// 이상한 문자 만들기
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12930?language=javascript

// 문제풀이(1)
function solution(s) {
  s = s.split(' ');
  
  for (let i = 0; i < s.length; i++){
      let word = '';
      for (let j = 0; j < s[i].length; j++){
          if (j % 2 === 0){
              word += s[i][j].toUpperCase()
          }else{
              word += s[i][j].toLowerCase()
          }
      }
      s[i] = word
  }
  
  return s.join(' ');
}

console.log(solution("try hello world"));   // "TrY HeLlO WoRlD"