import { useState, useEffect, Fragment } from "react";

import Head from "next/head";

import Confetti from "@/components/home/confetti/confetti.component";
import HomeNavbar from "../components/home/homeNavbar/homeNavbar.component";
import HomeGameNav from "@/components/home/homeGameNav/homeGameNav.component";
import GameReviews from "@/components/home/gameReviews/gameReviews.component";
import LoadingScreen from "@/screens/loadingScreen/loadingScreen.component";


import * as url from "./homePageMain.jpg";
import { useDispatch,useSelector } from "react-redux";
import { RESET_VIDEO } from "@/store/redux/video";
import { toggleGameActive } from "@/store/redux/guessEleven";
import LoginForm from "@/components/home/loginForm/loginForm.component";
import RegisterForm from "@/components/home/registerForm/registerForm.component";

import Image from "next/image";
import { bsHome } from "@/text/text";

export default function Home() {
  const [logReg, setLogReg] = useState(0);

  function regLog(value) {
    if (logReg === value) {
      setLogReg(0);
      return;
    }
    setLogReg(value);
  }

  const { loading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  dispatch(RESET_VIDEO());
  dispatch(toggleGameActive(true));
  const [imgsLoaded, setImgsLoaded] = useState(true);

  const [imageRef, setImageRef] = useState(null);

  useEffect(() => {
    setImgsLoaded(true);
  }, []);

  useEffect(() => {
    if (imageRef) {
      imageRef.onload = () => {
        setImgsLoaded(true);
      };
    }
  }, [imageRef, dispatch]);

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = url.default.src;

        loadImg.onload = () => resolve(image.url);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all([url].map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Twire Arcade - Guess-Eleven and more!</title>
        <meta charset='UTF-8' />
        <meta
          name='description'
          content='The Brand New Football Arcade With Popular New Games Like Guess-Eleven'
        ></meta>
        <meta
          name='keywords'
          content='twire, twire arcade, guess eleven, football, missing eleven, guess, eleven, missing'
        ></meta>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
        <meta
          name='google-site-verification'
          content='8En94HVVv_-Reu3yzqhPfUPpNOxyDf03rjFzb7uZM74'
        />
      </Head>

      <picture className='background-image'>
        <source srcSet='/homePageMain.jpg' type='image/jpg' />
        <Image
          ref={setImageRef}
          src='/homePageMain.jpg'
          objectFit='cover'
          fill
        />
      </picture>

      {loading || (!imgsLoaded && <LoadingScreen />)}
      <p className='bs-text'>{bsHome}</p>
      {logReg === 1 && <LoginForm />}
      {logReg === 2 && <RegisterForm />}

      <div className='root-container'>


        <Confetti />

        <HomeNavbar onClick={regLog} active='home' />
        <HomeGameNav />
        <h1 className='home-title'>TWIRE ARCADE</h1>
        <GameReviews />
      </div>
    </Fragment>
  );
}
