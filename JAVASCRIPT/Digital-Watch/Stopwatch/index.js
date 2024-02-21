const div = document.querySelector("div")

let sec = 0
let min = 0

const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")

start.addEventListener("click", () => {

    let time1 = setInterval(function(){
        
        sec++
        console.log(sec, min);
        div.innerText = `${sec} s`

        if (sec > 60) { 
            div.innerText = `${min} m`
        }
    
        stop.addEventListener("click", () => {
        clearInterval(time1)
    })
    }, 1000)

    reset.addEventListener("click", () => {
        sec = 0
        min = 0
        div.innerText = 0
        clearInterval(time1)
        clearInterval(time2)
    }) 

    let time2 = setInterval(() => {
        min++
        stop.addEventListener("click", () => {
            clearInterval(time2)
        })
    }, 60000)   
    
})