import Image from "next/image";
import { useEffect, useRef } from "react";
import createHigherLowerRound from "@/store/makeHigherLowerRound/makeHigherRound";
import { useDispatch, useSelector } from "react-redux";
import HomeNavbar from "@/components/home/homeNavbar/homeNavbar.component";
import {
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
  FaSync,
} from "react-icons/fa";
import { useState } from "react";
import Sidebar from "@/components/generalGameComponents/sidebar/sidebar.component";
import { Fragment } from "react";
import BlurScreen from "@/screens/blurScreen/blurScreen.component";
import { higherLowerText } from "@/text/text";

function HigherLower() {
  const firstPlayer = useRef(null);
  const secondPlayer = useRef(null);
  const thirdPlayer = useRef(null);
  const guessPlayerBackground = useRef(null);
  const mainScreen = useRef(null);
  const lostScreen = useRef(null);

  const [guessing, setGuessing] = useState(false);
  const [lost, setLost] = useState(false);
  const [score, setScore] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    createHigherLowerRound(dispatch, 3);
  }, []);

  const { higherPlayerData1 } = useSelector((state) => state.higher);
  const { higherPlayerData2 } = useSelector((state) => state.higher);
  const { higherPlayerData3 } = useSelector((state) => state.higher);

  function restartGame() {
    setScore(0);
    setLost(false);
    createHigherLowerRound(dispatch, 3);
  }

  function fadeScreen() {
    guessPlayerBackground.current.classList?.add("red-screen");
    setTimeout(() => {
      guessPlayerBackground.current?.classList.remove("red-screen");
      mainScreen.current?.classList.add("fade-screen-out");
      setTimeout(() => {
        mainScreen.current?.classList.remove("fade-screen-out");
        setLost(true);
      }, 500);
    }, 500);
  }

  function slidePlayers() {
    setScore((score) => (score += 1));
    firstPlayer.current.classList.add("player-slide-one");
    secondPlayer.current.classList.add("player-slide-two");
    thirdPlayer.current.classList.add("player-rise");
    guessPlayerBackground.current.style.backgroundColor =
      "rgba(0, 128, 0, 0.445)";
    setTimeout(() => {
      createHigherLowerRound(dispatch, 1, higherPlayerData2, higherPlayerData3);
      firstPlayer.current.classList.remove("player-slide-one");
      secondPlayer.current.classList.remove("player-slide-two");
      thirdPlayer.current.classList.remove("player-rise");
      guessPlayerBackground.current.style.backgroundColor =
        "rgba(0, 0, 0, 0.314)";
    }, 1000);
  }

  function guessHandler(guess) {
    if (guessing) return;
    setGuessing(true);

    setTimeout(() => {
      setGuessing(false);
    }, 1000);
    if (guess === 2) {
      if (higherPlayerData2.marketValue <= higherPlayerData1.marketValue) {
        slidePlayers();
      } else {
        fadeScreen();
      }
    } else {
      if (higherPlayerData2.marketValue >= higherPlayerData1.marketValue) {
        slidePlayers();
      } else {
        fadeScreen();
      }
    }
  }

  return (
    <Fragment>
      <Sidebar />
      <div className='higher-lower-page-container'>
        <HomeNavbar />
        {!Object.keys(higherPlayerData2).length && (
          <BlurScreen text={higherLowerText} />
        )}
        <div className=' higher-lower-back-image'>
          <Image fill src='/higherlower.jpeg' />
        </div>{" "}
        {!lost ? (
          <div ref={mainScreen} className='higher-lower-players-field'>
            <div
              ref={firstPlayer}
              className='left-side-player-field player-field'
            >
              <Image alt='left-player' src={higherPlayerData1.goodImage} fill />
              <div className='higher-lower-player-info-box'>
                <h2 className='higher-lower-player-name higher-lower-player-info'>
                  {higherPlayerData1.name}
                </h2>
                <h2 className='higher-lower-player-info'>
                  {higherPlayerData1.club}
                </h2>
                <h2 className='higher-lower-player-info'>
                  {higherPlayerData1?.marketValue?.toLocaleString("en-US")}
                </h2>
              </div>
            </div>
            <div className='line-down-middle line-up'></div>
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
            <div className='line-down-middle line-down'></div>

            <div
              ref={secondPlayer}
              className='right-side-player-field player-field'
            >
              <Image
                alt='higher-lower-player'
                src={higherPlayerData2.goodImage}
                fill
              />
              <div
                ref={guessPlayerBackground}
                className='higher-lower-player-info-box'
              >
                <h2 className='higher-lower-player-name higher-lower-player-info'>
                  {higherPlayerData2.name}
                </h2>
              </div>
            </div>

            <div ref={thirdPlayer} className='hidden-player-3 player-field'>
              <Image
                alt='higher-lower-player'
                src={higherPlayerData3.goodImage}
                fill
              />
              <div className='higher-lower-player-info-box'>
                <h2 className='higher-lower-player-name higher-lower-player-info'>
                  {higherPlayerData3.name}
                </h2>
              </div>
            </div>
          </div>
        ) : (
          <div className='higher-lower-lost-game-screen' ref={lostScreen}>
            <h2>Total Score:</h2>
            <h2>{score}</h2>
            <h2>Highscore:</h2>
            <h2>{score}</h2>
            <h2>Play Again?</h2>
            <FaSync className='higher-lower-play-again' onClick={restartGame} />
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default HigherLower;
