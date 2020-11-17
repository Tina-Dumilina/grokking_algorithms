const binarySearch = (array, target) => {
  let low = 0; //the beginning of the search range
  let high = array.length - 1; //the end of the search range
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2); //get the middle elements in the array
    let guess = array[mid]
    if (guess === target) {
      return mid;
    } else if (guess > target) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return null;
}

console.log(binarySearch([1, 2, 3, 4, 5], 1)) // 0
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // null
