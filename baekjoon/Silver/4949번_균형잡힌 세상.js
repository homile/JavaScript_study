// 균형잡힌 세상
// 링크: https://www.acmicpc.net/problem/4949

// 문제풀이(1)
// 올바른 괄호 찾는 문제이다.
// 마지막은 온점으로 끝이난다.
// 1. 열리는 괄호를 배열에 쌓고, 닫히는 괄호가 나올때 열리는 괄호의 짝과 같은지 확인한다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// // 올바른 괄호 체크 함수
// const bracketsCheck = (arr) => {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     const text = arr[i];
//     const openBracketArr = [];
//     let isCheck = true;

//     // 마지막에 .이 나올경우 종료
//     if (text === ".") break;

//     for (let j = 0; j < text.length; j++) {
//       let str = text[j];
//       if (["(", "["].includes(str)) {
//         openBracketArr.push(str);
//       } else if (str === ")") {
//         if (openBracketArr.at(-1) === "(") {
//           openBracketArr.pop();
//         } else {
//           isCheck = false;
//           break;
//         }
//       } else if (str === "]") {
//         if (openBracketArr.at(-1) === "[") {
//           openBracketArr.pop();
//         } else {
//           isCheck = false;
//           break;
//         }
//       } else if (str === ".") {
//         break;
//       }
//     }

//     if (openBracketArr.length || !isCheck) {
//       result.push("no");
//     } else {
//       result.push("yes");
//     }
//   }

//   return result;
// };

// console.log(bracketsCheck(input).join("\n"));

// 문제풀이(2)
// 1. 가독성을 위해 함수명 변경
// 2. 각 배열 요소에 대해 동일한 로직을 적용하기 때문에 for 대신 map 메서드를 사용.
// 3. 중첩된 for 제거
// 4. pop 한 결과를 변수에 할당하여 가독성 향상
// 5. 각 문자열을 처리하는 경우 .은 필요없음. (만일 문자열 내 .이 많다면 해당 부분 추가)
// 6. 괄호 비교하는 if 문 수정
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const checkBrackets = (arr) => {
  const result = arr.map((input) => {
    if (input === ".") return;
    const stack = [];
    for (const char of input) {
      if (char === "(" || char === "[") {
        stack.push(char);
      } else if (char === ")" || char === "]") {
        if (stack.length === 0) return "no";
        const lastBracket = stack.pop();
        if ((lastBracket === "(" && char !== ")") || (lastBracket === "[" && char !== "]")) {
          return "no";
        }
      }
    }
    return stack.length > 0 ? "no" : "yes";
  });

  return result;
};

console.log(checkBrackets(input).join("\n"));

// 입력
// So when I die (the [first] I will see in (heaven) is a score list).
// [ first in ] ( first out ).
// Half Moon tonight (At least it is better than no Moon at all].
// A rope may form )( a trail in a maze.
// Help( I[m being held prisoner in a fortune cookie factory)].
// ([ (([( [ ] ) ( ) (( ))] )) ]).
//  .
// .

// 출력
// yes
// yes
// no
// no
// no
// yes
// yes
