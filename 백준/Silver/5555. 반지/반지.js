const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "test01/input.txt")
  .toString()
  .trim()
  .split("\n")



A = input[0]
N = input[1]

let result = 0

function checkA(paramA, paramR){
    for (let i = 0; i < 10; i++){
        if (paramR.indexOf(paramA) != -1){
            result += 1
            break
        } else {
            // paramR 맨 앞의 글자 뺴서 맨뒤로 보내고
            // paramR 맨 앞 글자 삭제
            paramR = paramR + paramR[0]
            paramR = paramR.substr(1)
        }
    }
}

for (let i = 0; i < N; i++){
    checkA(A, input[i + 2])
}

console.log(result)