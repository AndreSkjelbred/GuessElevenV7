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
  const startingXI = useSelector((state) => state.teamInfo.startingXI);

  const { G, D, M, F } = startingXI;

  const guessedPlayers = useSelector(
    (state) => state.guessEleven.guessedPlayers
  );

  return (
    <Fragment>
      <div className='formation-container'>
        <div className='flex-goalkeeper flex-unknown '>
          {G.map((gkArr) => {
            return (
              <PlayerProfile
                key={gkArr.name}
                pos='GK'
                index={cardIndexes[1]}
                known={guessedPlayers.includes(gkArr.number)}
                {...gkArr}
              />
            );
          })}
        </div>
        <div className='flex-defender flex-unknown '>
          {D.map((defArr) => {
            startIndex += 1;
            return (
              <PlayerProfile
                key={defArr.name}
                pos='DEF'
                index={cardIndexes[startIndex]}
                known={guessedPlayers.includes(defArr.number)}
                {...defArr}
              />
            );
          })}
        </div>
        <div className='flex-midfielder flex-unknown'>
          {M.map((midArr) => {
            startIndex += 1;

            return (
              <PlayerProfile
                key={midArr.name}
                pos='MID'
                index={cardIndexes[startIndex]}
                known={guessedPlayers.includes(midArr.number)}
                {...midArr}
              />
            );
          })}
        </div>
        <div className='flex-attacker flex-unknown'>
          {F.map((forArr) => {
            startIndex += 1;
            return (
              <PlayerProfile
                key={forArr.name}
                pos='FOR'
                index={cardIndexes[startIndex]}
                known={guessedPlayers.includes(forArr.number)}
                {...forArr}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default Formation;
