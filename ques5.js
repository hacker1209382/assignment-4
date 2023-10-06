//  Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

function toCamelCase(str) {
  const words = str.split(" ");

  const camelCaseWord = words.map((word, ind) => {
    if (ind === 0) {
      return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  const camelCaseStr = camelCaseWord.join("");

  return camelCaseStr;
}

const str = "hello john doe";
const camelCaseStr = toCamelCase(str);
console.log(camelCaseStr);
