const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "test01/input.txt")
  .toString()
  .trim()
  .split("\n")

function mjFilter(word){
    result = ""
    answer = " is acceptable."
    answerNot = " is not acceptable."

    // 조건을 만족하면 true
    checkRule01 = false
    checkRule02 = true
    checkRule03 = true

    // 연속체크 - 룰2
    countMoeum = 0
    countJaeum = 0

    // 정규화 전 룰3
    wordArr = word.split("")
    for (let i = 1; i < wordArr.length; i++){
        if ( (wordArr[i - 1] == wordArr[i])) {

            checkRule03 = false

            if ((wordArr[i - 1] == "e" && wordArr[i] == "e")){
                checkRule03 = true
            }

            if ((wordArr[i - 1] == "o" && wordArr[i] == "o")){
                checkRule03 = true
            }

        } 
    }

    // 정규화
    for (let char0 of word) {
        if (char0 == "e") {
            result += "e"
        } else if (char0 == "o") {
            result += "o"
        } else if ( char0 == "a" || char0 == "i" || char0 == "u") {
            result += "a"
        } else {
            result += "j"
        }
    }

    // 룰1번부터 고고
    for (let char1 of result){
        if (char1 == "a" || char1 == "e" || char1 == "o") {
            checkRule01 = true
        }
    }

    // 룰2
    for (let char2 of result) {
        if (char2 == "a" || char2 == "e" || char2 == "o") {
            countJaeum = 0
            countMoeum += 1
        } else {
            countMoeum = 0
            countJaeum += 1
        }
        if (countJaeum == 3 || countMoeum == 3){
            checkRule02 = false
        }
    }

    // return word + checkRule01 +checkRule02 + checkRule03
    
    if (checkRule01 == true && checkRule02 == true && checkRule03 == true) {
        return "<" + word + ">" + answer    
    } else {
        return "<" + word + ">"  + answerNot
    }
}

for (let i = 0; i < input.length - 1; i++ ){
    console.log(mjFilter(input[i]))
}
