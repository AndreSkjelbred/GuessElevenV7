import Image from "next/image";
import HomeNavbar from "@/components/home/homeNavbar/homeNavbar.component";
import createHiddenRound from "@/store/makeHiddenFaceRound/makeHiddenRound";
import { incrementHiddenGuessCount } from "@/store/redux/hidden";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import * as Realm from "realm-web";
import SearchAlternative from "@/components/career/searchAlternative/searchAlternative.component";
import GuessedProfile from "@/components/career/guessedProfile/guessedProfile";

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

  const { hiddenPlayerData } = useSelector((state) => state.hidden);

  function guessHandler(player) {
    const input = document.querySelector(".input-career");

    setGuessedPlayers([
      ...guessedPlayers,
      {
        leagueClass:
          player.league === hiddenPlayerData.league ? "correct-data" : "",
        clubClass: player.club === hiddenPlayerData.club ? "correct-data" : "",
        playerClass:
          player.name === hiddenPlayerData.name ? "correct-data" : "",
        leagueImg: player.leagueImg,
        clubImg: player.clubImg,
        imgSrc: player.imgSrc,
      },
    ]);

    if (player.name === hiddenPlayerData.name) {
      setWon(true);
      dispatch(incrementHiddenGuessCount(100));
    }
    if (guessCount + 1 === hiddenPlayerData.teamsTotal) {
      setAlive(false);
    }

    dispatch(incrementHiddenGuessCount());
    input.value = "";
    setSearchField("");
    input.focus();
  }

  console.log(guessedPlayers);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);
  };

  useEffect(() => {
    if (searchFieldValue.length <= 2) {
      setFilteredPlayers([]);
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
        });
    } catch (err) {
      console.error(err);
    }
  }, [searchFieldValue]);

  const { guessCount } = useSelector((state) => state.hidden);

  return (
    <div className='hidden-face-root-container'>
      <div className='higher-lower-back-image'>
        <Image fill src='/hiddenplayer.jpeg' />
      </div>
      <HomeNavbar />
      <div className='player-img-container img blur-img'>
        <Image
          alt='hidden-player'
          fill
          src={hiddenPlayerData.imgSrc}
          quality={won ? 100 : 1}
        />
      </div>

      <div className='search-area-container'>
        <div className='career-input-container'>
          <input onChange={onSearchChange} className='input-career' />
        </div>
        {filteredPlayers.map((player) => (
          <SearchAlternative onClick={guessHandler} player={player} />
        ))}
        {guessedPlayers.map((player) => {
          return <GuessedProfile player={player} />;
        })}
      </div>
    </div>
  );
}

export default HiddenPlayer;
