function getArrayLength(arr) {
  if (arr.length === 0) {
    return 0
  }
  return 1 + getArrayLength(arr.splice(1))
}

console.log(getArrayLength([1, 2, 3, 4, 5, 6])) //6
