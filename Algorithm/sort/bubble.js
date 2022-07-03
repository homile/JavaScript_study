function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

bubble([5, 3, 4, 1, 2]);

// 1회차 정렬: [5, 3, 4, 1, 2] → [3, 5, 4, 1, 2] → [3, 4, 5, 1, 2] → [3, 4, 1, 5, 2] → [3, 4, 1, 2, 5]

// 2회차 정렬: [3, 4, 1, 2, 5] → [3, 4, 1, 2, 5] → [3, 1, 4, 2, 5] → [3, 1, 2, 4, 5]

// 3회차 정렬: [3, 1, 2, 4, 5] → [1, 3, 2, 4, 5] → [1, 2, 3, 4, 5]


// 순서 바꾸는 방법
// 방법 1
function swap(arr, idx1, idx2){
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// 방법 2 
const swap = (arr, idx1, idx2) => {
[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
