const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "test01/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(""));

let result = ""

function fullArr(arr){
    if (arr.length == 15){
        return arr
    } else {
        while(arr.length != 15){
            arr.push("")
        }
        return arr
    }
}

for (let i = 0; i < 5; i++) {
    fullArr(input[i])
}


for (let i = 0; i < 15; i++){
    for (let j = 0; j < 5; j++){
        result += input[j][i]

    }
}

console.log(result)
// console.log(result.filter(char => char != ""))

