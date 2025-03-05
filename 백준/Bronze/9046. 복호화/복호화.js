const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "test01/input.txt")
  .toString()
  .trim()
  .split("\n");

let testCases = parseInt(input[0]);

// 빈도수를 세는 함수
function countFrequent(sentence) {
    let letterCount = {}; // 문자 개수를 저장할 객체
    let maxCount = 0;  // 최빈값 저장
    let maxLetter = ""; // 최빈 문자 저장
    let isDuplicate = false; // 최빈값이 중복인지 체크

    // 공백 제거 후 문자 하나씩 순회
    for (let char of sentence.replace(/ /g, "")) {
        letterCount[char] = (letterCount[char] || 0) + 1; // 개수 카운트
        if (letterCount[char] > maxCount) {
            maxCount = letterCount[char];
            maxLetter = char;
            isDuplicate = false; // 새로운 최대값 등장 -> 중복 해제
        } else if (letterCount[char] === maxCount) {
            isDuplicate = true; // 기존 최대값과 동일한 문자 등장 -> 중복 플래그 설정
        }
    }

    return isDuplicate ? "?" : maxLetter;
}

// 테스트 케이스 처리
for (let i = 1; i <= testCases; i++) {
    console.log(countFrequent(input[i]));
}
