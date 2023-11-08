// 튜플
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/64065

// 1. 중복된 원소가 있을 수 있음.
// 2. 원소에 정해진 순서가 있으며, 원소의 순서가 다르면 서로 다른 튜플이다.
// 3. 튜플의 원소 개수는 유한한다.

// 문제풀이(1)
// {{, }}을 제거한뒤 },{ 마다 배열로 잘라준다.
// 객체에 각 튜플의 원소마다 카운트해준다.
// 듀플의 값을 기준으로 정렬한뒤 해당 객체의 키값만 추출하여 배열에 할당한뒤 반환한다.
function solution(s) {
  let answer = [];

  const regex = /{{|}}/g;

  const tuple = s.replaceAll(regex, "").split("},{");
  const obj = {};

  tuple.forEach((el) => {
    const arr = el.split(",");
    for (let i = 0; i < arr.length; i++) {
      obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }
  });

  const sortObj = [];

  for (let i in obj) {
    sortObj.push([i, obj[i]]);
  }

  sortObj.sort((a, b) => b[1] - a[1]);

  answer = sortObj.map((el) => Number(el[0]));

  return answer;
}

// 문제풀이(2)
// Object.entries 메서드 사용
function solution(s) {
  let answer = [];

  const regex = /{{|}}/g;

  const tuple = s.replaceAll(regex, "").split("},{");
  const obj = {};

  tuple.forEach((el) => {
    const arr = el.split(",");
    for (let i = 0; i < arr.length; i++) {
      obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }
  });

  answer = Object.entries(obj)
    .sort(([, a], [, b]) => b - a)
    .map((el) => Number(el[0]));

  return answer;
}

// "{{2},{2,1},{2,1,3},{2,1,3,4}}"	[2, 1, 3, 4]
// "{{1,2,3},{2,1},{1,2,4,3},{2}}"	[2, 1, 3, 4]
// "{{20,111},{111}}"	[111, 20]
// "{{123}}"	[123]
// "{{4,2,3},{3},{2,3,4,1},{2,3}}"	[3, 2, 4, 1]
