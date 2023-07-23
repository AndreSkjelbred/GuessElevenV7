import Formation from "../no_modal/formation/formation.component";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useRef } from "react";

import { FaSync, FaInfoCircle } from "react-icons/fa";
import { guessElevenText } from "@/text/text";
import GameInfoModal from "../modal/gameInfoModal/gameInfoModal.component";
import { setIsTeamInfoModalOpen } from "../../store/redux/teamInfo";
import { setModalOpen } from "../../store/redux/guessEleven";
import createNewRound from "../../store/functions/model";
import { useState } from "react";
import { toggleGameActive } from "../../store/redux/guessEleven";
import LoadingScreen from "../../screens/loadingScreen/loadingScreen.component";
import { useEffect } from "react";
import Image from "next/image";

function FootballPitch() {
  const [loadingNewGame, setLoadingNewGame] = useState(false);

  const dispatch = useDispatch();

  function makeNewRound() {
    setLoadingNewGame(true);

    createNewRound(dispatch).then(() => {
      setLoadingNewGame(false);
      dispatch(toggleGameActive(true));
    });
  }

  const { isTeamInfoModalOpen } = useSelector((state) => state.teamInfo);
  const { isModalOpen } = useSelector((state) => state.guessEleven);

  function toggleGameInfoModal() {
    if (isModalOpen) {
      dispatch(setModalOpen(false));
    }
    dispatch(setIsTeamInfoModalOpen());
  }

  const { teamLogo, opponentLogo } = useSelector((state) => state.teamInfo);

  function TeamLogo({ teamLogo, classValue }) {
    return (
      <div className={`primary-team-logo img ${classValue}`}>
        <Image fill alt="primary team" src={teamLogo} />
      </div>
    );
  }

  const [animationFired, setAnimationFired] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimationFired(true);
    }, 3000);
  }, []);

  return (
    <Fragment>
      {loadingNewGame && <LoadingScreen text={guessElevenText} />}
      {isTeamInfoModalOpen && <GameInfoModal />}
      <div className="football-pitch-container left-container">
        <FaSync onClick={makeNewRound} className="new-game-icon " />
        <TeamLogo
          teamLogo={teamLogo}
          classValue={`guess-logo ${!animationFired && "scaleClass"}`}
        />
      </div>

      <div className="overlay-gradient">&nbsp;</div>

      <div
        className={`game-area-container 
           area-background-active 
        `}
      >
        <div className="left-line line img">
          <Image quality={1} fill alt="left-line" src="/whiterectangle.png" />
        </div>
        <div className="right-line line img">
          <Image quality={1} fill alt="right-line" src="/whiterectangle.png" />
        </div>
        <div className="top-line line img">
          <Image quality={1} fill alt="right-line" src="/whiterectangle.png" />
        </div>
        <div className="bottom-line line img">
          <Image quality={1} fill alt="right-line" src="/whiterectangle.png" />
        </div>
        <div className="sixteen-left line img">
          <Image
            quality={1}
            fill
            alt="sixteen-area"
            src="/whiterectangle.png"
          />
        </div>
        <div className="sixteen-right line img">
          <Image
            quality={1}
            fill
            alt="sixteen-area"
            src="/whiterectangle.png"
          />
        </div>
        <div className="sixteen-front line img">
          <Image
            quality={1}
            fill
            alt="sixteen-area"
            src="/whiterectangle.png"
          />
        </div>
        <div className="sixteen-inside-right line img">
          <Image
            quality={1}
            fill
            alt="sixteen-area"
            src="/whiterectangle.png"
          />
        </div>
        <div className="sixteen-inside-left line img">
          <Image
            quality={1}
            fill
            alt="sixteen-area"
            src="/whiterectangle.png"
          />
        </div>
        <div className="sixteen-inside-middle line img">
          <Image
            quality={1}
            fill
            alt="sixteen-area"
            src="/whiterectangle.png"
          />
        </div>
        <div className="half-circle img">
          <Image
            quality={1}
            fill
            alt="sixteen-area"
            src="/../../../public/assets/half-circle.png"
          />
        </div>
        <div className="line-one line behind-line img">
          <Image
            quality={1}
            fill
            alt="sixteen-area"
            src="/whiterectangle.png"
          />
        </div>
        <div className="line-two line behind-line img">
          <Image
            quality={1}
            fill
            alt="sixteen-area"
            src="/whiterectangle.png"
          />
        </div>
        <div className="line-three line behind-line img">
          <Image
            quality={1}
            fill
            alt="sixteen-area"
            src="/whiterectangle.png"
          />
        </div>
        <div className="line-four line behind-line img">
          <Image
            quality={1}
            fill
            alt="sixteen-area"
            src="/whiterectangle.png"
          />
        </div>
        <div className="line-five line behind-line img">
          <Image
            quality={1}
            fill
            alt="sixteen-area"
            src="/whiterectangle.png"
          />
        </div>

        {!loadingNewGame && <Formation />}
      </div>
      <div className="football-pitch-container right-container">
        <FaInfoCircle
          onClick={toggleGameInfoModal}
          className="info-modal-icon "
        />
        <TeamLogo
          teamLogo={opponentLogo}
          classValue={` ${!animationFired && "scaleClass"}`}
        />
      </div>
    </Fragment>
  );
}

export default FootballPitch;
