// Write a program to find index of duplicate elements in an array

function findDupInd(arr) {
  const ind = {};

  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];

    if (ind[ele]) {
      ind[ele].push(i);
    } else {
      ind[ele] = [i];
    }
  }

  const dupInds = [];

  for (const key in ind) {
    if (ind[key].length > 1) {
      dupInds.push({ element: key, ind: ind[key] });
    }
  }

  return dupInds;
}

const arr = [1, 2, 3, 4, 2, 5, 6, 4];
const dupInd = findDupInd(arr);
console.log(dupInd);
