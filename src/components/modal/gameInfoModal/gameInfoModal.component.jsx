import { Fragment, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { FaCalendarAlt, FaMapMarked, FaTrophy } from "react-icons/fa";
import { BiFootball } from "react-icons/bi";

import { setIsTeamInfoModalOpen } from "../../../store/redux/teamInfo";
import { setModalOpen } from "@/store/redux/guessEleven";

function GameInfoModal({ info }) {
  const dispatch = useDispatch();
  const { teamName, gameDate, league, stadium, opponent, home } = useSelector(
    (state) => state.teamInfo
  );

  const { isModalOpen } = useSelector((state) => state.guessEleven);

  function toggleInfoModal() {
    if (isModalOpen) {
      dispatch(setModalOpen(false));
    }
    dispatch(setIsTeamInfoModalOpen());
  }

  return (
    <Fragment>
      <Fragment>
        <div className='overlay  '></div>
        <div className='game-info-modal '>
          <div className='team-info-column'>
            <div className='info-line-container'>
              <BiFootball className={`black ${"hide-icon-title"}`} />
              <p className='word'>
                <span className={`${home === "home" ? "current-team" : ""} `}>
                  {home === "home" ? teamName : opponent}
                </span>
                {" vs "}
                <span className={`${home !== "home" ? "current-team" : ""} `}>
                  {home !== "home" ? teamName : opponent}
                </span>
              </p>
            </div>
            <div className='info-line-container'>
              <FaCalendarAlt className={`blue ${"hide-icon-title"}`} />
              <p className='word'>{gameDate}</p>
            </div>

            <div className='info-line-container'>
              <FaTrophy className={`gold ${"hide-icon-title"}`} />
              <p className='word'>{league}</p>
            </div>

            <div className='info-line-container'>
              <FaMapMarked className={`red ${"hide-icon-title"}`} />
              <p className='word'>{stadium}</p>
            </div>
          </div>

          <button onClick={toggleInfoModal} className='close-info-modal'>
            &times;
          </button>
        </div>
      </Fragment>
      )
    </Fragment>
  );
}

export default GameInfoModal;
