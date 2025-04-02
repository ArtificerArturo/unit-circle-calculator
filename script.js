function calculateUnitCircle() {
    const angleElement = document.querySelector("#unitCircleCalculator #input")
    const dropdown = document.querySelector("#unitCircleCalculator #dropdown")
    const resultElement = document.querySelector("#unitCircleCalculator .result")

    const xDiv = document.createElement("div")
    const yDiv = document.createElement("div")
    const tanDiv = document.createElement("div")
    const coordDiv = document.createElement("div")

    const numDecimals = 3

    let angle = angleElement.value
    let x = ""
    let y = ""
    let tan = ""
    let dirtyX = ""
    let dirtyY = ""
    let dirtyTan = ""


    resultElement.innerHTML = ""
    resultElement.style.color = "black"

    if (angle == "") {
        resultElement.textContent = "Please enter an angle."
        resultElement.style.color = "red"
        return
    }

    if (dropdown.value == "degrees") {
        let conditionedAngle = +(eval(angle) % 360).toFixed(numDecimals)
        checkSpecialValues(conditionedAngle)
        xDiv.innerHTML = `<math><mi>x</mi><mo>=</mo><mi>cos</mi><mfenced><mrow><mn>${conditionedAngle}</mn><mo>&#xb0;</mo></mrow></mfenced>${dirtyX}${x}</math>`
        yDiv.innerHTML = `<math><mi>y</mi><mo>=</mo><mi>sin</mi><mfenced><mrow><mn>${conditionedAngle}</mn><mo>&#xb0;</mo></mrow></mfenced>${dirtyY}${y}</math>`
        tanDiv.innerHTML = `<math><mi>tan</mi><mfenced><mrow><mn>${conditionedAngle}</mn><mo>&#xb0;</mo></mrow></mfenced>${dirtyTan}${tan}</math>`
    } else if (dropdown.value == "radians") {
        let conditionedAngle = +(eval(angle) % (2 * Math.PI)).toFixed(numDecimals)
        checkSpecialValues(conditionedAngle)
        xDiv.innerHTML = `<math><mi>x</mi><mo>=</mo><mi>cos</mi><mfenced><mrow><mn>${conditionedAngle}</mn></mrow></mfenced>${dirtyX}${x}</math>`
        yDiv.innerHTML = `<math><mi>y</mi><mo>=</mo><mi>sin</mi><mfenced><mrow><mn>${conditionedAngle}</mn></mrow></mfenced>${dirtyY}${y}</math>`
        tanDiv.innerHTML = `<math><mi>tan</mi><mfenced><mrow><mn>${conditionedAngle}</mn></mrow></mfenced>${dirtyTan}${tan}</math>`
    } else if (dropdown.value == "piRad") {
        let conditionedAngle = math.fraction(angle).mod(2)
        console.log(conditionedAngle)
        checkSpecialValues(conditionedAngle)
        xDiv.innerHTML = `<math><mi>x</mi><mo>=</mo><mi>cos</mi><mfenced><mrow><mfrac><mn>${conditionedAngle.n}</mn><mn>${conditionedAngle.d}</mn></mfrac><mo>&#xd7;</mo><mi>&#x3c0;</mi></mrow></mfenced>${dirtyX}${x}</math>`
        yDiv.innerHTML = `<math><mi>y</mi><mo>=</mo><mi>sin</mi><mfenced><mrow><mfrac><mn>${conditionedAngle.n}</mn><mn>${conditionedAngle.d}</mn></mfrac><mo>&#xd7;</mo><mi>&#x3c0;</mi></mrow></mfenced>${dirtyY}${y}</math>`
        tanDiv.innerHTML = `<math><mi>tan</mi><mfenced><mrow><mfrac><mn>${conditionedAngle.n}</mn><mn>${conditionedAngle.d}</mn></mfrac><mo>&#xd7;</mo><mi>&#x3c0;</mi></mrow></mfenced>${dirtyTan}${tan}</math>`
    }
    coordDiv.innerHTML = `Coordinates: <math><mo>(</mo><mi>${x}</mi><mo>,</mo><mo>&#xA0;</mo><mi>${y}</mi><mo>)</mo></math>`
    resultElement.appendChild(xDiv)
    resultElement.appendChild(yDiv)
    resultElement.appendChild(tanDiv)
    resultElement.appendChild(coordDiv)

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
            x = `<mo>=</mo><mi><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></mn>`
            y = `<mo>=</mo><mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mn>`
            tan = `<mo>=</mo><mi><mfrac><msqrt><mn>3</mn></msqrt><mn>3</mn></mfrac></mn>`
            calcOrdinaryValues()
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 45 || conditionedAngle == -315)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("1/4"))) ||
            math.equal(conditionedAngle, math.fraction("-7/4"))
        ) {
            x = `<mo>=</mo><mi><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></mn>`
            y = `<mo>=</mo><mi><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></mn>`
            tan = `<mo>=</mo><mn>1</mn>`
            calcOrdinaryValues()
            dirtyTan = ""
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 60 || conditionedAngle == -300)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("1/3"))) ||
            math.equal(conditionedAngle, math.fraction("-5/3"))
        ) {
            x = `<mo>=</mo><mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mn>`
            y = `<mo>=</mo><mi><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></mn>`
            tan = `<mo>=</mo><mi><msqrt><mn>3</mn></msqrt></mn>`
            calcOrdinaryValues()
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
            x = `<mo>=</mo><mi><mfrac><mrow><mo>-</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mn>`
            y = `<mo>=</mo><mi><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></mn>`
            tan = `<mo>=</mo><mi><mo>-</mo><msqrt><mn>3</mn></msqrt></mn>`
            calcOrdinaryValues()
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 135 || conditionedAngle == -225)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("3/4"))) ||
            math.equal(conditionedAngle, math.fraction("-5/4"))
        ) {
            x = `<mo>=</mo><mi><mfrac><mrow><mo>-</mo><msqrt><mn>2</mn></msqrt></mrow><mn>2</mn></mfrac></mn>`
            y = `<mo>=</mo><mi><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></mn>`
            tan = -1
            calcOrdinaryValues()
            dirtyTan = ""
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 150 || conditionedAngle == -210)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("5/6"))) ||
            math.equal(conditionedAngle, math.fraction("-7/6"))
        ) {
            x = `<mo>=</mo><mi><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></mn>`
            y = `<mo>=</mo><mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mn>`
            tan = `<mo>=</mo><mi><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>3</mn></mfrac></mn>`
            calcOrdinaryValues()
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
            x = `<mo>=</mo><mi><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></mn>`
            y = `<mo>=</mo><mi><mfrac><mrow><mo>-</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mn>`
            tan = `<mo>=</mo><mi><mfrac><msqrt><mn>3</mn></msqrt><mn>3</mn></mfrac></mn>`
            calcOrdinaryValues()
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 225 || conditionedAngle == -135)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("5/4"))) ||
            math.equal(conditionedAngle, math.fraction("-3/4"))
        ) {
            x = `<mo>=</mo><mi><mfrac><mrow><mo>-</mo><msqrt><mn>2</mn></msqrt></mrow><mn>2</mn></mfrac></mn>`
            y = `<mo>=</mo><mi><mfrac><mrow><mo>-</mo><msqrt><mn>2</mn></msqrt></mrow><mn>2</mn></mfrac></mn>`
            tan = 1
            calcOrdinaryValues()
            dirtyTan = ""
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 240 || conditionedAngle == -120)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("4/3"))) ||
            math.equal(conditionedAngle, math.fraction("-2/3"))
        ) {
            x = `<mo>=</mo><mi><mfrac><mrow><mo>-</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mn>`
            y = `<mo>=</mo><mi><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></mn>`
            tan = `<mo>=</mo><mi><msqrt><mn>3</mn></msqrt></mn>`
            calcOrdinaryValues()
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
            x = `<mo>=</mo><mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mn>`
            y = `<mo>=</mo><mi><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></mn>`
            tan = `<mo>=</mo><mi><mo>-</mo><msqrt><mn>3</mn></msqrt></mn>`
            calcOrdinaryValues()
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 315 || conditionedAngle == -45)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("7/4"))) ||
            math.equal(conditionedAngle, math.fraction("-1/4"))
        ) {
            x = `<mo>=</mo><mi><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></mn>`
            y = `<mo>=</mo><mi><mfrac><mrow><mo>-</mo><msqrt><mn>2</mn></msqrt></mrow><mn>2</mn></mfrac></mn>`
            tan = -1
            calcOrdinaryValues()
            dirtyTan = ""
        } else if (
            (dropdown.value == "degrees" && (conditionedAngle == 330 || conditionedAngle == -30)) ||
            (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("11/6"))) ||
            math.equal(conditionedAngle, math.fraction("-1/6"))
        ) {
            x = `<mo>=</mo><mi><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></mn>`
            y = `<mo>=</mo><mi><mfrac><mrow><mo>-</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mn>`
            tan = `<mo>=</mo><mi><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>3</mn></mfrac></mn>`
            calcOrdinaryValues()
        }
        calcOrdinaryValues()
        resultElement.style.color = "black"

        function calcOrdinaryValues() {
            if (dropdown.value == "degrees") {
                dirtyX = `<mo>=</mo><mn>${+Math.cos((conditionedAngle * Math.PI) / 180).toFixed(numDecimals)}</mn>`
                dirtyY = `<mo>=</mo><mn>${+Math.sin((conditionedAngle * Math.PI) / 180).toFixed(numDecimals)}</mn>`
                dirtyTan = `<mo>=</mo><mn>${+Math.tan((conditionedAngle * Math.PI) / 180).toFixed(numDecimals)}</mn>`
            } else if (dropdown.value == "radians") {
                dirtyX = `<mo>=</mo><mn>${+Math.cos(conditionedAngle).toFixed(numDecimals)}</mn>`
                dirtyY = `<mo>=</mo><mn>${+Math.sin(conditionedAngle).toFixed(numDecimals)}</mn>`
                dirtyTan = `<mo>=</mo><mn>${+Math.tan(conditionedAngle).toFixed(numDecimals)}</mn>`
            } else if (dropdown.value == "piRad") {
                dirtyX = `<mo>=</mo><mn>${+Math.cos(conditionedAngle * Math.PI).toFixed(numDecimals)}</mn>`
                dirtyY = `<mo>=</mo><mn>${+Math.sin(conditionedAngle * Math.PI).toFixed(numDecimals)}</mn>`
                dirtyTan = `<mo>=</mo><mn>${+Math.tan(conditionedAngle * Math.PI).toFixed(numDecimals)}</mn>`
            }
            resultElement.style.color = "black"
        }
    }
    MathJax.typesetPromise()
}

function clearForm() {
    const angleElement = document.querySelector("#unitCircleCalculator #input")
    const resultElement = document.querySelector("#unitCircleCalculator .result")

    angleElement.value = ""
    resultElement.innerHTML = ""
    resultElement.style.color = "black"
}
