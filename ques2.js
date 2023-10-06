// Write a program to reverse a string ("Hello John" => "olleH nhoJ")

function reverse(str) {
  const words = str.split(" ");
  const reversed = words.map((word) => {
    return word.split("").reverse().join("");
  });
  const revStr = reversed.join(" ");
  return revStr;
}

const str = "Hello John";
const revStr = reverse(str);
console.log(revStr);
