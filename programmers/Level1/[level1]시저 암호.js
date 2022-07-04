// 시저 암호
// 링크: https://programmers.co.kr/learn/courses/30/lessons/12926?language=javascript

// 문제풀이(1)
function solution(s, n) {
  s = s.split('');
  
  for(let i = 0; i < s.length; i++){
      let ascii = s[i].charCodeAt();
      // 대문자
      if(ascii >= 65 && ascii <= 90){
          if (ascii + n > 90){
              ascii = ascii - 26;
          }
          s[i] = String.fromCharCode(ascii + n);
      }
      
      // 소문자
      if(ascii >= 97 && ascii <= 122){
          if (ascii + n > 122){
              ascii = ascii - 26;
          }
          s[i] = String.fromCharCode(ascii + n);
      }
  }
  
  return s.join('');
}

console.log(solution("AB", 1));   // "BC"
console.log(solution("z", 1));   // "a"
console.log(solution("a B z", 4));   // "e F d"