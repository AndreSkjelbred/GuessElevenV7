import Image from "next/image";
import { useEffect } from "react";
import createHigherLowerRound from "@/store/makeHigherLowerRound/makeHigherRound";
import { useDispatch, useSelector } from "react-redux";
import HomeNavbar from "@/components/home/homeNavbar/homeNavbar.component";
import {
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
  FaSync,
} from "react-icons/fa";
import { useState } from "react";

function HigherLower() {
  const [lost, setLost] = useState(false);
  const [score, setScore] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    createHigherLowerRound(dispatch, 2);
  }, []);

  const { higherPlayerData1 } = useSelector((state) => state.higher);
  const { higherPlayerData2 } = useSelector((state) => state.higher);

  function restartGame() {
    setScore(0);
    setLost(false);
    createHigherLowerRound(dispatch, 2);
  }

  function guessHandler(guess) {
    if (guess === 2) {
      if (higherPlayerData2.marketValue <= higherPlayerData1.marketValue) {
        setScore((score) => (score += 1));
        createHigherLowerRound(dispatch, 1, higherPlayerData2);
      } else {
        setLost(true);
      }
    } else {
      if (higherPlayerData2.marketValue >= higherPlayerData1.marketValue) {
        setScore((score) => (score += 1));

        createHigherLowerRound(dispatch, 1, higherPlayerData2);
      } else {
        setLost(true);
      }
    }
  }

  return (
    <div className='higher-lower-page-container'>
      <HomeNavbar />
      {lost && (
        <div className='play-again-higher-lower'>
          <h2 className='play-again-score'>Total Score :</h2>
          <h2 className='play-again-score'>{score}</h2>
          <h2 className='play-again-score'>Play Again :</h2>
          <FaSync onClick={restartGame} className='play-again-higher-btn' />
        </div>
      )}

      <div className=' higher-lower-back-image'>
        <Image fill src='/higherlower.jpeg' />
      </div>

      {higherPlayerData1?.name?.length &&
        higherPlayerData2?.name?.length &&
        !lost && (
          <div className='higher-lower-game-container'>
            <div className='higher-player left-side-player'>
              <h3 className='higher-player-name'>NAME :</h3>
              <h3 className='higher-player-name'>{higherPlayerData1.name}</h3>
              <h3 className='higher-player-name'>MARKET VALUE :</h3>
              <h3 className='higher-player-name'>
                {higherPlayerData1.marketValue.toLocaleString("en-US", {
                  useGrouping: true,
                })}
              </h3>
              <div className='higher-img-container'>
                <Image fill src={higherPlayerData1.imgSrc} />
              </div>
            </div>
            <div className='arrow-container'>
              <h2>{score}</h2>
              <FaArrowAltCircleUp
                className=' info-btn-icon'
                onClick={() => guessHandler(1)}
              />
              <FaArrowAltCircleDown
                className=' info-btn-icon'
                onClick={() => guessHandler(2)}
              />
            </div>
            <div className='higher-player right-side-player'>
              <h3 className='higher-player-name-right'>NAME :</h3>
              <h3 className='higher-player-name-right'>
                {higherPlayerData2.name}
              </h3>
              <h3 className='higher-player-name-right'>MARKET VALUE :</h3>
              <h3 className='higher-player-name-right'>?</h3>
              <div className='higher-img-container-right'>
                <Image fill src={higherPlayerData2.imgSrc} />
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default HigherLower;
