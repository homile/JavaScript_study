// 제로베이스 문제 숫자 뒤집기~!~!
function solution(num){
  if (num > 100000){ return 0}

  const numReverse = Number(String(Math.abs(num)).split('').reverse().join(''))
  if (num < 0){
    return Number(`-${numReverse}`)
  }else{
    return numReverse
  }

}

console.log(solution('-587'));    // -785
console.log(solution('430'));     // 34
console.log(solution('100001'));  // 0