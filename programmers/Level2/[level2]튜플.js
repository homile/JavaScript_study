// 튜플
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/64065

// 문제풀이(1)
// 튜플 
// 1. 중복된 원소가 있을 수 있음.
// 2. 원소에 정해진 순서가 있으며, 원소의 순서가 다르면 서로 다른 튜플이다.
// 3. 튜플의 원소 개수는 유한한다.
function solution(s) {
  let answer = [];
  
  const regex =  /[{,]/gi;
  
  const tuple = s.replaceAll(regex,'').split('}').filter((el) => el !== '');
  const obj = {}
  console.log(tuple)
  
  tuple.forEach((el) => {
      for(let i = 0; i < el.length; i++){
          obj[el[i]] = (obj[el[i]] || 0) + 1
      }
      obj[el] = (obj[el] || 0) + 1
  })
  
  console.log(obj)
  
  return answer;
}