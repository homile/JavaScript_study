// 카드뭉치
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/159994

// 문제풀이(1)
function solution(cards1, cards2, goal) {
  let one = 0;
  let two = 0;

  for (let i = 0; i < goal.length; i++) {
    if (cards1[one] === goal[i]) {
      one++;
      continue;
    }

    if (cards2[two] === goal[i]) {
      two++;
      continue;
    }

    return "No";
  }

  return "Yes";
}

console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]));
// 'Yes'

console.log(solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"]));
// 'No
