// Selecting Elements --->

const password = document.getElementById("password")
const generatePassword = document.getElementById("generatePassword")
const copyToClipboard = document.getElementById("copyToClipboard")
const passwordLength = document.getElementById("passwordLength")
const uppercase = document.getElementById("uppercase")
const lowercase = document.getElementById("lowercase")
const numbers = document.getElementById("includeNumbers")
const symbols = document.getElementById("includeSymbols")

// conditional values -->

let array = [] // this array will contain the password characters
let includeUppercase = true
let includeLowercase = true
let includeNumbers = true
let includeSymbols = true
// (all of these things will be included at first)

// Password String -->

const passwordString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_" // these are the password characters out of which a password will be generated

// code logic to generate password -->

generatePassword.addEventListener("click", () => {

    for (let i = 0; i < passwordString.length; i++) {

        const element = passwordString[i * randomTarget()]; // this helps to shuffle between characters, so that the password is not always linear

        array.push(element) // clicking the button will push the characters to this array

        let stringArray = array.join("") // this will store the string value of the array content without any space

        let random = randomNumber() // this stores the return value of the randomNumber() function that is a random number from 0 to 73 (String Length)

        // it will show the array content inside the password box -->

        let passwordValue = password.value = stringArray.substring(random, random + Number(passwordLength.value))  // this takes a substring out of the string from a random position and maintains the length to be whatever is the selected length of the password. I converted the value into a Number, because the default value was a string.

        if (passwordLength.value <= 8) {
            password.value = stringArray.substring(random, random + 8) // this takes a substring out of the string from a random position and maintains the default length to be 8
        } else if (passwordLength.value > 8 && passwordLength.value <= 73){
            password.value = passwordValue // if the value is more than 8 and less than 73, that specific number of characters will be displayed.
        } 
        
        password.value = applyAllConditions(passwordValue)

        copyToClipboard.addEventListener("click", () => {
            navigator.clipboard.writeText(password.value) // this method copies the specified text to the clipboard
        })
    }
}, false)




// switch to include or not include characters -->

passwordLength.addEventListener("click", () => {

    if (passwordLength.value < 8){
        alert("The minimun value is 8") // lowering the value will alert the user that the minimum length of the password is 8 and it remains unchanged unless incremented
    } else if (passwordLength.value > 73){
        alert("The maximun length is 73") // increasing beyond 73 the value will alert the user that the maximum length of the password is 73 and it remains unchanged unless decremented
    }

}, false)
uppercase.addEventListener("click", () => {
    includeUppercase = change(includeUppercase) // it stores the negated value
}, false)
lowercase.addEventListener("click", () => {
    includeLowercase = change(includeLowercase) // it stores the negated value
}, false)
numbers.addEventListener("click", () => {
    includeNumbers = change(includeNumbers) // it stores the negated value
}, false)
symbols.addEventListener("click", () => {
    includeSymbols = change(includeSymbols) // it stores the negated value
}, false)

// function to change an element's state -->

function change(includeX) {
    return !includeX // it returns the negation of the value
    // I am returning the negated value because String being a primitive data type doesn't change the original value but the copy of it. So, in order to change the original value, I need to store the returned value
}

// function to generate a random number from 0 to 73 -->

function randomNumber() {
    let randomNumber = Math.floor(Math.random() * 73)
    console.log(randomNumber)
    return randomNumber
}

// function to generate a random number from 0 to 10 -->

function randomTarget() {
    let randomNumber = Math.floor(Math.random() * 10)
    return randomNumber
}

// function to include multiple conditionals specified by the user --->

function applyAllConditions(passwordValue) {
    if (!includeUppercase) {
        passwordValue = passwordValue.toLowerCase();
    }
    if (!includeLowercase) {
        passwordValue = passwordValue.toUpperCase();
    }
    if (!includeNumbers) {
        passwordValue = passwordValue.replace(/[1234567890]/g, 'x');
    }
    if (!includeSymbols) {
        passwordValue = passwordValue.replace(/[!@#$%^&*()_]/g, 'z');
    }
    if (!includeUppercase && !includeLowercase) {
        passwordValue = passwordValue.replace(/[a-zA-Z]/g, '%');
    }
    if (!includeUppercase && !includeNumbers) {
        passwordValue = passwordValue.toLowerCase().replace(/[1234567890]/g, 'x');
    }
    if (!includeUppercase && !includeSymbols) {
        passwordValue = passwordValue.toLowerCase().replace(/[!@#$%^&*()_]/g, 'z');
    }
    if (!includeLowercase && !includeNumbers) {
        passwordValue = passwordValue.toUpperCase().replace(/[1234567890]/g, 'x');
    }
    if (!includeLowercase && !includeSymbols) {
        passwordValue = passwordValue.toUpperCase().replace(/[!@#$%^&*()_]/g, 'z');
    }
    if (!includeNumbers && !includeSymbols) {
        passwordValue = passwordValue.replace(/[1234567890!@#$%^&*()_]/g, 'r');
    }
    if (!includeUppercase && !includeLowercase && !includeNumbers) {
        passwordValue = passwordValue.replace(/[a-zA-Z0-9]/g, '&');
    }
    if (!includeUppercase && !includeLowercase && !includeSymbols) {
        passwordValue = passwordValue.replace(/[a-zA-Z!@#$%^&*()_]/g, '8');
    }
    if (!includeUppercase && !includeNumbers && !includeSymbols) {
        passwordValue = passwordValue.toLowerCase().replace(/[1234567890!@#$%^&*()_]/g, 'x');
    }
    if (!includeLowercase && !includeNumbers && !includeSymbols) {
        passwordValue = passwordValue.toUpperCase().replace(/[1234567890!@#$%^&*()_]/g, 'z');
    }
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
        passwordValue = passwordValue.replace(/[a-zA-Z0-9!@#$%^&*()_]/g, '');
    }
    return passwordValue;
}