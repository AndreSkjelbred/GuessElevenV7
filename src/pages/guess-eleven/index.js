import GameArea from "../../components/ge_home/gameArea/gameArea.component";

import { Fragment, useEffect, useState } from "react";
import { createStartingXI } from "../../store/redux/guessEleven";
import { useDispatch, useSelector } from "react-redux";

import ModalGuess from "../../components/modal/modalGuess/modalGuess.component";
import HomeNavbar from "../../components/home/homeNavbar/homeNavbar.component";

import {
  setGameDate,
  setHome,
  setLeague,
  setOpponent,
  setOpponentLogo,
  setStadium,
  setTeamLogo,
  setTeamName,
} from "../../store/redux/teamInfo";
import LoadingScreen from "../../screens/loadingScreen/loadingScreen.component";
import { setIntroDone, setVideoDoneLoading } from "../../store/redux/video";
import { setVideoIsPlaying, setInitIntro } from "../../store/redux/video";
import { toggleGameActive } from "../../store/redux/guessEleven";
import { Helmet } from "react-helmet-async";
import { useRef } from "react";
import { initNewRound } from "../../store/redux/teamInfo";
import createNewRound from "../../store/functions/model";
import Image from "next/image";
import Head from "next/head";
import Sidebar from "@/components/generalGameComponents/sidebar/sidebar.component";
import { bsEleven } from "@/text/text";

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time * 1000);
  });
};

function GuessEleven() {
  const dispatch = useDispatch();
  useEffect(() => {
    createNewRound(dispatch).then(() => {
      setInitialedIntro(true);
      dispatch(toggleGameActive(true));
      /*  startGameHandler(); */
    });
  }, []);

  const [initialedIntro, setInitialedIntro] = useState(false);
  const [gameBegun, setGameBegun] = useState(false);

  const [videoRef, setVideoRef] = useState(null);

  const [isCancelled, setIsCancelled] = useState(false);
  const timeoutIds = useRef([]);

  useEffect(() => {
    if (videoRef) {
      videoRef.onloadedmetadata = () => {};
    }
    return () => {
      timeoutIds.current.forEach((id) => clearTimeout(id));
    };
  }, [videoRef, dispatch]);

  const { videoIsPlaying, initIntro } = useSelector((state) => state.video);

  const { isModalOpen } = useSelector((state) => state.guessEleven);

  return (
    <Fragment>
      <Head>
        <title>Guess-Eleven</title>
        <meta charset='UTF-8' />
        <meta
          name='description'
          content='Play Guess-Eleven Here and Prove Your Football knowledge to the world'
        ></meta>
        <meta
          name='keywords'
          content='guess eleven, football, missing eleven, guess, eleven, missing'
        ></meta>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
        <meta
          name='google-site-verification'
          content='8En94HVVv_-Reu3yzqhPfUPpNOxyDf03rjFzb7uZM74'
        />
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8136917730232216'
          crossorigin='anonymous'
        ></script>
      </Head>
      <div className={`guess-eleven-container `}>
      <p className="bs-text">{bsEleven}</p>
        <HomeNavbar />
        <Sidebar />
        {/* !gameBegun && <LoadingScreen /> */}
        {/*initialedIntro &&
          {
            <div className='start-transform'>
             <video
              ref={setVideoRef}
              autoPlay
              muted
              className='video'
              src='/geIntro.mp4'
            /> 
          </div>
          }*/}
        {/*  <GameInfo/> */}

        {initialedIntro ? <GameArea /> : <LoadingScreen />}
        {isModalOpen && <ModalGuess />}
      </div>
    </Fragment>
  );
}

export default GuessEleven;
