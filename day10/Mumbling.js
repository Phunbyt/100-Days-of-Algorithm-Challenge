function accum(s) {
    // your code
    s = s.split("")
    let newArr = []
    for (let i = 1; i <= s.length; i++) {
        let stack = ''
        stack += s[i - 1].repeat(i)
        stack.substring(0, 1).toUpperCase()
        let popper = [...stack.toLowerCase()]
        let popp = popper.shift().toUpperCase() + popper.join("")
        newArr.push(popp)
    }
    return newArr.join("-")
}
accum('abc')