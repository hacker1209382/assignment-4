// Write a program to concatenate an input of array of arrays

const twoDArray = [
  [1, 2, 3],
  [2, 3],
];

// const 1dArray=2dArray.flat()

const oneDArray = twoDArray.reduce((acc, currentArray) => {
  return acc.concat(currentArray);
}, []);

console.log(oneDArray);
