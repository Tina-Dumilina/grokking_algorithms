function findBiggestNumber(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] < arr[1]
    ? findBiggestNumber(arr.splice(1))
    : findBiggestNumber([arr[0]].concat(arr.splice(2)));
}

console.log(findBiggestNumber([-1, 9, 1, 10, 5, 8, 2, 3])); // 10
