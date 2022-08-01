// 폰켓몬
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/1845

// 문제풀이(1)
function solution(nums) {
  // 최대 가져갈 수 있는 포켓몬의 개수
  let n = nums.length/2;
  
  // 중복 포켓몬 제거
  const nums2 = [...new Set(nums)]

  // 최대 가져갈 수 있는 포켓몬 보다 중복을 제외한 포켓몬의 개수가 많다면
  // 최대 포켓몬 출력
  // 아니라면 중복 제거한 포켓몬의 수 출력
  return nums2.length > n ? n : nums2.length
}

console.log(solution([3,1,2,3]));   // 2
console.log(solution([3,3,3,2,2,4]));   // 3
console.log(solution([3,3,3,2,2,2]));   // 2