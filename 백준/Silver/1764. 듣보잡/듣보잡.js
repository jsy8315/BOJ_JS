const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "test01/input.txt")
  .toString()
  .trim()
  .split("\n")

N = parseInt(input[0].split(" ")[0]) // 듣도 못한 사람의 수
M = parseInt(input[0].split(" ")[1]) // 보도 못한 사람의 수

total = {}

for (let i = 1; i < N + M + 1; i++){
    total[input[i]] = (total[input[i]] || 0) + 1;
}

result = []

for (let char in total){
    if(total[char] > 1){
        result.push(char)
    }
}

result.sort()

console.log(result.length)
for (let char of result){
    console.log(char)
}
