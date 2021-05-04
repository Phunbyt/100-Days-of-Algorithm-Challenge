function race(v1, v2, g) {
    // your code
    if (v1 >= v2) return null;
    let num = (g / (v2 - v1)) * 60;
    let hrs = 0;

    while (num > 59) {
        hrs++;
        num -= 60;
    }
    let min = +`${num}`.split(".")[0];
    let temp = `${num}`.split(".")[1]
    let sec = Math.floor(+`0.${temp}` * 60) || 0;

    return [hrs, min, sec]


}