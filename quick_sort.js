function quickSort (arr) {
  if (arr.length < 2) return arr;
  const pivot = arr[0];
  const less = arr.slice(1).filter(elem => elem <= pivot)
  const greater = arr.slice(1).filter(elem => elem > pivot)
  return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort([9, 34, 1, 8, 19, 2, 7, 3]))
