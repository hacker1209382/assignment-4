// Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")
let oldStr = "Hello Yellow";
let newStr = "";
for (let i = 0; i < oldStr.length; i++) {
  if (newStr.indexOf(oldStr[i]) === -1) newStr += oldStr[i];
}
console.log(newStr);
