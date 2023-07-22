import { Fragment, useState, useRef, useEffect } from "react";

import ModalSpace from "../modalSpace/modalSpace.component";
import { useSelector, useDispatch } from "react-redux";
import {
  setModalOpen,
  addGuessedPlayer,
  setGuessedData,
  setCurrentWordGuess,
  setGreenData,
  setNameToBeFound,
  setRemainingGuesses,
  removeGuessedData,
} from "../../../store/redux/guessEleven";
import FoundLetters from "../foundLetters/foundLetters.component";

function ModalGuess() {
  const dispatch = useDispatch();
  const { currentPlayer } = useSelector((state) => state.guessEleven);
  const { name, number } = currentPlayer;

  const nameToBeFound = useSelector(
    (state) => state.guessEleven.nameToBeFound[number]
  );

  let remainingName = [...nameToBeFound];
  const foundLetters = useSelector(
    (state) => state.guessEleven.guessedData[number]
  );
  const greenLetters = useSelector(
    (state) => state.guessEleven.greenData[number]
  );
  const { currentWordGuess } = useSelector((state) => state.guessEleven);
  const remainingGuesses = useSelector(
    (state) => state.guessEleven.remainingGuesses[number]
  );

  let curIndex = 1;
  let soFar = 0;
  let currentWord = [];
  let tempFound = [];
  let correctArray = [];
  const correctAnswer = {};
  const correctGuessed = {};
  let i = 0;
  [...name.toLowerCase()].forEach((char) => {
    if (char === " ") return;
    correctAnswer[(i + 1).toString()] = char;
    correctArray.push(char);
    i += 1;
  });

  const inputReference = useRef(null);

  useEffect(() => {
    inputReference.current.focus();
  }, []);

  function toggleModal() {
    dispatch(setModalOpen());
  }

  function onClick(e) {
    curIndex = +e.target.id;
  }

  function moveRight() {
    if (curIndex === soFar) return;

    curIndex += 1;

    document.getElementById(curIndex).focus();
  }

  function moveToEmpty() {
    if (curIndex === soFar) return;
    curIndex += 1;
    document.getElementById(curIndex).focus();
    if (document.getElementById(curIndex).readOnly) {
      moveToEmpty();
      return;
    }
  }

  if (document.querySelector(".guess-container")?.childNodes.length) {
    setTimeout(() => {
      document.getElementById(1).focus();
      if (document.getElementById(1).readOnly) moveToEmpty();
    }, 1);
  }

  function moveLeft() {
    if (curIndex === 1) return;
    curIndex -= 1;

    document.getElementById(curIndex).classList.remove("yellow");

    if (document.getElementById(curIndex).readOnly) {
      moveLeft();
      return;
    }
    document.getElementById(curIndex).focus();
  }

  function deepEqual(x, y) {
    const ok = Object.keys,
      tx = typeof x,
      ty = typeof y;
    return x && y && tx === "object" && tx === ty
      ? ok(x).length === ok(y).length &&
          ok(x).every((key) => deepEqual(x[key], y[key]))
      : x === y;
  }

  function onKeyDown(e) {
    if (e.code === "Tab") {
      e.preventDefault();
      moveRight();
      return;
    }
    if (e.code === "ArrowRight") {
      e.preventDefault();
      moveRight();
      return;
    }
    if (e.code === "ArrowLeft") {
      e.preventDefault();
      moveLeft();
      return;
    }

    if (e.code === "Enter") {
      currentWord = [...document.querySelector(".guess-container").childNodes]
        .map((node) => node.value)
        .filter((char) => char !== undefined);
      dispatch(setCurrentWordGuess(currentWord));

      currentWord.forEach((char, i) => {
        if (correctArray[i] === char) {
          document.getElementById((i + 1).toString()).classList.add("green");
          const fresh = document.getElementById((i + 1).toString()).readOnly
            ? false
            : true;
          document.getElementById((i + 1).toString()).readOnly = true;

          if (remainingName.includes(char) && fresh) {
            const dupliceRemain = [...remainingName];

            const index = dupliceRemain.indexOf(char);

            dupliceRemain.splice(index, 1);

            remainingName = dupliceRemain;
            dispatch(setNameToBeFound({ number, nameArr: remainingName }));
          }
          if (foundLetters.includes(char) && fresh)
            dispatch(removeGuessedData({ number, removeLetter: char }));
          correctGuessed[(i + 1).toString()] = char;

          return;
        }
      });

      if (Object.keys(correctGuessed)) {
        dispatch(setGreenData({ number, greenLetterObj: correctGuessed }));
      }

      currentWord.forEach((char, i) => {
        if (!char) return;
        if (document.getElementById((i + 1).toString()).readOnly) {
          return;
        }

        if (remainingName.includes(char)) {
          const dupliceRemain = [...remainingName];
          const index = dupliceRemain.indexOf(char);

          dupliceRemain.splice(index, 1);
          remainingName = [...dupliceRemain];

          tempFound.push(char);
        }
      });

      dispatch(setNameToBeFound({ number, nameArr: remainingName }));
      dispatch(setGuessedData({ number, foundLetter: tempFound }));

      if (deepEqual(correctGuessed, correctAnswer)) {
        dispatch(addGuessedPlayer(number));

        dispatch(setModalOpen());

        return;
      }
      dispatch(setRemainingGuesses(number));
    }
    if (e.code !== "Backspace" && e.target.readOnly) {
      e.preventDefault();
      moveRight();
    }
    if (e.code !== "Backspace") return;
    e.target.classList.remove("yellow");
    if (e.target.value && !e.target.readOnly) {
      e.preventDefault();
      if (!e.target.readOnly) e.target.value = "";

      if (curIndex === soFar) {
        currentWord.splice(curIndex - 1, 1);

        return;
      }
    }

    if (curIndex === 1) return;

    moveLeft();

    return;
  }

  function onChange(e) {
    if (e.nativeEvent.inputType === "deleteContentBackward") return;
    document.getElementById(curIndex);
    currentWord.push(document.getElementById(curIndex).value);

    moveRight();
  }

  function InputOne({ id }) {
    const green = greenLetters[id] ? greenLetters[id] : undefined;
    return (
      <Fragment>
        <input
          readOnly={green ? true : null}
          value={green}
          ref={id === 1 ? inputReference : null}
          onClick={onClick}
          autoComplete='off'
          onChange={onChange}
          onKeyDown={onKeyDown}
          id={id}
          type='text'
          className={`typing-input  ${green && "green"}`}
          maxLength='1'
        ></input>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <FoundLetters letters={foundLetters} />
      <div className='modal '>
        <h3 className='remaining-guess-title'>{`Remaining Guesses: ${remainingGuesses}`}</h3>
        <button className='close-modal' onClick={toggleModal}>
          &times;
        </button>
        <div className='guess-container'>
          {[...name].map((char) => {
            if (char !== " ") soFar += 1;
            return char === " " ? (
              <ModalSpace key={soFar + 100} />
            ) : (
              <InputOne id={soFar} key={soFar} />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default ModalGuess;
