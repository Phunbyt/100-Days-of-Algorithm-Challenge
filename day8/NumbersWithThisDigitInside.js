function numbersWithDigitInside(x, d) {
    if (x < d) return [0, 0, 0]
    let temp = [];
    let mult = 1;
    let add = 0
    for (let i = 1; i <= x; i++) {
        let str = `${i}`
        let strArr = [...str]
        if (strArr.includes(`${d}`)) {
            temp.push(i)
        }
    }
    if (temp.length < 1) mult = 0;
    temp.forEach(num => {
        mult *= num
        add += num
    })
    return [temp.length, add, mult];
}