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
import { useEffect, useState } from "react";
import Image from "next/image";
import { setIsTeamInfoModalOpen } from "@/store/redux/teamInfo";

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time * 1000);
  });
};

function PlayerProfile(props) {
  const dispatch = useDispatch();

  const { guessedData } = useSelector((state) => state.guessEleven);
  const { pos, known, name, number, photo, index, color } = props;

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
    <div className={`profile-container `}>
      {known ? (
        <div
          className={`label known  ${pos.toLowerCase()}-back flipped-profile-second`}
        >
          <div className="profile-found img">
            <Image
              alt="pfp"
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
          <div className={`module-border wrap-${color} ${index} `}>
            <div
              className={`label unknown ${color} ${index}`}
              onClick={toggleModal}
            >
              <div className="profile-found img hidden">
                <Image
                  alt="pfp"
                  fill
                  src={
                    photo !== "None" ? photo : "/../public/assets/noPic3.jpg"
                  }
                />
              </div>
              <FaLock className="lock-icon hide-icon-title"></FaLock>
              <h4 className="letter-count">{name.length} </h4>
            </div>{" "}
          </div>
          <div className={`hidden-letters hidden-${color} ${index}`}>
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
