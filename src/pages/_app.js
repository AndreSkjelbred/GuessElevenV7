import "@/styles/globals.css";
import "@/styles/Home.module.css";
import "../components/footballPitch/footballPitch.styles.css";
import "../components/ge_home/gameArea/gameArea.styles.css";
import "../components/home/confetti/confetti.styles.css";
import "../components/home/gameReviews/gameReviews.styles.css";
import "../components/home/homeGameNav/homeGameNav.styles.css";
import "../components/home/homeNavbar/homeNavbar.styles.css";
import "../components/howToPlay/htpCircle/htpCircle.styles.css";
import "../components/modal/foundLetters/foundLetters.styles.css";
import "../components/modal/gameInfoModal/gameInfoModal.styles.css";
import "../components/generalGameComponents/guessedPlayersTwoRows/guessedPlayersTwoRows.styles.css";
import "../components/modal/modalGuess/modalGuess.styles.css";
import "../components/modal/modalSpace/modalSpace.styles.css";
import "../components/no_modal/formation/formation.styles.css";
import "../components/no_modal/hiddenLetter/hideenLetter.styles.css";
import "../components/no_modal/playerProfile/playerProfile.styles.css";
import "../components/no_modal/spaceChar/spaceChar.styles.css";
import "./guess-eleven/guess-eleven.styles.css";
import "./guess-eleven/how-to-play/howToPlay.styles.css";
import "../screens/loadingScreen/loadingScreen.styles.css";
import "../components/career/careerClub/careerClub.styles.css";
import "./career-path/career.styles.css";
import "../components/career/careerDetail/careerDetail.styles.css";
import "../components/home/login/login.styles.css";
import "../components/career/searchAlternative/searchAlternative.styles.css";
import "../components/career/guessedProfile/guessedProfile.styles.css";
import "../screens/blurScreen/blurScreen.styles.css";
import "../components/home/loginForm/loginForm.styles.css";
import "./hidden-player/hidden-face.styles.css";
import "../pages/higher-lower/higher-lower.styles.css";
import "../pages/contact-us/contact-us.styles.css";
import "../pages/info/info.styles.css";
import "../components/generalGameComponents/guessedProfileImage/guessedProfileImage.styles.css";

import Head from "next/head";
import Script from "next/script";
import * as gtag from "../../lib/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { Provider } from "react-redux";
import { store } from "@/store/redux/store";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Provider store={store}>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8136917730232216'
          crossorigin='anonymous'
        ></script>
      </Head>

      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Component {...pageProps} />
    </Provider>
  );
}
