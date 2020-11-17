function sum (arr) {
  if (arr.length === 0) {
    return 0
  }
  return arr[0] + sum(arr.splice(1))
}

console.log(sum([1, 2, 3, 4, 5])) // 15
console.log(sum([1, 2, 3, 4, 5, 10])) //25
