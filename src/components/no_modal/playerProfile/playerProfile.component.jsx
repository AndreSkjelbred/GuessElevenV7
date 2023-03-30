import { FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import HiddenLetter from "../hiddenLetter/hiddenLetter.component";
import SpaceChar from "../spaceChar/spaceChar.component";
import {
  setModalOpen,
  setCurrentPlayer,
  setGuessedData,
  setGreenData,
  setNameToBeFound,
  setRemainingGuesses,
} from "../../../store/redux/guessEleven";
import { useState } from "react";
import Image from "next/image";
import { setIsTeamInfoModalOpen } from "@/store/redux/teamInfo";

function PlayerProfile(props) {
  const dispatch = useDispatch();
  const { guessedData } = useSelector((state) => state.guessEleven);
  const { pos, known, name, number, photo, index } = props;

  let soFar;
  const nameArr = [...name.toLowerCase()].filter((char) => char !== " ");
  const { isTeamInfoModalOpen } = useSelector((state) => state.teamInfo);

  function toggleModal() {
    if (!guessedData[number]) {
      dispatch(setGuessedData({ number, foundLetters: false }));
      dispatch(setGreenData({ number, greenLetterObj: false }));
      dispatch(setNameToBeFound({ number, nameArr }));
      dispatch(setRemainingGuesses(number));
    }

    if (isTeamInfoModalOpen) {
      setIsTeamInfoModalOpen(false);
    }
    dispatch(setModalOpen());
    dispatch(setCurrentPlayer({ pos, number, name }));
  }

  return (
    <div className='profile-container'>
      {known ? (
        <div className={`label known  ${pos.toLowerCase()}-back`}>
          <div className='profile-found img'>
            <Image
              alt='pfp'
              style={{
                "border-top-left-radius": " 20%",
                "border-top-right-radius": "20%",
              }}
              fill
              src={photo !== "None" ? photo : "/../public/assets/noPic3.jpg"}
            />
          </div>

          <h5
            className={`${name.length > 12 ? "small-label" : ""}${
              name.length > 7 && name.length < 12 ? "medium-label" : ""
            }`}
          >
            {name}
          </h5>
        </div>
      ) : (
        <>
          <div className={`label unknown ${index}`} onClick={toggleModal}>
            <FaLock className='lock-icon hide-icon-title'></FaLock>
            <h4 className='letter-count'>{name.length} </h4>
          </div>
          <div className={`hidden-letters ${index}`}>
            {[...name].map((char) => {
              soFar += char;
              return char === " " ? (
                <SpaceChar key={soFar} />
              ) : (
                <HiddenLetter key={soFar} />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default PlayerProfile;
