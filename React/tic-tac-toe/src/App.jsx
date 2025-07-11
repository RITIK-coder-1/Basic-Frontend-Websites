import React, { useState } from 'react'
import Card from './components/Card' // imported the Card component
import { FaRegCircle } from "react-icons/fa6"; // the circle icon from react icons
import { RxCross2 } from "react-icons/rx"; // the cross icon from react icons
import { ToastContainer, toast } from 'react-toastify'; // imported the toast container

import 'react-toastify/dist/ReactToastify.css'; // imported the toast container CSS

function App() {

  let circle = "O" // this represents the circle value
  let cross = "X" // this represents the cross value

  let [turn, changeTurn] = useState(true) // this indicates the turn value, if it is true, the turn will be "O" else "X". It is true by default
  let [cards, setCard] = useState(Array(9).fill(null)) // this stores an array of values to represent the state of cards, where each element represents the state of an individual card. Initially, the value is null so that no card is flipped
  let [winner, setWinner] = useState(null) // it checks the winner, whose initial value is null
  let [selected, change] = useState(0) // it tracks the number of items got selected
  let newCards = [...cards] // As the state of the original array shouldn't be changed in React, this copy of the original array stores all its elements and will get modified

  // function to change the state of the turn -->

  function click(index){

    if (cards[index] !== null || winner) return // if the current element of the array has a not-null value or there is a winner, stop listening to the user event
    
    newCards[index] = turn ? FaRegCircle : RxCross2 // if turn is true, the current index value will hold the circle value, else the cross value
    setCard(newCards) // once the copy card has been updated, this function will update the original card
    changeTurn(!turn) // clicking any card would change the turn

    const win = isWinner(newCards, turn ? FaRegCircle : RxCross2) // if the turn is true, it is circle, else it is cross. The specified value gets into "win"
    
    if (win){
      setWinner(win) // if win is not null, it updates the winner variable
      if (turn) {
        toast.success(`The Winner is ${circle}`) // toast message to display
      } else {
        toast.success(`The Winner is ${cross}`) // toast message to display
      }
    }

    if (!cards.includes(null) && winner === null) {
      toast("lala")
    }

    change(++selected) // once a card is selected, increase its value by 1

    if (selected === 9 && win === null) { // if all the cards are selected and there is no winner
      
      restart(win) // restarted the game with the specific "win" condition

    }
  
  }

  // function to restart the game -->

  function restart(win) {
      if (win === null) {
        toast("No Winner: Starting The Game Again!") // if there is no winner
      } else {
        toast("Starting the game again") // if there is a winner
      }
      for (let i = 0; i < cards.length; i++) {
        newCards[i] = null // set the value of each newCards element as null
      }
      setCard(newCards) // update the original card
      setWinner(null) // update the winner to null
      change(0) // update the number of selected cards to 0
      changeTurn(true) // update the turn
  }  

  // function to check the winner --> It checks each index of the card, if it matches with the symbol or not

  function isWinner(card, symbol) { 

    // Check rows
    if (card[0] === symbol && card[1] === symbol && card[2] === symbol) return symbol;
    if (card[3] === symbol && card[4] === symbol && card[5] === symbol) return symbol;
    if (card[6] === symbol && card[7] === symbol && card[8] === symbol) return symbol;

    // Check columns
    if (card[0] === symbol && card[3] === symbol && card[6] === symbol) return symbol;
    if (card[1] === symbol && card[4] === symbol && card[7] === symbol) return symbol;
    if (card[2] === symbol && card[5] === symbol && card[8] === symbol) return symbol;

    // Check diagonals
    if (card[0] === symbol && card[4] === symbol && card[8] === symbol) return symbol;
    if (card[2] === symbol && card[4] === symbol && card[6] === symbol) return symbol;

      

    return null; // if it matches, return the matching symbol which gets stored inside the win variable. If it doesn't match at all, return null

    

  }

  return (
    <> 
    <nav>
    <button onClick={restart}>RESTART</button> 
    </nav>
    <h1>Tic Tac Toe</h1>

    {
    winner !== null // if there is a winner
  ? (!turn)
      ? <span>{`Congratulations! The Winner is: ${circle}`}</span> // if the next turn is false, the winner must be "O"
      : <span>{`Congratulations! The Winner is: ${cross}`}</span> // if the next turn is true, the winner must be "X"
  : (turn) // if there is not winner, winner = null
      ? <span>Turn: {circle}</span> // if the turn is true, it is "O"
      : <span>Turn: {cross}</span> // if the turn is false, it is "X"
    }


    <div id='container'>

      {/* it iterates over the entire array, generating a new card. "ele" represents the current index value, which could either be a circle or a cross depending upon the turn. "ind" represents the index value of the element. The Icon gets the current value of the element, and the callback is triggered basis on the index value*/}

      {cards.map((ele, ind) => { 
        return <Card key={ind} Icon={ele} callback={() => click(ind)}/>
      })}

      {/* As there are 9 elements in the array, 9 cards will be generated */}

    </div>    

    {/* Toast  */}
    
    <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition: Bounce
      />
    </>

  )
}

export default App
