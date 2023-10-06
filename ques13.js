// Write a program to return inverse of an array

const arr = [1, 2, 3, 0];
const inverted_arr = [];
for (let i = 0; i < arr.length; i++) {
  inverted_arr[arr[i]] = i;
}
console.log(inverted_arr);
