function vertMirror(strng) {
    // Your code
    let newStr = strng.split("\n");
    let swap = []
    newStr.forEach(word => {
        swap.push([...word].reverse().join(""));
    })
    return swap.join("\n");
}

function horMirror(strng) {
    // Your code
    let newStr = strng.split("\n");
    let swap = newStr.reverse()


    return swap.join("\n");

}

function oper(fct, s) {
    // Your code
    if (fct == vertMirror) {
        return vertMirror(s)
    } else {
        return horMirror(s)
    }
}