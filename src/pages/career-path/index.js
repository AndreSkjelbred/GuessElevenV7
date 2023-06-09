import CareerClub from "@/components/career/careerClub/careerClub.component";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import * as Realm from "realm-web";
import { incrementGuessCount, resetCareer } from "@/store/redux/career";
import { useDispatch, useSelector } from "react-redux";
import SearchAlternative from "@/components/career/searchAlternative/searchAlternative.component";
import BlurScreen from "@/screens/blurScreen/blurScreen.component";
import GuessedProfile from "@/components/career/guessedProfile/guessedProfile";
import HomeNavbar from "@/components/home/homeNavbar/homeNavbar.component";
import { FaSync, FaInfoCircle } from "react-icons/fa";
import createCareerRound from "@/store/makeCareerRound/model";


function Career() {
  const [loadingNewGame, setLoadingNewGame] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoadingNewGame(true);
    createCareerRound(dispatch).then(() => {
      setLoadingNewGame(false);
    });
  }, []);

  async function makeNewRound() {
    setLoadingNewGame(true);
    await createCareerRound(dispatch);
    setGuessedPlayers([]);
    setLoadingNewGame(false);
    setAlive(true);
    setWon(false);
  }

  const data = useSelector((state) => state.career.playerData);

  const [searchFieldValue, setSearchField] = useState("");
 
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [guessedPlayers, setGuessedPlayers] = useState([]);

  /* const searchResultsArray = searchResults[0]; */
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

  const [alive, setAlive] = useState(true);
  const [won, setWon] = useState(false);
  function guessHandler(player) {
    const input = document.querySelector(".input-career");

    setGuessedPlayers([
      ...guessedPlayers,
      {
        leagueClass: player.league === data[0].league ? "correct-data" : "",
        clubClass: player.club === data[0].club ? "correct-data" : "",
        playerClass: player.name === data[0].name ? "correct-data" : "",
        leagueImg: player.leagueImg,
        clubImg: player.clubImg,
        imgSrc: player.imgSrc,
      },
    ]);

    if (player.name === data[0].name) {
      setWon(true);
      dispatch(incrementGuessCount(100));
    }
    if (guessCount + 1 === data[0].teamsTotal) {
      setAlive(false);
    }

    dispatch(incrementGuessCount());
    input.value = "";
    setSearchField("");
    input.focus();
  }
  const { guessCount } = useSelector((state) => state.career);
  let teamsAmount = 0;
  const teamAmount = data[0]?.teamsTotal;
  if (teamAmount) {
    teamsAmount = new Array(teamAmount).fill("");
  }

  let i = 0;

  return (
    <Fragment>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8136917730232216'
          crossorigin='anonymous'
        ></script>
      </Head>
      <div className='career-page'>
        <HomeNavbar />
        <FaSync onClick={makeNewRound} className='new-game-icon' />
        <div className='club-info-container'>
          {!teamsAmount.length && <BlurScreen />}
          <CareerClub
            data={{
              teamName: "Club",
              goals: "Goals",
              games: "Games",
              joined: "Joined",
              left: "Left",
              className: "index",
            }}
            index={0}
          />
          {teamsAmount.length &&
            teamsAmount.map(() => {
              i += 1;

              return (
                <CareerClub
                  key={
                    data[0].teams[i].games +
                    data[0].teams[i].goals +
                    data[0].teams[i].left
                  }
                  index={i}
                  data={data[0]?.teams[i]}
                />
              );
            })}
        </div>
        <div className='search-area-container'>
          {alive && !won && teamsAmount.length && (
            <div className='career-input-container'>
              <input
                onChange={onSearchChange}
                placeholder={`${guessCount} of ${data[0].teamsTotal} guesses made`}
                className='input-career'
              />
            </div>
          )}
          {searchFieldValue.length && filteredPlayers?.length && (
            <div className='player-options-container'>
              {filteredPlayers.map((it) => {
                return (
                  <SearchAlternative
                    onClick={guessHandler}
                    key={it.name}
                    player={it}
                  />
                );
              })}
            </div>
          )}
          <div className='guessed-players-container-box'>
            {guessedPlayers.map((player) => {
              return <GuessedProfile key={player.name} player={player} />;
            })}
          </div>
        </div>
        )
      </div>
      ) )
    </Fragment>
  );
}

export default Career;
