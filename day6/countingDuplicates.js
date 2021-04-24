function duplicateCount(text) {
    //...
    let lowText = text.toLowerCase();
    let strArr = lowText.split("");
    let freq = {}
    let count = 0;

    strArr.forEach(abc => {
        freq[abc] = (freq[abc] || 0) + 1;
    })

    for (val in freq) {
        if (freq[val] > 1) {
            count++;
        }
    }
    return count;
}