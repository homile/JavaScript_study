// [1차] 캐시
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/17680?language=javascript

// 문제풀이(1)
// 지도에서 도시 이름을 검색하면 해당 도시와 관련된 맛집 게시물을 보여준다.
// 로직에 대한 성능 측정을 수행한다.
// 캐시크기 = cacheSize, 도시이름 배열 = cities
function solution(cacheSize, cities) {
  let answer = 0;

  const cache = [];

  // cacheSize에 담을 수 없을 경우 all miss
  if (cacheSize === 0) return cities.length * 5;

  for (let i = 0; i < cities.length; i++) {
    // 대소문자 구분없기 때문에 소문자로 치환
    let city = cities[i].toLowerCase();

    // 캐시에 현재 도시가 없을 경우
    if (!cache.includes(city)) {
      // miss = plus 5
      answer += 5;
      // 캐시가 정해진 사이즈 이상일 경우 맨 처음 도시 제거
      if (cache.length >= cacheSize) {
        cache.shift();
      }
    } else {
      // 캐시에 현재 도시가 있을 경우 현재 도시가 있는 인덱스 값 제거
      cache.splice(cache.indexOf(city), 1);
      // hit
      answer += 1;
    }
    // 캐시에 현재 도시 추가
    cache.push(city);
  }

  return answer;
}

console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));
// 50

console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]));
// 21
