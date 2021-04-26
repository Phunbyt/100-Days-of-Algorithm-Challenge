function dontGiveMeFive(start, end) {
    let add = 0
    for (let i = start; i <= end; i++) {
        let str = `${i}`
        let strArr = [...str]
        if (!strArr.includes(`${5}`)) {
            add++
        }
    }
    return add;
}