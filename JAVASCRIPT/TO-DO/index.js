let number = 0 // it counts the number of todo
let tasks = 0 // it counts the number of tasks done

// Selecting Elements --->

const body = document.body
const add = document.getElementById("add-button")
const input = document.getElementById("todo-input")
const todoList = document.getElementById("todo-list")
const reset = document.getElementById("reset")
const nav = document.querySelector("nav")
const container = document.getElementById("container")
const numberOfToDo = document.querySelector("nav > div > span")
const tasksDone = document.querySelector("nav > div > span + span")

// creating a task -->

add.addEventListener("click", () => {
    createToDo()
})

// function to create a task --->

function createToDo() {

    const todoItem = document.createElement("li") // it creates a list item
    todoItem.className = "todo-item"
    const todo = document.createElement("input") // it creates an input box of type text
    todo.type = "text"
    todo.className = "undone"
    todo.value = input.value // it takes the value whatever was written while creating a todo
    todoItem.append(todo) // the list item takes the input
    const checkbox = document.createElement("input")  // it creates a checkbox
    checkbox.type = "checkbox"
    checkbox.title = "Done"
    const removeButton = document.createElement("button") // it creates a button
    removeButton.title = "Delete"
    const remove = document.createElement("img") // it creates a delete image
    remove.src = "remove.png"
    removeButton.append(remove) // the button contains the image
    const checkboxContainer = document.createElement("div") // it creates a div container
    checkboxContainer.className = "checkbox-container"
    checkboxContainer.append(checkbox) // the container gets the checkbox
    checkboxContainer.append(removeButton) // the container also gets the button
    todoItem.append(checkboxContainer) // the list item gets the container
    
    // input value isn't empty, it will create a task containing that value --->

    if (!(input.value === "")) {
        todoList.append(todoItem)
        number++ // number of ToDos will increase
        numberOfToDo.textContent = `To Dos: ${number}`
        tasksDone.textContent = `Tasks Done: ${tasks}`
        nav.style.visibility = "visible" // the reset button will be visible
    }

    input.value = "" // once a task is created, the input will get empty

    checkbox.addEventListener("click", () => {
        if (!(todo.style.textDecoration === "line-through")) {
            todo.style.textDecoration = "line-through" // the checkbox checks an unchecked task
            tasks++ // the number of done tasks increase
            tasksDone.textContent = `Tasks Done: ${tasks}`
            todo.className = "done"
        } else {
            todo.style.textDecoration = "none" // it unchecks a checked task
            tasks-- // the number of done tasks decrease
            tasksDone.textContent = `Tasks Done: ${tasks}`
            todo.className = "undone"
            if (tasks < 0){
                tasksDone.textContent = `Tasks Done: ${0}` // the number of done tasks shouldn't be negative
            }
        }
    })

    remove.addEventListener("click", () => {
        todoItem.remove() // it removes a task
        number-- // number of ToDos decrease
        if (todo.className === "done") {
            tasks-- // the number of done tasks will decrease only if a checked task is deleted
        }
        checkboxContainer.remove()
        numberOfToDo.textContent = `To Dos: ${number}`
        tasksDone.textContent = `Tasks Done: ${tasks}`
        if (tasks < 0){
            tasksDone.textContent = `Tasks Done: ${0}` // the number of done tasks shouldn't be negative
        }
    })
}

reset.addEventListener("click", () => {
    // it resets everything to its initial value -->
    
    number = 0
    tasks = 0
    const todo = document.querySelectorAll(".todo-item")
    todo.forEach(ele => ele.remove())

    numberOfToDo.textContent = ""
    nav.style.visibility = "hidden"
})