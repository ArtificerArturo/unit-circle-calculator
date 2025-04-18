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
   let coordX = ""
   let coordY = ""
   let cleanXYEquals = ""
   let dirtyXYEquals = ""
   let cleanTanEquals = ""
   let dirtyTanEquals = ""
   let piRadAngle = ""
   let timesPI = `<mo>&#xd7;</mo><mi>&#x3c0;</mi>`
   let piRadSign = ""

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
      addEqualsSign()
      xDiv.innerHTML = `<math><mi>x</mi><mo>=</mo><mi>cos</mi><mfenced><mrow><mn>${conditionedAngle}</mn><mo>&#xb0;</mo></mrow></mfenced>${dirtyXYEquals}${dirtyX}${cleanXYEquals}${x}</math>`
      yDiv.innerHTML = `<math><mi>y</mi><mo>=</mo><mi>sin</mi><mfenced><mrow><mn>${conditionedAngle}</mn><mo>&#xb0;</mo></mrow></mfenced>${dirtyXYEquals}${dirtyY}${cleanXYEquals}${y}</math>`
      tanDiv.innerHTML = `<math><mi>tan</mi><mfenced><mrow><mn>${conditionedAngle}</mn><mo>&#xb0;</mo></mrow></mfenced>${dirtyTanEquals}${dirtyTan}${cleanTanEquals}${tan}</math>`
   } else if (dropdown.value == "radians") {
      let conditionedAngle = +(eval(angle) % (2 * Math.PI)).toFixed(numDecimals)
      checkSpecialValues(conditionedAngle)
      addEqualsSign()
      xDiv.innerHTML = `<math><mi>x</mi><mo>=</mo><mi>cos</mi><mfenced><mrow><mn>${conditionedAngle}</mn></mrow></mfenced>${dirtyXYEquals}${dirtyX}${cleanXYEquals}${x}</math>`
      yDiv.innerHTML = `<math><mi>y</mi><mo>=</mo><mi>sin</mi><mfenced><mrow><mn>${conditionedAngle}</mn></mrow></mfenced>${dirtyXYEquals}${dirtyY}${cleanXYEquals}${y}</math>`
      tanDiv.innerHTML = `<math><mi>tan</mi><mfenced><mrow><mn>${conditionedAngle}</mn></mrow></mfenced>${dirtyTanEquals}${dirtyTan}${cleanTanEquals}${tan}</math>`
   } else if (dropdown.value == "piRad") {
      let conditionedAngle = math.fraction(angle).mod(2)
      console.log(conditionedAngle)
      checkSpecialValues(conditionedAngle)
      addEqualsSign()
      if (conditionedAngle.s == -1) piRadSign = `<mo>-</mo>`
      else piRadSign = ""
      if (conditionedAngle.n == 0) {
         piRadAngle = `<mn>0</mn>`
         timesPI = ""
      } else if (conditionedAngle.n == 1 && conditionedAngle.d == 1) {
         piRadAngle = `<mi>&#x3c0;</mi>`
         timesPI = ""
      } else {
         piRadAngle = `<mfrac><mn>${piRadSign}${conditionedAngle.n}</mn><mn>${conditionedAngle.d}</mn></mfrac>`
      }

      xDiv.innerHTML = `<math><mi>x</mi><mo>=</mo><mi>cos</mi><mfenced><mrow>${piRadAngle}${timesPI}</mrow></mfenced>${dirtyXYEquals}${dirtyX}${cleanXYEquals}${x}</math>`
      yDiv.innerHTML = `<math><mi>y</mi><mo>=</mo><mi>sin</mi><mfenced><mrow>${piRadAngle}${timesPI}</mrow></mfenced>${dirtyXYEquals}${dirtyY}${cleanXYEquals}${y}</math>`
      tanDiv.innerHTML = `<math><mi>tan</mi><mfenced><mrow>${piRadAngle}${timesPI}</mrow></mfenced>${dirtyTanEquals}${dirtyTan}${cleanTanEquals}${tan}</math>`
   }

   if (x !== "") {
      coordX = x
   } else coordX = dirtyX
   if (y !== "") {
      coordY = y
   } else coordY = dirtyY
   coordDiv.innerHTML = `Coordinates: <math><mfenced><mrow><mn>${coordX}</mn><mo>,</mo><mo>&#xA0;</mo><mn>${coordY}</mn></mrow></mfenced></math>`

   resultElement.appendChild(xDiv)
   resultElement.appendChild(yDiv)
   resultElement.appendChild(tanDiv)
   resultElement.appendChild(coordDiv)

   function checkSpecialValues(conditionedAngle) {
      if (conditionedAngle == 0) {
         x = `<mn>1</mn>`
         y = `<mn>0</mn>`
         tan = `<mn>0</mn>`
      } else if (
         (dropdown.value == "degrees" && (conditionedAngle == 30 || conditionedAngle == -330)) ||
         (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("1/6"))) ||
         math.equal(conditionedAngle, math.fraction("-11/6"))
      ) {
         x = `<mi><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></mn>`
         y = `<mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mn>`
         tan = `<mi><mfrac><msqrt><mn>3</mn></msqrt><mn>3</mn></mfrac></mn>`
         calcOrdinaryValues()
      } else if (
         (dropdown.value == "degrees" && (conditionedAngle == 45 || conditionedAngle == -315)) ||
         (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("1/4"))) ||
         math.equal(conditionedAngle, math.fraction("-7/4"))
      ) {
         x = `<mi><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></mn>`
         y = `<mi><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></mn>`
         tan = `<mn>1</mn>`
         calcOrdinaryValues()
         dirtyTan = ""
      } else if (
         (dropdown.value == "degrees" && (conditionedAngle == 60 || conditionedAngle == -300)) ||
         (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("1/3"))) ||
         math.equal(conditionedAngle, math.fraction("-5/3"))
      ) {
         x = `<mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mn>`
         y = `<mi><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></mn>`
         tan = `<mi><msqrt><mn>3</mn></msqrt></mn>`
         calcOrdinaryValues()
      } else if (
         (dropdown.value == "degrees" && (conditionedAngle == 90 || conditionedAngle == -270)) ||
         (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("1/2"))) ||
         math.equal(conditionedAngle, math.fraction("-3/2"))
      ) {
         x = `<mn>0</mn>`
         y = `<mn>1</mn>`
         tan = `<mi mathvariant="normal">undefined</mi>`
      } else if (
         (dropdown.value == "degrees" && (conditionedAngle == 120 || conditionedAngle == -240)) ||
         (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("2/3"))) ||
         math.equal(conditionedAngle, math.fraction("-4/3"))
      ) {
         x = `<mi><mfrac><mrow><mo>-</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mn>`
         y = `<mi><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></mn>`
         tan = `<mi><mo>-</mo><msqrt><mn>3</mn></msqrt></mn>`
         calcOrdinaryValues()
      } else if (
         (dropdown.value == "degrees" && (conditionedAngle == 135 || conditionedAngle == -225)) ||
         (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("3/4"))) ||
         math.equal(conditionedAngle, math.fraction("-5/4"))
      ) {
         x = `<mi><mfrac><mrow><mo>-</mo><msqrt><mn>2</mn></msqrt></mrow><mn>2</mn></mfrac></mn>`
         y = `<mi><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></mn>`
         tan = `<mo>-</mo><mn>1</mn>`
         calcOrdinaryValues()
         dirtyTan = ""
      } else if (
         (dropdown.value == "degrees" && (conditionedAngle == 150 || conditionedAngle == -210)) ||
         (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("5/6"))) ||
         math.equal(conditionedAngle, math.fraction("-7/6"))
      ) {
         x = `<mi><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></mn>`
         y = `<mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mn>`
         tan = `<mi><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>3</mn></mfrac></mn>`
         calcOrdinaryValues()
      } else if (
         (dropdown.value == "degrees" && (conditionedAngle == 180 || conditionedAngle == -180)) ||
         (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("1/1"))) ||
         math.equal(conditionedAngle, math.fraction("-1/1"))
      ) {
         x = `<mo>-</mo><mn>1</mn>`
         y = `<mn>0</mn>`
         tan = `<mn>0</mn>`
      } else if (
         (dropdown.value == "degrees" && (conditionedAngle == 210 || conditionedAngle == -150)) ||
         (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("7/6"))) ||
         math.equal(conditionedAngle, math.fraction("-5/6"))
      ) {
         x = `<mi><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></mn>`
         y = `<mi><mfrac><mrow><mo>-</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mn>`
         tan = `<mi><mfrac><msqrt><mn>3</mn></msqrt><mn>3</mn></mfrac></mn>`
         calcOrdinaryValues()
      } else if (
         (dropdown.value == "degrees" && (conditionedAngle == 225 || conditionedAngle == -135)) ||
         (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("5/4"))) ||
         math.equal(conditionedAngle, math.fraction("-3/4"))
      ) {
         x = `<mi><mfrac><mrow><mo>-</mo><msqrt><mn>2</mn></msqrt></mrow><mn>2</mn></mfrac></mn>`
         y = `<mi><mfrac><mrow><mo>-</mo><msqrt><mn>2</mn></msqrt></mrow><mn>2</mn></mfrac></mn>`
         tan = `<mn>1</mn>`
         calcOrdinaryValues()
         dirtyTan = ""
      } else if (
         (dropdown.value == "degrees" && (conditionedAngle == 240 || conditionedAngle == -120)) ||
         (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("4/3"))) ||
         math.equal(conditionedAngle, math.fraction("-2/3"))
      ) {
         x = `<mi><mfrac><mrow><mo>-</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mn>`
         y = `<mi><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></mn>`
         tan = `<mi><msqrt><mn>3</mn></msqrt></mn>`
         calcOrdinaryValues()
      } else if (
         (dropdown.value == "degrees" && (conditionedAngle == 270 || conditionedAngle == -90)) ||
         (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("3/2"))) ||
         math.equal(conditionedAngle, math.fraction("-1/2"))
      ) {
         x = `<mn>0</mn>`
         y = `<mo>-</mo><mn>1</mn>`
         tan = `<mi mathvariant="normal">undefined</mi>`
      } else if (
         (dropdown.value == "degrees" && (conditionedAngle == 300 || conditionedAngle == -60)) ||
         (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("5/3"))) ||
         math.equal(conditionedAngle, math.fraction("-1/3"))
      ) {
         x = `<mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mn>`
         y = `<mi><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></mn>`
         tan = `<mi><mo>-</mo><msqrt><mn>3</mn></msqrt></mn>`
         calcOrdinaryValues()
      } else if (
         (dropdown.value == "degrees" && (conditionedAngle == 315 || conditionedAngle == -45)) ||
         (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("7/4"))) ||
         math.equal(conditionedAngle, math.fraction("-1/4"))
      ) {
         x = `<mi><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></mn>`
         y = `<mi><mfrac><mrow><mo>-</mo><msqrt><mn>2</mn></msqrt></mrow><mn>2</mn></mfrac></mn>`
         tan = `<mo>-</mo><mn>1</mn>`
         calcOrdinaryValues()
         dirtyTan = ""
      } else if (
         (dropdown.value == "degrees" && (conditionedAngle == 330 || conditionedAngle == -30)) ||
         (dropdown.value == "piRad" && math.equal(conditionedAngle, math.fraction("11/6"))) ||
         math.equal(conditionedAngle, math.fraction("-1/6"))
      ) {
         x = `<mi><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></mn>`
         y = `<mi><mfrac><mrow><mo>-</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mn>`
         tan = `<mi><mfrac><mrow><mo>-</mo><msqrt><mn>3</mn></msqrt></mrow><mn>3</mn></mfrac></mn>`
         calcOrdinaryValues()
      } else calcOrdinaryValues()

      resultElement.style.color = "black"

      function calcOrdinaryValues() {
         if (dropdown.value == "degrees") {
            dirtyX = `<mn>${+Math.cos((conditionedAngle * Math.PI) / 180).toFixed(numDecimals)}</mn>`
            dirtyY = `<mn>${+Math.sin((conditionedAngle * Math.PI) / 180).toFixed(numDecimals)}</mn>`
            dirtyTan = `<mn>${+Math.tan((conditionedAngle * Math.PI) / 180).toFixed(numDecimals)}</mn>`
         } else if (dropdown.value == "radians") {
            dirtyX = `<mn>${+Math.cos(conditionedAngle).toFixed(numDecimals)}</mn>`
            dirtyY = `<mn>${+Math.sin(conditionedAngle).toFixed(numDecimals)}</mn>`
            dirtyTan = `<mn>${+Math.tan(conditionedAngle).toFixed(numDecimals)}</mn>`
         } else if (dropdown.value == "piRad") {
            dirtyX = `<mn>${+Math.cos(conditionedAngle * Math.PI).toFixed(numDecimals)}</mn>`
            dirtyY = `<mn>${+Math.sin(conditionedAngle * Math.PI).toFixed(numDecimals)}</mn>`
            dirtyTan = `<mn>${+Math.tan(conditionedAngle * Math.PI).toFixed(numDecimals)}</mn>`
         }
         resultElement.style.color = "black"
      }
   }

   function addEqualsSign() {
      if (x !== "") cleanXYEquals = `<mo>=</mo>`
      else cleanXYEquals = ""
      if (dirtyX !== "") dirtyXYEquals = `<mo>=</mo>`
      else dirtyXYEquals = ""
      if (tan !== "") cleanTanEquals = `<mo>=</mo>`
      else cleanTanEquals = ""
      if (dirtyTan !== "") dirtyTanEquals = `<mo>=</mo>`
      else dirtyTanEquals = ""
   }

   MathJax.typesetPromise()
}

function clearForm() {
   const resultElement = document.querySelector("#unitCircleCalculator .result")

   resultElement.innerHTML = ""
   resultElement.style.color = "black"
}
