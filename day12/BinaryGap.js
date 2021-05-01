function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let binNum = N.toString(2)
    let binArr = `${binNum}`.split("")
    console.log(binArr)
    let max = 0;
    let count = 0;

    for (let i = 0; i < binArr.length; i++) {
        if (binArr[i] == 0) {
            count++
            console.log(count)
        } else {
            if (count > max) {
                max = count;
            }
            count = 0
        }
    }

    return max

};
console.log(solution(32));