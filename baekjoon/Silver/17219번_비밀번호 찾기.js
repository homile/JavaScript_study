// 비밀번호 찾기
// 링크: https://www.acmicpc.net/problem/17219

// 문제풀이(1)
// 주소와 비밀번호가 매칭돠어 있는 N중에서 M에 속한 주소의 비밀번호를 찾아내면 되는 문제이다.
// map에 주소와 비밀번호를 매칭해서 저장한다음 M배열에서 찾아내면 될 것이다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// const [N, M] = input.shift().split(" ").map(Number);

// const addreesAndPassword = input.slice(0, N);
// const address = input.slice(N);

// const map = new Map();

// const answer = [];

// for (let i = 0; i < N; i++) {
//   const [address, password] = addreesAndPassword[i].split(" ");
//   map.set(address, password);
// }

// for (let i = 0; i < M; i++) {
//   answer.push(map.get(address[i]));
// }

// console.log(answer.join("\n"));

// 문제풀이(2) - 리팩토링
// 변수명 수정
// 비밀번호 찾는 로직 함수로 변경
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const addressesAndPassword = input.slice(0, N);
const addresses = input.slice(N);

const map = new Map();

const answer = [];

for (let i = 0; i < N; i++) {
  const [address, password] = addressesAndPassword[i].split(" ");
  map.set(address, password);
}

const getPassword = (address) => {
  return map.get(address);
};

for (const address of addresses) {
  answer.push(getPassword(address));
}

console.log(answer.join("\n"));

// 입력
// 16 4
// noj.am IU
// acmicpc.net UAENA
// startlink.io THEKINGOD
// google.com ZEZE
// nate.com VOICEMAIL
// naver.com REDQUEEN
// daum.net MODERNTIMES
// utube.com BLACKOUT
// zum.com LASTFANTASY
// dreamwiz.com RAINDROP
// hanyang.ac.kr SOMEDAY
// dhlottery.co.kr BOO
// duksoo.hs.kr HAVANA
// hanyang-u.ms.kr OBLIVIATE
// yd.es.kr LOVEATTACK
// mcc.hanyang.ac.kr ADREAMER
// startlink.io
// acmicpc.net
// noj.am
// mcc.hanyang.ac.kr

// 출력
// THEKINGOD
// UAENA
// IU
// ADREAMER
