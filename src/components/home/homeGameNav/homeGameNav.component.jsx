import { useState } from "react";
import ReadMore from "../readMore/readMore.component";
import { FaTwitter, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import { guessElevenText, careerPathText } from "@/text/text";
import { useDispatch } from "react-redux";
import { setLoading } from "@/store/redux/loading";

function HomeGameNav() {
  const dispatch = useDispatch();
  const [geReadMore, setGeReadMore] = useState(false);
  const [cpReadMore, setCpReadMore] = useState(false);

  function readMoreGE() {
    setGeReadMore((geReadMore) => !geReadMore);
  }
  function readMoreCP() {
    setCpReadMore((cpReadMore) => !cpReadMore);
  }

  function loadScreen() {
    dispatch(setLoading());
  }

  return (
    <div className="home-game-navigation">
      <div className="home-game-container">
        <div className="games-link-container">
          <div className="nav-column-item-container">
            <h2>GUESS ELEVEN</h2>

            <Link className="video-play-button" href="/guess-eleven">
              <span></span>
            </Link>
          </div>
          <ReadMore onPress={readMoreGE} readMore={geReadMore}>
            {guessElevenText}
          </ReadMore>
        </div>
        <div className="games-link-container">
          <div className="nav-column-item-container">
            <h2>HIGHER OR LOWER</h2>

            <Link className="video-play-button" href="/higher-lower">
              <span></span>
            </Link>
          </div>
          <ReadMore></ReadMore>
        </div>
        <div className="games-link-container">
          <div className="nav-column-item-container">
            <h2>CAREER PATH</h2>

            <Link
              onClick={loadScreen}
              className="video-play-button"
              href="/career-path"
            >
              <span></span>
            </Link>
          </div>
          <ReadMore onPress={readMoreCP} readMore={cpReadMore}>
            {careerPathText}
          </ReadMore>
        </div>
        <div className="games-link-container">
          <div className="nav-column-item-container">
            <h2>BLURRED PLAYER</h2>

            <Link
              onClick={loadScreen}
              className="video-play-button"
              href="/hidden-player"
            >
              <span></span>
            </Link>
          </div>
          <ReadMore onPress={readMoreCP} readMore={cpReadMore}>
            {careerPathText}
          </ReadMore>
        </div>
      </div>

      <div className="social-media-container">
        <FaTiktok className="social-logo  hide-icon-title" />
        <FaTwitter className="social-logo twitter hide-icon-title" />
      </div>
    </div>
  );
}

export default HomeGameNav;
