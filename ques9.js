// Write a program to find the last duplicate index in an array

function findLastDupInd(arr) {
  const ind = {};

  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];

    if (ind[ele]) {
      ind[ele].push(i);
    } else {
      ind[ele] = [i];
    }
  }

  const lastDupInds = [];

  for (const key in ind) {
    if (ind[key].length > 1) {
      lastDupInds.push({ element: key, ind: ind[key].pop() });
    }
  }

  return lastDupInds;
}

const arr = [1, 2, 3, 4, 2, 5, 6, 4];
const lastDupInd = findLastDupInd(arr);
console.log(lastDupInd);
