let scoreNumber = 0 // it tracks the score
let optionChosen = false // it looks if any of the options is chosen or not
let numberOfQuestion = 1 // it tracks the number of questions
let array = [] // it stores questions

// Selecting Elements -->

const options = document.getElementsByClassName("options")
const question = document.getElementById("question")
let score = document.getElementById("score")
const next = document.getElementById("next")
const questionNumber = document.getElementById("questionNumber")
const header = document.querySelector("header")
const main = document.querySelector("main")

// Fetching API --->

const questionsData = fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple")
questionsData
.then(Response => Response.json())
.then(data => {
    console.log(data);

    // data is in JSON format, it has a "results" property that is an array with different questions as objects

    let results = data.results[0] // it stores the first object of the results array 
    array.push(data.results[0]) // the question is pushed to the array
    let questions = results.question // it stores the question of the first object
    let correct = results.correct_answer // it stores the correct answer of the first question
    let incorrect = results.incorrect_answers // it stores the incorrect answers that is again an array
    let answers = [correct, ...incorrect] // it stores the destructured elements as a single answer

    question.innerText = `${questions}` // the question is displayed on the page

    answers.sort(() => Math.random() - 0.5) // the array is sorted in order to shuffle the elements randomly so that no two options get the same answer

    // options are displayed on the page -->

    options[0].innerText = `${answers[0]}` 
    options[1].innerText = `${answers[1]}`
    options[2].innerText = `${answers[2]}`
    options[3].innerText = `${answers[3]}`

    Array.from(options).forEach(ele => {

        // when an option is selected -->

        ele.addEventListener("click", () => {
            if (!optionChosen) {

                // if no option is chosen then it will perfrom the action -->

                if (ele.innerText === correct) {
                    ele.style.border = "2px solid green" // correct answer gets green
                    ele.style.color = "green"
                    scoreNumber++ // score number is increased
                    score.innerText = `Score: ${scoreNumber}` // the score is updated on the page correspondingly
                } else {
                    ele.style.border = "2px solid red" // incorrect answer gets red
                    ele.style.color = "red"

                    // if an incorrect answer is chosen, the correct answer will automatically be highlighted -->

                    Array.from(options).forEach(ele => {
                        if (ele.innerText === correct) {
                            ele.style.border = "2px solid green" 
                            ele.style.color = "green"
                        }
                    })
                }
            }
            optionChosen = true // once an option is selected, the option chosen becomes true
        })
    })
    
    next.addEventListener("click", () => {

        // it will take to the next question only if an option has been selected -->

        if (optionChosen) {
                        
            // all the values are updated accordingly -->

            if (!(array.includes(data.results[randomIndex()]))) { 
                results = data.results[randomIndex()] // only if a question is unique
            }
            
            
            questions = results.question
            correct = results.correct_answer
            incorrect = results.incorrect_answers
            answers = [correct, ...incorrect]
            question.innerText = `${questions}`
    
            numberOfQuestion++ // the question number is increased
    
            questionNumber.innerText = `Question: ${numberOfQuestion}/10` // it is updated on the page
            
            answers.sort(() => Math.random() - 0.5)            
    
            options[0].innerText = `${answers[0]}`
            options[1].innerText = `${answers[1]}`
            options[2].innerText = `${answers[2]}`
            options[3].innerText = `${answers[3]}`

            // the options get back to their default style -->

            Array.from(options).forEach(ele => {
                ele.style.border = "1px solid #1d1c1c"
                ele.style.color = "black"
            }) 

            optionChosen = false // option chosen gets its initial value back 

            // once it reaches the 10th question, the next page displays the result -->
            
            if (numberOfQuestion === 10) {
                next.addEventListener("click", () => {
                    header.remove()
                    main.remove()
                    let h1 = document.createElement("h1")
                    h1.innerText = `Your Score is: ${scoreNumber}`
                    h1.style.color = "black"
                    document.body.append(h1)
                    document.body.style.display = "flex"
                    document.body.style.justifyContent = "center"
                    document.body.style.alignItems = "center"
                    document.body.style.fontFamily = "roboto"
                })
            }
        }
    })        
})

// function to generate a random Index from 0 to 9 -->

function randomIndex() {
    return Math.floor(Math.random() * 10)
}