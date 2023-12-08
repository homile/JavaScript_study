// 나는야 포켓몬 마스터 이다솜
// https://www.acmicpc.net/problem/1620

// 문제풀이(1) - 실패(시간초과)
// 포켓몬 도감과 질문 목록 배열을 두개를 생성한뒤 질문 목록의 포켓몬, 번호를 포켓몬 도감에서 찾는다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
// const [N, M] = input.shift().split(" ").map(Number);

// const pokemonCollection = input.slice(0, N);
// const questionArr = input.slice(N);

// const answer = [];

// questionArr.forEach((question) => {
//   const convertQuestion = parseInt(question);

//   if (!isNaN(convertQuestion)) {
//     answer.push(pokemonCollection[convertQuestion - 1]);
//   } else {
//     answer.push(pokemonCollection.indexOf(question) + 1);
//   }
// });

// console.log(answer.join("\n"));

// 문제풀이(2)
// indexOf를 사용할 경우 모든 배열을 순회하기 때문에 시간초과가 나온 것 같다.
// indexOf를 제거하고 포켓몬 도감을 map에 추가하여 바로 확인할 수 있도록 한다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
// const [N, M] = input.shift().split(" ").map(Number);

// const pokemonCollectionMap = new Map();

// const pokemonCollection = input.slice(0, N);
// const questionArr = input.slice(N);

// const answer = [];

// for (let i = 0; i < pokemonCollection.length; i++) {
//   pokemonCollectionMap.set(pokemonCollection[i], i + 1);
// }

// questionArr.forEach((question) => {
//   const convertQuestion = parseInt(question);

//   if (!isNaN(convertQuestion)) {
//     answer.push(pokemonCollection[convertQuestion - 1]);
//   } else {
//     answer.push(pokemonCollectionMap.get(question));
//   }
// });

// console.log(answer.join("\n"));

// 문제풀이(3) - 리팩토링
// 1. Map에 할당하는 반복 루프를 for -> forEach로 변경함에 따라 실행시간 단축
// 메모리 54856kb -> 53020kb, 시간 336ms -> 320ms
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);

const pokemonCollectionMap = new Map();

const pokemonCollection = input.slice(0, N);
const questionArr = input.slice(N);

const answer = [];

pokemonCollection.forEach((pokemon, index) => {
  pokemonCollectionMap.set(pokemon, index + 1);
});

questionArr.forEach((question) => {
  const convertQuestion = parseInt(question);

  if (!isNaN(convertQuestion)) {
    answer.push(pokemonCollection[convertQuestion - 1]);
  } else {
    answer.push(pokemonCollectionMap.get(question));
  }
});

console.log(answer.join("\n"));

// 입력
// 26 5
// Bulbasaur
// Ivysaur
// Venusaur
// Charmander
// Charmeleon
// Charizard
// Squirtle
// Wartortle
// Blastoise
// Caterpie
// Metapod
// Butterfree
// Weedle
// Kakuna
// Beedrill
// Pidgey
// Pidgeotto
// Pidgeot
// Rattata
// Raticate
// Spearow
// Fearow
// Ekans
// Arbok
// Pikachu
// Raichu
// 25
// Raichu
// 3
// Pidgey
// Kakuna

// 출력
// Pikachu
// 26
// Venusaur
// 16
// 14
