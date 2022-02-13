/*  행렬의 덧셈

링크: https://programmers.co.kr/learn/courses/30/lessons/12950

[문제 설명]
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 
같은 열의 값을 서로 더한 결과가 됩니다. 
2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, 
solution을 완성해주세요.

[제한 조건]
행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

[문제접근]
2차원 배열로 for문을 2개를 돌린다.
arr1[i][j] + arr2[i][j]
*/

// 문제풀이(1)
function solution(arr1, arr2) {
    var answer = [];

    for(let i = 0; i<arr1.length; i++){
        let temp = [];
        for(let j = 0; j<arr1[0].length; j++){
            temp.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(temp);
    }

    return answer;
}

console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]));    // [[4,6],[7,9]]
console.log(solution([[1],[2]], [[3],[4]]));            // [[4],[6]]


// 다른 사람의 풀이(1)
function sumMatrix(A,B){
    return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}

console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]));    // [[4,6],[7,9]]
console.log(solution([[1],[2]], [[3],[4]]));            // [[4],[6]]