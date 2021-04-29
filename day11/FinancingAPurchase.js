function amort(rate, bal, term, num_payments) {
    // your code
    // please use .toFixed(0) to format numbers
    let mRate = (rate / 12) / 100
    let c = bal * ((mRate * ((1 + mRate) ** term)) / (((1 + mRate) ** term) - 1))
    let princ = 0

    let int = 0

    for (let i = 0; i < num_payments; i++) {
        int = bal * mRate
        princ = c - int

        bal = bal - princ
    }

    return `num_payment ${num_payments} c ${c.toFixed(0)} princ ${princ.toFixed(0)} int ${int.toFixed(0)} balance ${bal.toFixed(0)}`


}