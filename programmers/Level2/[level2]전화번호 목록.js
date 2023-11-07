// 전화번호 목록
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42577

// 문제풀이(1) 실패
// 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 함
// 구조대 : 119
// 박준영 : 97 674 223
// 지영석 : 11 9552 4421

// 맨 앞에 있는 번호의 길이 만큼 다음 번호를 잘라서 같은지 비교한다.

// 실패 원인 분석
// 1. 맨 앞에 있는 번호만 접두어가 될 수 있을 거라 판단했다.
// 2. 정렬을 하지 않아서 뒤에 다음 번호가 현재 번호의 길이보다 작아 접두어가 될 수 없었다.
function solution(phone_book) {
  let answer = true;

  const first_number = phone_book[0];

  for (let i = 1; i < phone_book.length; i++) {
    let next_number = phone_book[i].slice(0, first_number.length);

    if (first_number === next_number) return false;
  }

  return answer;
}

// 문제풀이(2) 실패(시간초과)
// 시간초과... 효율성 테스트 3,4번 실패
// 맨 앞의 번호만 접두어가 될 수 있는 것이 아니다.
// 두 번째 이후의 번호도 접두어가 될 수 있다.
// 전화번호가 담긴 배열을 정렬한 뒤 비교한다.

// 실패 원인 분석
// 1. 2중 for문을 순회하기 때문에 시간복잡도가 O(n^2)으로 단일 for문 O(n)보다 느린것을 해결한다.
function solution(phone_book) {
  let answer = true;

  phone_book.sort();

  for (let i = 0; i < phone_book.length; i++) {
    const prev_number = phone_book[i];

    for (let j = i + 1; j < phone_book.length; j++) {
      let next_number = phone_book[j].slice(0, prev_number.length);

      if (prev_number === next_number) return false;
    }
  }

  return answer;
}

// 문제풀이(3)
// 2중 for문을 제거한다.
function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    let prev_number = phone_book[i];
    let next_number = phone_book[i + 1].slice(0, prev_number.length);

    if (prev_number === next_number) return false;
  }

  return true;
}

// ["119", "97674223", "1195524421"]	false
// ["123","456","789"]	true
// ["12","123","1235","567","88"]	false
