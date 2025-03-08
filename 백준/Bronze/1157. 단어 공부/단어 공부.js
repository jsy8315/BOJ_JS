const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "test01/input.txt")
  .toString()
  .trim()
  .toUpperCase()
  .split(""); 

let letterCount = {}; 
let maxCount = 0;
let maxChar = "?";

// console.log(input)

for (let char of input) {
    letterCount[char] = (letterCount[char] || 0) + 1;
    // console.log("letterCount",letterCount)
}

for (let char in letterCount) {
    if (letterCount[char] > maxCount) {
        maxCount = letterCount[char];
        maxChar = char;
    } else if (letterCount[char] === maxCount) {
        maxChar = "?"; 
    }
}

console.log(maxChar);
