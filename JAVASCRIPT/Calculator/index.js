let array = [] // array to store numbers and perform arithmetic operations
let operation // it will decide the type of operation

// Selecting elements --->

const screen = document.getElementById("screen")
screen.value = ""

const zero = document.getElementById("zero")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")

const add = document.getElementById("add")
const sub = document.getElementById("sub")
const multiply = document.getElementById("multiply")
const divide = document.getElementById("divide")
const equals = document.getElementById("equals")

const clear = document.getElementById("clear")

// Operations --->

add.addEventListener("click", () => {
    operation = "add"
    display("+")
})
sub.addEventListener("click", () => {
    operation = "sub"
    display("-")
})
multiply.addEventListener("click", () => {
    operation = "multiply"
    display("*")
})
divide.addEventListener("click", () => {
    operation = "divide"
    display("/")
})

equals.addEventListener("click", () => {
    // clicking the equal button will calculate on the basis of these conditions --->

    let initialvalue = 0
    let result = 0 

    if (operation === "add" || operation === "sub") {
        result = array.reduce((accumulator, element) => accumulator + element, initialvalue)
    } else if (operation === "multiply") {
        initialvalue = 1
        result = array.reduce((accumulator, element) => accumulator * element, initialvalue)
    } else if (operation === "divide") {
        for (let i = 0; i < array.length; i++) {
            result = array[i] / array[i + 1]
            break;
        }
    }

    array = [] // the array should get empty once a calculation is done
    operation = undefined // the operation should again reset to its original value
    screen.value = result
    console.log(result);
})
// clicking numbers --->

numberListener(zero, 0)
numberListener(one, 1)
numberListener(two, 2)
numberListener(three, 3)
numberListener(four, 4)
numberListener(five, 5)
numberListener(six, 6)
numberListener(seven, 7)
numberListener(eight, 8)
numberListener(nine, 9)


clear.addEventListener("click", () => {
    screen.value = ""
    array = []
})

// hidding placeholder while calculations --->

screen.addEventListener("input", () => {
    if (screen.value === ""){
        screen.placeholder = 0
    } else {
        screen.placeholder = ""
    }
})

// add items function --->
function addItems(button) {
    // if (typeof array[array.length - 1] === 'number') {
  
    //     array[array.length - 1] = array[array.length - 1] * 10 + button;
    // } else {
      
        array.push(button);
    // }
    console.log(array);
    
    // Immediately Invoked Function to update screen value with numbers --> 

    (() => {

        if (button < 0){
            button *= -1 
            // button should be displayed positive as the "-" sign will have already been displayed by the "sub" button onto the screen
        }

        // Concatenating the clicked value to the current value

        let newValue = screen.value + button;
        
        // Updating the display with the new value
        screen.value = newValue;
    })()
}

// Function to update the screen value with signs -->

function display(button) {
    let newValue = screen.value + button

    screen.value = newValue
}

// function to push signed numbers -->

function numberSign(num) {
    switch (operation) {
        case undefined:
            addItems(num)
            break; 
        case "add":
            addItems(num)
            break;  
        case "sub":
            addItems(-num)
            break;
        case "multiply":
            addItems(num) 
            break;
        case "divide":
            addItems(num)
            break;       
    }
}

// function for clicking numbers --->

function numberListener(button, num) {
    button.addEventListener("click", () => numberSign(num))
}