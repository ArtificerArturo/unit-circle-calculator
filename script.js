function calculateUnitCircle() {
    const angleElement = document.querySelector("#unitCircleCalculator #input");
    const dropdown = document.querySelector("#unitCircleCalculator #dropdown")
    const resultElement = document.querySelector("#unitCircleCalculator .result");
    let angle = angleElement.value

    let x = 0
    let y = 0
    let tan = 0

    if (angle == "") {
        resultElement.textContent = "Please enter an angle.";
        resultElement.style.color = "red";
        return
    }
    if (dropdown.value == "degrees") {
        let conditionedAngle = +(eval(angle) % 360).toFixed(3)

        if (conditionedAngle == 0) {
            x = 1
            y = 0
            tan = 0
        } else if (conditionedAngle == 30 || conditionedAngle == -330) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>1</mn><mn>2</mn></mfrac></math>`
            tan = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><msqrt><mn>3</mn></msqrt><mn>3</mn></mfrac></math>`
        } else if (conditionedAngle == 45 || conditionedAngle == -315) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></math>`
            tan = 1
        } else if (conditionedAngle == 60 || conditionedAngle == -300) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>1</mn><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></math>`
            tan = `<math xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mn>3</mn></msqrt></math>`
        } else if (conditionedAngle == 90 || conditionedAngle == -270) {
            x = 0
            y = 1
            tan = "undefined"
        } else if (conditionedAngle == 120 || conditionedAngle == -240) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><mn>1</mn></mrow><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></math>`
            tan = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mo>-</mo><msqrt><mn>3</mn></msqrt></math>`
        } else if (conditionedAngle == 135 || conditionedAngle == -225) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><msqrt><mn>2</mn></msqrt></mrow><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></math>`
            tan = -1
        } else if (conditionedAngle == 150 || conditionedAngle == -210) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>1</mn><mn>2</mn></mfrac></math>`
            tan = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>3</mn></mfrac></math>`
        } else if (conditionedAngle == 180 || conditionedAngle == -180) {
            x = -1
            y = 0
            tan = 0
        } else if (conditionedAngle == 210 || conditionedAngle == -150) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><mn>1</mn></mrow><mn>2</mn></mfrac></math>`
            tan = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><msqrt><mn>3</mn></msqrt><mn>3</mn></mfrac></math>`
        } else if (conditionedAngle == 225 || conditionedAngle == -135) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><msqrt><mn>2</mn></msqrt></mrow><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><msqrt><mn>2</mn></msqrt></mrow><mn>2</mn></mfrac></math>`
            tan = 1
        } else if (conditionedAngle == 240 || conditionedAngle == -120) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><mn>1</mn></mrow><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></math>`
            tan = `<math xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mn>3</mn></msqrt></math>`
        } else if (conditionedAngle == 270 || conditionedAngle == -90) {
            x = 0
            y = -1
            tan = "undefined"
        } else if (conditionedAngle == 300 || conditionedAngle == -60) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>1</mn><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></math>`
            tan = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mo>-</mo><msqrt><mn>3</mn></msqrt></math>`
        } else if (conditionedAngle == 315 || conditionedAngle == -45) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><msqrt><mn>2</mn></msqrt></mrow><mn>2</mn></mfrac></math>`
            tan = -1
        } else if (conditionedAngle == 330 || conditionedAngle == -30) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><mn>1</mn></mrow><mn>2</mn></mfrac></math>`
            tan = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>3</mn></mfrac></math>`
        }
        else {
            x = +Math.cos(conditionedAngle * Math.PI / 180).toFixed(4)
            y = +Math.sin(conditionedAngle * Math.PI / 180).toFixed(4)
            tan = +Math.tan(conditionedAngle * Math.PI / 180).toFixed(4)
        }
        resultElement.style.color = "black";
        resultElement.innerHTML = `x = cos(${conditionedAngle})° = ${x}\ny = sin(${conditionedAngle})° = ${y}\ntan(${conditionedAngle})° = ${tan}`

    } else if (dropdown.value == "radians") {
        let conditionedAngle = +(eval(angle) % (2 * Math.PI)).toFixed(3)

        x = +Math.cos(conditionedAngle).toFixed(4)
        y = +Math.sin(conditionedAngle).toFixed(4)
        tan = +Math.tan(conditionedAngle).toFixed(4)

        resultElement.style.color = "black";
        resultElement.innerHTML = `x = cos(${conditionedAngle}) = ${x}\ny = sin(${conditionedAngle}) = ${y}\ntan(${conditionedAngle}) = ${tan}`

    } else if (dropdown.value == "piRad") {
        //let conditionedAngle = +(eval(angle) % 2 * Math.PI)
        //let roundedAngle = conditionedAngle.toFixed(3)
        let conditionedAngle = math.fraction(angle)
        console.log(conditionedAngle)

        x = +Math.cos(conditionedAngle).toFixed(4)
        y = +Math.sin(conditionedAngle).toFixed(4)
        tan = +Math.tan(conditionedAngle).toFixed(4)

        resultElement.style.color = "black";
        //resultElement.innerHTML = `x = cos(${roundedAngle}) = ${x}\ny = sin(${roundedAngle}) = ${y}\ntan(${roundedAngle}) = ${tan}`
        resultElement.innerHTML = `${conditionedAngle}`
    }





}


/*
        //Intelligent rounding. Results with only decimal component need sig figs, 
        //results greater than 1 do not
if (result < 1 && result > -1) {
    resultElement.textContent = `Answer: ${result.toPrecision(2)} pounds`
} else {
    resultElement.textContent = `Answer: ${numberWithCommas(+result.toFixed(2))} pounds`
}
resultElement.style.color = "black";

//Format input fields with commas after calculation
kilogramsInputElement.value = numberWithCommas(kilograms) */
