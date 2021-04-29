function century(year) {
    let count = 0;
    // Finish this :)
    function club(x) {
        if (x < 101) return count++;
        count++;
        x = x - 100;
        console.log(x)
        club(x);
    }
    club(year);
    return count;
}
console.log(century(1900))