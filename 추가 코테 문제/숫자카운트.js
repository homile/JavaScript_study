// 풀이(1)
function solution(s){

  let sList = s.split('');
  let obj = {};

  for (let i = 0; i < sList.length; i++){
    !(sList[i] in obj) ? obj[sList[i]] = 1 : obj[sList[i]] += 1
  }
  console.log(obj)

  // 카운트 한 객체에서 가장 큰 값 찾기
  let maxCount = Math.max(...Object.values(obj));

  let arr = [];
  for (let i in obj){
    if (maxCount === obj[i]){
      arr.push(i);
    }
  }

  return Math.min(...arr)
}

// 풀이(2)
function solution(s){

  let sList = s.split('');
  let obj = {};

  for (let i = 0; i < sList.length; i++){
    !(sList[i] in obj) ? obj[sList[i]] = 1 : obj[sList[i]] += 1
  }
  console.log(obj)

  // 카운트 한 객체에서 가장 큰 값 찾기
  let maxCount = Math.max(...Object.values(obj));

  for (const [key, value] of Object.entries(obj)){
    if (maxCount !== value){
      delete obj[key];
    }
  }

  return Math.min(...Object.keys(obj))
}

console.log(solution('104001100'));
console.log(solution('11104001100'));
console.log(solution('23211234123123123123'));