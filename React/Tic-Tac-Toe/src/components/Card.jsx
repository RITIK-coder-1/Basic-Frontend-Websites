import React from 'react'
import { SlGameController } from "react-icons/sl"; // imported a game sticker from react-icons

function Card({callback, Icon}) {

  return (
    // I passed the callback argument to onClick, this argument will be the event function in the main app file

    <div id='card' onClick={callback}> 

      <SlGameController />  {/* used teh sticker for a better showcase of the cards*/}

      <div id="card-container"> {/* container to contain the icons so that they don't get affected by the presence of the game sticker */}

      {Icon && <Icon style={{height: "50px", width: "50px"}}/>} {/* Icon will be rendered only when it is not a falsy value (shortcircuting)*/}

      </div>

    </div>
  )
}

export default Card
