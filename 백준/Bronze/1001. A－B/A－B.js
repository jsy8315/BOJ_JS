const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "test01/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [a, b] = input;
console.log(a - b)