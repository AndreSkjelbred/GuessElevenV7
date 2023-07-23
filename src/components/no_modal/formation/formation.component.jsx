import PlayerProfile from "../playerProfile/playerProfile.component";
import { Fragment } from "react";
import { useSelector } from "react-redux";

const cardIndexes = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
};

function Formation() {
  let startIndex = 1;
  const { G, D, M, F } = useSelector((state) => state.teamInfo);

  const guessedPlayers = useSelector(
    (state) => state.guessEleven.guessedPlayers
  );

  return (
    <Fragment>
      <div className="formation-container">
        <div className="flex-goalkeeper flex-unknown ">
          {G.map((gkArr) => {
            return (
              <PlayerProfile
                key={gkArr.name}
                pos="GK"
                index={cardIndexes[1]}
                known={guessedPlayers.includes(gkArr.player_number)}
                {...gkArr}
                number={gkArr.player_number}
                photo={gkArr.image_url}
                color="gk-background"
              />
            );
          })}
        </div>
        <div className="flex-defender flex-unknown ">
          {D.map((defArr) => {
            startIndex += 1;
            return (
              <PlayerProfile
                key={defArr.name}
                pos="DEF"
                index={cardIndexes[startIndex]}
                known={guessedPlayers.includes(defArr.player_number)}
                name={defArr.name}
                number={defArr.player_number}
                {...defArr}
                photo={defArr.image_url}
                color="def-background"
              />
            );
          })}
        </div>
        <div className="flex-midfielder flex-unknown">
          {M.map((midArr) => {
            startIndex += 1;

            return (
              <PlayerProfile
                key={midArr.name}
                pos="MID"
                index={cardIndexes[startIndex]}
                known={guessedPlayers.includes(midArr.player_number)}
                {...midArr}
                number={midArr.player_number}
                photo={midArr.image_url}
                color="mid-background"
              />
            );
          })}
        </div>
        <div className="flex-attacker flex-unknown">
          {F.map((forArr) => {
            startIndex += 1;
            return (
              <PlayerProfile
                key={forArr.name}
                pos="FOR"
                index={cardIndexes[startIndex]}
                known={guessedPlayers.includes(forArr.player_number)}
                {...forArr}
                number={forArr.player_number}
                photo={forArr.image_url}
                color="for-background"
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default Formation;
