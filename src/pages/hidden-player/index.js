import Image from "next/image";
import HomeNavbar from "@/components/home/homeNavbar/homeNavbar.component";
import createHiddenRound from "@/store/makeHiddenFaceRound/makeHiddenRound";
import {
  incrementHiddenGuessCount,
  incrementHiddenScore,
} from "@/store/redux/hidden";
import { useEffect } from "react";
import { blurredPlayerText } from "@/text/text";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import * as Realm from "realm-web";
import SearchAlternative from "@/components/career/searchAlternative/searchAlternative.component";
import { setSearchOpen } from "@/store/redux/hidden";
import GuessedPlayersTwoColumns from "@/components/generalGameComponents/guessedPlayersTwoRows/guessedPlayersTwoRows.component";
import Sidebar from "@/components/generalGameComponents/sidebar/sidebar.component";
import { Fragment } from "react";
import BlurScreen from "@/screens/blurScreen/blurScreen.component";
import { FaSync } from "react-icons/fa";

function HiddenPlayer() {
  const [won, setWon] = useState(false);
  const [alive, setAlive] = useState(true);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [searchFieldValue, setSearchField] = useState("");
  const [guessedPlayers, setGuessedPlayers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    createHiddenRound(dispatch);
  }, []);
  let highScore = 0;
  useEffect(() => {
    highScore =
      localStorage.getItem("hidden-highscore") !== null
        ? localStorage.getItem("hidden-highscore")
        : 0;
  }, []);

  const { score } = useSelector((state) => state.hidden);

  const { hiddenPlayerData } = useSelector((state) => state.hidden);

  function guessHandler(player) {
    const input = document.querySelector(".input-career");

    setGuessedPlayers([
      ...guessedPlayers,
      [
        {
          imgSrc: player.imgSrc,
          className:
            player.name === hiddenPlayerData.name ? "correct-data" : "",
        },
        {
          imgSrc: player.leagueImg,
          className:
            player.league === hiddenPlayerData.league ? "correct-data" : "",
        },
        {
          imgSrc: player.clubImg,
          className:
            player.club === hiddenPlayerData.club ? "correct-data" : "",
        },
        {
          imgSrc: player.pos,
          className: player.pos === hiddenPlayerData.pos ? "correct-data" : "",
          realValue: hiddenPlayerData.pos,
        },
        {
          imgSrc: player.age,
          className: player.age === hiddenPlayerData.age ? "correct-data" : "",
          realValue: hiddenPlayerData.age,
        },
      ],
    ]);

    if (player.name === hiddenPlayerData.name) {
      setWon(true);
      dispatch(incrementHiddenScore());
    }
    if (guessCount + 1 === hiddenPlayerData.teamsTotal) {
      setAlive(false);
    }

    dispatch(incrementHiddenGuessCount());
    input.value = "";
    setSearchField("");
    input.focus();
  }

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);
  };

  useEffect(() => {
    if (searchFieldValue.length <= 2) {
      setFilteredPlayers([]);
      dispatch(setSearchOpen(false));
      return;
    }

    const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
    const app = new Realm.App({ id: REALM_APP_ID });
    const credentials = Realm.Credentials.anonymous();
    try {
      app
        .logIn(credentials)
        .then((user) => {
          return user.functions.searchAutocomplete(searchFieldValue);
        })
        .then((newFilteredPlayers) => {
          setFilteredPlayers(newFilteredPlayers);
          newFilteredPlayers.length > 0 && dispatch(setSearchOpen(true));
        });
    } catch (err) {
      console.error(err);
    }
  }, [searchFieldValue]);

  const { guessCount } = useSelector((state) => state.hidden);

  return (
    <Fragment>
      <Sidebar />
      <FaSync className="new-game-icon new-game-career icon-pos-blur" />
      {!Object.keys(hiddenPlayerData).length && (
        <BlurScreen text={blurredPlayerText} />
      )}
      <div className="hidden-face-root-container">
        <div className="score-image-highscore-container">
          <div className="current-score-container-hidden">
            <h3>Current Streak:</h3>
            <h3>{score}</h3>
          </div>

          <div className="player-img-container img blur-img">
            <Image
              alt="hidden-player"
              fill
              src={hiddenPlayerData.imgSrc}
              quality={won ? 100 : 1}
            />
          </div>
          <div className="current-score-container-hidden">
            <h3>Highest Streak:</h3>
            <h3>{highScore}</h3>
          </div>
        </div>
        <HomeNavbar />

        <div className="search-area-container">
          <div className="career-input-container">
            <input onChange={onSearchChange} className="input-career" />
          </div>
          <div className="filtered-players-container-hidden">
            {filteredPlayers.map((player) => (
              <SearchAlternative onClick={guessHandler} player={player} />
            ))}
          </div>
        </div>
        <GuessedPlayersTwoColumns guessedPlayers={guessedPlayers} />
      </div>{" "}
    </Fragment>
  );
}

export default HiddenPlayer;

3 / 2;
8 / 2;
7 / 3;
21 / 3;
18 / 1;
