function isSumOfCubes(s) {
    // ...
    let stArr = []
    let temp = ''
    s.split("").forEach(item => {
        if (!isNaN(item) && item != ' ' && temp.length < 3) {
            temp += item
        } else {
            stArr.push(temp)
            temp = ''
            if (!isNaN(item) && item != ' ' && temp.length < 3) {
                temp += item
            }
        }
    })
    if (temp.length != null) {
        stArr.push(temp)
    }
    let newNum = stArr.filter(Boolean)
    let newArr = []
    let sum = 0
    for (let i = 0; i < newNum.length; i++) {
        let total = 0;
        let ints = newNum[i]
        if (ints[0] == 0 && ints[1] == 0 && ints[2] == 0) {
            newArr.push(0)
        } else {
            for (let j = 0; j < ints.length; j++) {
                total += ints[j] ** 3
            }
            if (total == newNum[i]) {
                newArr.push(newNum[i])
            }
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        sum += Number(newArr[i])
    }
    if (newArr.length > 0) {
        return (`${newArr.join(" ")} ${sum} Lucky`)
    } else {
        return "Unlucky"
    }
}