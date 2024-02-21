// Types of calculation -->

let generalCalculation = true
let metricCalculation = false

// Selecting Elements --->

const weight1 = document.querySelector("#weight1")
const height1 = document.querySelector("#height1")
const weight2 = document.querySelector("#weight2")
const height2 = document.querySelector("#height2")
const calculate1 = document.querySelector("#calculate1")
const calculate2 = document.querySelector("#calculate2")
const result = document.getElementsByClassName("result")
const conclusion = document.querySelector("#conclusion")
const reset = document.querySelector("#reset")
const general = document.querySelector("#general-button")
const metric = document.querySelector("#metric-button")
const weightUnit = document.getElementById("weightUnit")
const heightUnit = document.getElementById("heightUnit")

// Calculation --->

// General Calculator --->

calculate1.addEventListener("click", () => {
    calculate(weight1.value, height1.value, 0)
})

// Metric Calculator --->

// Variables for metric calculator --->

let weight = Number(weight2.value)
let height = Number(height2.value)

// Event listeners for unit changes in metric calculator -->

weightUnit.addEventListener("change", function() {
    const selectedOption = this.options[this.selectedIndex].value
    
    switch (selectedOption) {
        case "KiloGrams":
            weight = Number(weight2.value)
            break
        case "Grams":
            weight = Number(weight2.value) / 1000 // grams to KGS
            break
        case "Pounds":
            weight = Number(weight2.value) * 0.453592 // Pounds to KGs
            break
    }
})

heightUnit.addEventListener("change", function() {
    const selectedOption = this.options[this.selectedIndex].value
    switch (selectedOption) {
        case "Meters":
            height = (height2.value)
            break
        case "Centimeters":
            height = (height2.value) / 100 //  CMs to Ms
            break
        case "Inches":
            height = (height2.value) * 0.0254 // Inches to Ms
            break
    }
})

// Calculation for metric calculator --->

calculate2.addEventListener("click", () => {
    // Updating the weight and height based on the selected units --> 

    weightUnit.dispatchEvent(new Event("change"))
    heightUnit.dispatchEvent(new Event("change"))
    
    calculate(weight, height, 1)
})

// Function to calculate BMI --->

function calculate(weight, height, indexNumber) { 
    let BMI = (weight / (height * height)).toFixed(2)
    for (let i = 0; i < result.length; i++) {
        const element = result[indexNumber] // Specific index number for a specific calculator
        if (!(weight === "" || height === "")) {
            if (!(weight <= 0 || height <= 0)) {
                element.innerHTML = `BMI: ${BMI} kg/m<sup>2</sup>`
            } else {
                element.innerHTML = "Please enter a valid number!" // If a negative integer or 0 has been input
            }
        } else {
            element.innerHTML = "Please fill all the required fields!" // If either of the input fields is empty
        }
    }

    // Conclusion to display after the result --->

    let summary1 = ""
    let summary2 = ""

    if (!(weight === "" || height === "") && !(weight <= 0 || height <= 0)) {
        switch (true) {
            case BMI > 0 && BMI < 16:
                summary1 = "You are Underweight!"
                summary2 = "(You are Severely Thin!!)"
                break      
            case BMI > 16 && BMI < 17:
                summary1 = "You are Underweight!"
                summary2 = "(You are Moderately Thin!!)"
                break  
            case BMI > 17 && BMI < 18.5:
                summary1 = "You are Underweight!"
                summary2 = "(You are Mildly Thin!!)"
                break    
            case BMI > 18.5 && BMI < 25:
                summary1 = "You are Normal."
                break    
            case BMI > 25 && BMI < 30:
                summary1 = "You are Overweight!"
                break    
            case BMI > 30 && BMI < 35:
                summary1 = "You are Obese!"
                summary2 = "(Class I Obesity!)"
                break    
            case BMI > 35 && BMI < 40:
                summary1 = "You are Obese!"
                summary2 = "(Class II Obesity!)"
                break    
            case BMI >= 40:
                summary1 = "You are Obese!"
                summary2 = "(Class III Obesity!)"
                break 
        }
    } 

    conclusion.innerHTML = `<span>${summary1}</span><span>${summary2}</span>`

    // Reset --->

    const nav = document.querySelector("nav")
    nav.style.visibility = "visible" // Once a calculation is done, it should be displayed

    reset.addEventListener("click", () => {
        // Once the reset button is clicked, everything should change to their initial value -->

        height = ""
        weight = ""

        Array.from(result).map((ele) => { // changing HTML collection to an array
            ele.innerHTML = ""
        })

        conclusion.textContent = ""

        nav.style.visibility = "hidden" // Once everything is set to their initial value, the reset button should again disappear!
    })
}    

// Different calculators --->

general.addEventListener("click", () => {
    generalCalculation = true
    metricCalculation = false

    let general = document.getElementById("general-calculator")
    general.style.visibility = "visible"

    let metric = document.querySelector("#metric-calculator")
    metric.style.visibility = "hidden"

    conclusion.textContent = "" // The conclusive statement should be removed once a calculator is changed
})

metric.addEventListener("click", () => {
    metricCalculation = true
    generalCalculation = false

    let general = document.getElementById("general-calculator")
    general.style.visibility = "hidden"

    let metric = document.querySelector("#metric-calculator")
    metric.style.visibility = "visible"

    conclusion.textContent = "" // // The conclusive statement should be removed once a calculator is changed
})