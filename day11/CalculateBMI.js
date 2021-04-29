function bmi(weight, height) {
    let bmiCalc = weight / (height ** 2)

    return bmiCalc <= 18.5 ? "Underweight" :
        bmiCalc <= 25.0 ? "Normal" :
        bmiCalc <= 30.0 ? "Overweight" :
        "Obese"

}