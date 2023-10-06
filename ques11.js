// Write a program to sort an array (bubble sort)
let isSorted = true;
const bubbleSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        isSorted = false;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (isSorted) break;
  }
};
const arr = [9, 8, 7, 6, 5, 4];
bubbleSort(arr);
console.log(arr);
