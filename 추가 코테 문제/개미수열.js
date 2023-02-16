let input = 5;

const antSequence = (nums) => {
  let result = "1";
  for (let i = 2; i <= nums; i++) {
    let newResult = "";
    let checkedNum = result[0];
    let checkedCount = 1;
    for (let j = 1; j < result.length; j++) {
      if (checkedNum !== result[j]) {
        newResult += checkedCount + checkedNum;
        checkedNum = result[j];
        checkedCount = 1;
      } else {
        checkedCount++;
      }
    }
    newResult += checkedCount + checkedNum;
    result = newResult;
  }
  return result;
};

console.log(antSequence(input));
