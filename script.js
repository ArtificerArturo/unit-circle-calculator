function calculateUnitCircle() {
    const angleElement = document.querySelector("#unitCircleCalculator #input")
    const dropdown = document.querySelector("#unitCircleCalculator #dropdown")
    const resultElement = document.querySelector("#unitCircleCalculator .result")
    let angle = angleElement.value

    let x = 0
    let y = 0
    let tan = 0

    if (angle == "") {
        resultElement.textContent = "Please enter an angle."
        resultElement.style.color = "red"
        return
    }

    if (dropdown.value == "degrees") {
        let conditionedAngle = +(eval(angle) % 360).toFixed(3)
        checkSpecialValues(conditionedAngle)
        resultElement.innerHTML = `x = cos(${conditionedAngle}°) = ${x}\ny = sin(${conditionedAngle}°) = ${y}\ntan(${conditionedAngle}°) = ${tan}`
        /* coordinate display -- not called for per se
          const coordDiv = document.createElement("div")
          coordDiv.innerHTML = `(${x}, ${y})`
          resultElement.appendChild(coordDiv)
          */
    } else if (dropdown.value == "radians") {
        let conditionedAngle = +(eval(angle) % (2 * Math.PI)).toFixed(3)
        checkSpecialValues(conditionedAngle)
        resultElement.innerHTML = `x = cos(${conditionedAngle}) = ${x}\ny = sin(${conditionedAngle}) = ${y}\ntan(${conditionedAngle}) = ${tan}`
    } else if (dropdown.value == "piRad") {
        let conditionedAngle = math.fraction(angle).mod(2)
        checkSpecialValues(conditionedAngle)
        resultElement.innerHTML = `x = cos(${angle} × π) = ${x}\ny = sin(${angle} × π) = ${y}\ntan(${angle} × π) = ${tan}`
    }

    function checkSpecialValues(conditionedAngle) {
        if (conditionedAngle == 0) {
            x = 1
            y = 0
            tan = 0
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 30 || conditionedAngle == -330)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("1/6"))) ||
            math.equal(conditionedAngle, math.fraction("-11/6"))
        ) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>1</mn><mn>2</mn></mfrac></math>`
            tan = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><msqrt><mn>3</mn></msqrt><mn>3</mn></mfrac></math>`
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 45 || conditionedAngle == -315)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("1/4"))) ||
            math.equal(conditionedAngle, math.fraction("-7/4"))
        ) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></math>`
            tan = 1
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 60 || conditionedAngle == -300)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("1/3"))) ||
            math.equal(conditionedAngle, math.fraction("-5/3"))
        ) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>1</mn><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></math>`
            tan = `<math xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mn>3</mn></msqrt></math>`
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 90 || conditionedAngle == -270)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("1/2"))) ||
            math.equal(conditionedAngle, math.fraction("-3/2"))
        ) {
            x = 0
            y = 1
            tan = "undefined"
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 120 || conditionedAngle == -240)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("2/3"))) ||
            math.equal(conditionedAngle, math.fraction("-4/3"))
        ) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><mn>1</mn></mrow><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></math>`
            tan = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mo>-</mo><msqrt><mn>3</mn></msqrt></math>`
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 135 || conditionedAngle == -225)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("3/4"))) ||
            math.equal(conditionedAngle, math.fraction("-5/4"))
        ) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><msqrt><mn>2</mn></msqrt></mrow><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></math>`
            tan = -1
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 150 || conditionedAngle == -210)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("5/6"))) ||
            math.equal(conditionedAngle, math.fraction("-7/6"))
        ) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>1</mn><mn>2</mn></mfrac></math>`
            tan = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>3</mn></mfrac></math>`
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 180 || conditionedAngle == -180)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("1/1"))) ||
            math.equal(conditionedAngle, math.fraction("-1/1"))
        ) {
            x = -1
            y = 0
            tan = 0
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 210 || conditionedAngle == -150)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("7/6"))) ||
            math.equal(conditionedAngle, math.fraction("-5/6"))
        ) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><mn>1</mn></mrow><mn>2</mn></mfrac></math>`
            tan = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><msqrt><mn>3</mn></msqrt><mn>3</mn></mfrac></math>`
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 225 || conditionedAngle == -135)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("5/4"))) ||
            math.equal(conditionedAngle, math.fraction("-3/4"))
        ) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><msqrt><mn>2</mn></msqrt></mrow><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><msqrt><mn>2</mn></msqrt></mrow><mn>2</mn></mfrac></math>`
            tan = 1
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 240 || conditionedAngle == -120)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("4/3"))) ||
            math.equal(conditionedAngle, math.fraction("-2/3"))
        ) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><mn>1</mn></mrow><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></math>`
            tan = `<math xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mn>3</mn></msqrt></math>`
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 270 || conditionedAngle == -90)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("3/2"))) ||
            math.equal(conditionedAngle, math.fraction("-1/2"))
        ) {
            x = 0
            y = -1
            tan = "undefined"
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 300 || conditionedAngle == -60)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("5/3"))) ||
            math.equal(conditionedAngle, math.fraction("-1/3"))
        ) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>1</mn><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></math>`
            tan = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mo>-</mo><msqrt><mn>3</mn></msqrt></math>`
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 315 || conditionedAngle == -45)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("7/4"))) ||
            math.equal(conditionedAngle, math.fraction("-1/4"))
        ) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><msqrt><mn>2</mn></msqrt></mrow><mn>2</mn></mfrac></math>`
            tan = -1
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 330 || conditionedAngle == -30)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("11/6"))) ||
            math.equal(conditionedAngle, math.fraction("-1/6"))
        ) {
            x = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></math>`
            y = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><mn>1</mn></mrow><mn>2</mn></mfrac></math>`
            tan = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>3</mn></mfrac></math>`
        } else if (dropdown.value == "degrees") {
            x = +Math.cos((conditionedAngle * Math.PI) / 180).toFixed(4)
            y = +Math.sin((conditionedAngle * Math.PI) / 180).toFixed(4)
            tan = +Math.tan((conditionedAngle * Math.PI) / 180).toFixed(4)
        } else if (dropdown.value == "radians") {
            x = +Math.cos(conditionedAngle).toFixed(4)
            y = +Math.sin(conditionedAngle).toFixed(4)
            tan = +Math.tan(conditionedAngle).toFixed(4)
        } else if (dropdown.value == "piRad") {
            x = +Math.cos(conditionedAngle * Math.PI).toFixed(4)
            y = +Math.sin(conditionedAngle * Math.PI).toFixed(4)
            tan = +Math.tan(conditionedAngle * Math.PI).toFixed(4)
        }
        resultElement.style.color = "black"
    }
    MathJax.typesetPromise()
}
