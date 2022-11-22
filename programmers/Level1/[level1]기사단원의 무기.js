// 기사단원의 무기
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/136798

// 문제풀이(1) 82ms
// 기사 단원의 수 = number
// 공격력의 제한수치 = limit
// 제한 수치를 넘는 무기의 공격력 = power
// 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기 구매

// 약수 개수 구하는 함수
function divisors(num, limit, power) {
  let count = 0;

  // 일반적으로 for문을 다돌리면 시간초과남 num / 2해봤지만 8000ms가 나옴
  // sqrt로 제곱근만큼만 돌리면 해결
  for (let i = 1; i <= Math.sqrt(num); i++) {
    // 약수인지 확인
    if (num % i === 0) {
      count++;
      // 약수의 짝이 있는지 확인 (아래가 예시)
      // 100 / 1 = 100
      // 100 / 2 = 50
      // 100 / 4 = 25
      // 100 / 5 = 20
      // 100 / 10 = 10
      if (num / i !== i) count++;
    }
  }

  return count > limit ? power : count;
}

function solution(number, limit, power) {
  let arr = [];

  for (let i = 1; i <= number; i++) {
    arr.push(divisors(i, limit, power));
  }

  return arr.reduce((prev, curr) => prev + curr, 0);
}


// 문제풀이(2) 76ms
function divisors(num) {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      count++;
      if (num / i !== i) count++;
    }
  }

  return count;
}

function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
      let cnt = divisors(i)
      answer += cnt > limit ? power : cnt;
  }

  return answer;
}

console.log(solution(5, 3, 2)); // 10
console.log(solution(10, 3, 2)); // 21
