const findSmallestIndex = (array) => {
  let smallestElement = array[0]; //для хранения наименьшего значения
  let smallestIndex = 0; // для хранения индекса наименьшего значения

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

const selectionSort = (array) => {
  const sortingArray = [...array];
  const sortedArray = [];
  const length = sortingArray.length;

  for (let i = 0; i < length; i++) {
    const smallestIndex = findSmallestIndex(sortingArray); // находит наименьший элемент в массиве 
    sortedArray.push(sortingArray.splice(smallestIndex, 1)[0]); // добавляет в новый массмв
  }

  return sortedArray;
};

const array = [5, 3, 6, 2, 10];
console.log(selectionSort(array)); // [2, 3, 5, 6, 10]
