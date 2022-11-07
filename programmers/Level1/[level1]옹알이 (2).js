// 옹알이 (2)
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/133499

// 문제풀이(1) 55.0 / 100.0 실패
// 연속으로만 안되는 것이다....!
function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < words.length; j++) {
      babbling[i] = babbling[i].replace(words[j], "");
    }
  }

  return babbling.filter((el) => el === "").length;
}

// 문제풀이(2)
function solution(babbling) {
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    // 연속으로 나오는 옹알이 X로 변경
    babbling[i] = babbling[i].replace(/ayaaya|yeye|woowoo|mama/g, "X");
    // 단일 옹알이 제거
    babbling[i] = babbling[i].replace(/aya|ye|woo|ma/g, "");

    if (babbling[i] === "") {
      count++;
    }
  }

  return count;
}

console.log(solution(["aya", "yee", "u", "maa"])); // 1
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])); // 2
