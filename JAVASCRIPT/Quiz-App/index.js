let scoreNumber = 0 // it tracks the score
let optionChosen = false // it looks if any of the options is chosen or not
let numberOfQuestion = 1 // it tracks the number of questions

// Selecting Elements -->

const body = document.body
const options = document.getElementsByClassName("options")
const question = document.getElementById("question")
let score = document.getElementById("score")
const next = document.getElementById("next")
const questionNumber = document.getElementById("questionNumber")
const header = document.querySelector("header")
const main = document.querySelector("main")
const restart = document.getElementById("restart")
let h1 = document.createElement("h1") // it will be displayed once all the questions have been answered
let results // it stores the first object of the results array 
let questions // it stores the question of the first object
let correct // it stores the correct answer of the first question
let incorrect // it stores the incorrect answers that is again an array
let answers // it stores the destructured elements as a single answer

// Fetching API --->

function fetchQuestions() {
    const questionsData = fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple")
    questionsData
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
    
        
        // data is in JSON format, it has a "results" property that is an array with different questions as objects
    
        results = data.results[0] 
        questions = results.question
        correct = results.correct_answer
        incorrect = results.incorrect_answers
        answers = [correct, ...incorrect]

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

        // function for next question -->
        
        function nextQuestion() {
            if (optionChosen) { // next question will be proceeded only if an option has been chosen

                numberOfQuestion++ // the question number will increase

                // values will be updated accordingly -->

                results = data.results[randomIndex()]
                questions = results.question
                correct = results.correct_answer
                incorrect = results.incorrect_answers
                answers = [correct, ...incorrect]
                question.innerText = `${questions}`
        
                questionNumber.innerText = `Question: ${numberOfQuestion}/10`
        
                answers.sort(() => Math.random() - 0.5)
        
                options[0].innerText = `${answers[0]}`
                options[1].innerText = `${answers[1]}`
                options[2].innerText = `${answers[2]}`
                options[3].innerText = `${answers[3]}`
        
                Array.from(options).forEach(ele => {
                    ele.style.border = "1px solid #1d1c1c"
                    ele.style.color = "black"
                })
        
                optionChosen = false
        
                // Once it reaches the 10th question, the result will be displayed

                if (numberOfQuestion === 10) {
                    header.style.display = "none"
                    main.style.display = "none"
                    h1.innerText = `Your Score is ${scoreNumber}`
                    h1.style.color = "black"
                    body.append(h1)
                    body.style.display = "flex"
                    body.style.flexDirection = "column"
                    body.style.gap = "10px"
                    body.style.justifyContent = "center"
                    body.style.alignItems = "center"
                    body.style.fontFamily = "roboto"
                    restart.style.visibility = "visible"
                }
            }
        }

        // next --->

        next.addEventListener("click", nextQuestion)

        // restart -->

        restart.addEventListener("click", () => {
            h1.remove()
            body.style.display = "block"
            header.style.display = "flex"
            main.style.display = "block"
            restart.style.visibility = "hidden"
            scoreNumber = 0
            score.innerText = `Score: ${scoreNumber}`
            numberOfQuestion = 1
            questionNumber.innerText = `Question: ${numberOfQuestion}/10`
            fetchQuestions()
        })
    })
}

fetchQuestions()

// function to generate a random Index from 0 to 9 -->

function randomIndex() {
    return Math.floor(Math.random() * 10)
}

