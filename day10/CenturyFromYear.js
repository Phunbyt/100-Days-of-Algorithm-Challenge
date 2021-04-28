function century(year) {
    let count = 0
    let x = year
        // Finish this :)
    function club(x) {
        if (x < 101) return count++;
        count++;
        x = x - 100;
        club(x);
    }
    club(year);
    return count;
}