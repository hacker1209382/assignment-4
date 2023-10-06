// Write a program to reverse an array

const arr = [1, 2, 3, 4, 5];
const len = arr.length;
for (let i = 0; i < len / 2; i++) {
  // 1st Approach
  let temp = arr[i];
  arr[i] = arr[len - 1 - i];
  arr[len - 1 - i] = temp;
  // 2nd Approach
  // [arr[i],arr[len-1-i]]=[arr[len-1-i],arr[i]]
}
console.log(arr);
