/* [level2]H-Index

링크: https://programmers.co.kr/learn/courses/30/lessons/42747

[문제 설명]
H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 
어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, 
H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 
나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 
이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

[제한사항]
과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

[문제접근]
H-Indx는 내림차순으로 정렬하여 인용된 출판물을 찾는 것이다.
sort((a,b) => b-a); 
내림차순으로 정렬한 값을 인덱스번호+1보다 크거나 같다면 
인용되었다고 판단하여 count 해준다. 
*/

// 문제풀이(1)
function solution(citations) {
    var answer = 0;
    let cnt = 0;
    citations.sort((a, b) => b-a);

    for (let i = 0; i < citations.length; i++){
        if (citations[i] >= i+1){
            cnt += 1;
        }
    }
    answer = cnt;
    return answer;
}

console.log(solution([3,0,6,1,5]));     // 3