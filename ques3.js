// Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

const str = "abcabcdabbcc";
const charCnt = {};

for (const char of str) {
  if (charCnt[char]) {
    charCnt[char]++;
  } else {
    charCnt[char] = 1;
  }
}

for (const char in charCnt) {
  console.log(char + charCnt[char]);
}
