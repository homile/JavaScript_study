// 스위치 켜고 끄기
// 링크: https://www.acmicpc.net/problem/1244

// 문제풀이(1)
// 4번째 부터 들어오는 입력 값은 학생성별, 학생이 받은수가 주어진다.
// 이때, 학생의 성별이 남성이라면 받은 수의 배수의 스위치의 상태를 바꾼다.
// 자기가 받은 수와 같은 번호가 붙은 스위치를 중심으로 좌우가 대칭이면서 가장 많은 스위치를 포함하는 구간을 찾아서,
// 그 구간에 속한 스위치의 상태를 모두 바꾼다. 이때 구간에 속한 스위치 개수는 항상 홀수가 된다.
// 위의 조건대로 풀어나가면 된다.
// 남학생의 경우는 자신이 주어진 번호의 배수에만 스위치를 변경하면 되지만
// 여학생의 경우 자신이 주어진 번호 + 주변번호까지 변경하는 로직을 구현하면 문제는 해결된다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const [N, switchs, studentsNum, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// const switchsArr = switchs.split(" ").map(Number);
// const studentTypeAndNumber = arr.map((student) => student.split(" ").map(Number));

// // 학생의 스위치 조작 함수
// const action = (type, number, switchsArr) => {
//   // 남학생 스위치 조작
//   if (type === 1) {
//     for (let i = 0; i < switchsArr.length; i++) {
//       if ((i + 1) % number === 0) {
//         switchsArr[i] = switchsArr[i] === 0 ? 1 : 0;
//       }
//     }
//   }

//   // 여학생 스위치 조작
//   if (type === 2) {
//     // 주어진 번호 스위치 변경
//     switchsArr[number - 1] = switchsArr[number - 1] === 0 ? 1 : 0;

//     for (let i = 1; i < switchsArr.length; i++) {
//       // 좌우가 비대칭일 경우 정지
//       if (switchsArr[number - 1 - i] !== switchsArr[number - 1 + i]) {
//         break;
//       } else {
//         let ChangeSwitchState = switchsArr[number - 1 - i] === 0 ? 1 : 0;
//         switchsArr[number - 1 - i] = ChangeSwitchState;
//         switchsArr[number - 1 + i] = ChangeSwitchState;
//       }
//     }
//   }
// };

// studentTypeAndNumber.forEach((value) => {
//   const [type, number] = value;
//   action(type, number, switchsArr);
// });

// const answer = [];

// while (switchsArr.length > 0) {
//   answer.push(switchsArr.splice(0, 20).join(" "));
// }

// console.log(answer.join("\n"));

// 문제풀이(2) - 리팩토링
// 1. 재사용성을 올리기 위해 남학생과 여학생의 스위치 조작 함수 분리 및 스위치 상태 변경 함수 추가
// 2. 변수명 직관적으로 변경
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, switchs, studentsNum, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const switchStateArray = switchs.split(" ").map(Number);
const studentTypeAndNumber = arr.map((student) => student.split(" ").map(Number));

// 스위치 변경 함수
const flipSwitch = (index, switchStateArray) => {
  switchStateArray[index] = switchStateArray[index] === 0 ? 1 : 0;
};

// 남학생 스우치 변경
const maleStudentAction = (number, switchStateArray) => {
  for (let i = 0; i < switchStateArray.length; i++) {
    if ((i + 1) % number === 0) {
      flipSwitch(i, switchStateArray);
    }
  }
};

// 여학생 스위치 변경
const femaleStudentAction = (number, switchStateArray) => {
  flipSwitch(number - 1, switchStateArray);

  for (let i = 1; i < switchStateArray.length; i++) {
    if (switchStateArray[number - 1 - i] !== switchStateArray[number - 1 + i]) {
      break;
    } else {
      flipSwitch(number - 1 - i, switchStateArray);
      flipSwitch(number - 1 + i, switchStateArray);
    }
  }
};

studentTypeAndNumber.forEach((value) => {
  const [type, number] = value;
  type === 1 ? maleStudentAction(number, switchStateArray) : femaleStudentAction(number, switchStateArray);
});

const answer = [];

while (switchStateArray.length > 0) {
  answer.push(switchStateArray.splice(0, 20).join(" "));
}

console.log(answer.join("\n"));

// 입력
// 8
// 0 1 0 1 0 0 0 1
// 2
// 1 3
// 2 3

// 출력
// 1 0 0 0 1 1 0 1
