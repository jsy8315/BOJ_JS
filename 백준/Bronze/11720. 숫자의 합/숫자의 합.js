const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "test01/input.txt")
  .toString()
  .split("\n")

let a = Number(input[0]);
let b = input[1].split("");
let result = 0;

for (let i = 0; i < a; i++) {
    result += Number(b[i])
}
console.log(result)

