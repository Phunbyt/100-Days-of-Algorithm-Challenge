function disemvowel(str) {
    let vows = ['a', 'e', 'i', 'o', 'u'];
    let newStr = str.split(" ")
    let newWord = newStr.map(word => {
        let lett = [...word]
        let lettArr = []
        for (let i = 0; i < lett.length; i++) {
            if (!vows.includes(lett[i].toLowerCase())) {
                lettArr.push(lett[i])
            }
        }
        return lettArr.join("")
    })
    return newWord.join(" ")
}