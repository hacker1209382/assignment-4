// Write a program to display intersection of two array
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
let arr3 = [];
let till = arr1.length > arr2.length ? arr1.length : arr2.length;
for (let i = 0; i < till; i++) {
  if (arr1.indexOf(arr2[i]) === -1) continue;
  else arr3.push(arr2[i]);
}
console.log(arr3);
