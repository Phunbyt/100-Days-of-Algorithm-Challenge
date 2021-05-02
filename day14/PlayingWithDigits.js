function digPow(n, p) {
    let str = 0
    let num = `${n}`.split("").forEach(item => {
        str += item ** p;
        p++
    })
    return ((Math.floor(str / n)) * n === str) ? Math.floor(str / n) : -1
}
console.log(digPow(46288, 3))