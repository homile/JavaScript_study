// 신규 아이디 추천
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/72410?language=javascript

// 문제풀이(1)
function solution(new_id) {
  // 1단계
  new_id = new_id.toLowerCase();
  
  // 2단계
  new_id = new_id.replace(/[^a-z0-9-_.]/g, '');
  
  // 3단계
  while(new_id.includes('..')){
      new_id = new_id.replace('..', '.');
  }
  
  // 4단계
  new_id = new_id.replace(/^\.|\.$/, '');
  
  // 5단계
  if(new_id === "")  new_id += "a";
  
  // 6단계
  if (new_id.length >= 16) new_id = new_id.slice(0, 15);
  new_id = new_id.replace(/\.$/, '');
  
  // 7단계
  while(new_id.length <=2){
      new_id += new_id[new_id.length-1];
  }
  
  return new_id;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));    // "bat.y.abcdefghi"
console.log(solution(	"z-+.^."));    // 	"z--"
console.log(solution("=.="));    // 	"aaa"
console.log(solution("123_.def"));    // 	"123_.def"
console.log(solution("abcdefghijklmn.p"));    // "abcdefghijklmn"