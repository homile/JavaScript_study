// 숫자 문자열과 영단어
// 링크: https://programmers.co.kr/learn/courses/30/lessons/81301?language=javascript

// 문제풀이(1)
// 배열로도 풀 수 있다.
function solution(s) {
  let answer = '';
  
  // 속성 = 영단어, 속성 값 = 정수
  const obj = {zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5,
              six: 6, seven: 7, eight: 8, nine: 9};
  
  let words = s.split('');
  let word = '';
  for (let i of words){
      if (isNaN(i)){
          word += i;
          if (word in obj){
            answer += obj[word]
            word = '';
          }
      }else{
          answer += i;
      }
  }
  
  return Number(answer);
}


// 문제풀이(2)
function solution(s) {
  let answer = '';
  
  // 속성 = 영단어, 속성 값 = 정수
  const arr = ['zero', 'one','two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  
  let words = s.split('');
  let word = '';
  for (let i of words){
      if (isNaN(i)){
          word += i;
          if (arr.includes(word)){
            answer += arr.indexOf(word);
            word = '';
          }
      }else{
          answer += i;
      }
  }
  
  return Number(answer);
}


console.log(solution("one4seveneight"));      // 1478