// Write a program to convert given string to upperCase OR lowerCase

//uppercase

let str1 = "HiqQi";
let upperCaseStr = "";

for (let i = 0; i < str1.length; i++) {
  let char = str1.charCodeAt(i);

  if (char >= 97 && char <= 122) {
    upperCaseStr += String.fromCharCode(char - 32);
  } else {
    upperCaseStr += str1[i];
  }
}
console.log(upperCaseStr);

//lowercase

let str2 = "HI ";
let lowerCaseStr = "";

for (let i = 0; i < str2.length; i++) {
  let char = str2.charCodeAt(i);

  if (char >= 65 && char <= 90) {
    lowerCaseStr += String.fromCharCode(char + 32);
  } else {
    lowerCaseStr += str2[i];
  }
}
console.log(lowerCaseStr);
