import { useSelector } from "react-redux";

import FootballPitch from "../../footballPitch/footballPitch.component";

import { useState } from "react";

function GameArea() {
  const [done, setDone] = useState(false);

  function whenDone() {
    if (done) return;
    setDone(true);
  }

  const isGameActive = useSelector((state) => state.guessEleven.isGameActive);
  const { introDone } = useSelector((state) => state.video);
  
  return (
    <div className='game-screen-container'>
      {isGameActive ? (
        <FootballPitch></FootballPitch>
      ) : (
        <div
          onLoad={whenDone()}
          className={`game-area-container 
           area-background-inactive
        `}
        ></div>
      )}
      {/*  */}
    </div>
  );
}

export default GameArea;
