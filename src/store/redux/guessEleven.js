import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGameActive: false,
  introDone: false,

  guessedPlayers: [],
  isModalOpen: false,
  currentPlayer: {},
  guessedData: {},
  greenData: {},
  nameToBeFound: [],
  currentWordGuess: {},
  remainingGuesses: {},
};

const guessElevenSlice = createSlice({
  name: "guessEleven",
  initialState,
  reducers: {
    toggleGameActive: (state, action) => {
      const { payload } = action;
      state.isGameActive = payload;
    },
    toggleIntroDone: (state) => {
      state.introDone = !state.introDone;
    },
    createStartingXI: (state, action) => {
      const { startingXI } = action.payload;

      state.startingXI = startingXI;
    },
    addGuessedPlayer: (state, action) => {
      const { payload } = action;

      state.guessedPlayers.push(payload);
    },
    setModalOpen: (state) => {
      state.currentWordGuess = [];
      state.isModalOpen = !state.isModalOpen;
    },
    setCurrentPlayer: (state, action) => {
      const { payload } = action;
      state.currentPlayer = payload;
    },
    setGuessedData: (state, action) => {
      const { number, foundLetter } = action.payload;

      if (!foundLetter) {
        state.guessedData[number] = [];
        return;
      }

      state.guessedData[number].push(...foundLetter);
    },
    removeGuessedData: (state, action) => {
      const { number, removeLetter } = action.payload;

      state.guessedData[number].splice(
        state.guessedData[number].indexOf(removeLetter),
        1
      );
    },
    setGreenData: (state, action) => {
      const { number, greenLetterObj } = action.payload;

      if (!greenLetterObj) {
        state.greenData[number] = {};
        return;
      }
      /*   Object.keys(greenLetterObj).forEach((key) => {
        if (state.guessedData[number]?.includes(greenLetterObj[key])) {
          const index = state.guessedData[number].indexOf(greenLetterObj[key]);
          state.guessedData[number].splice(index, 1);
        }
      }); */
      state.greenData[number] = {
        ...state.greenData[number],
        ...greenLetterObj,
      };
    },

    setCurrentWordGuess: (state, action) => {
      const { payload } = action;

      state.currentWordGuess = payload;
    },
    setNameToBeFound: (state, action) => {
      const { number, nameArr } = action.payload;

      state.nameToBeFound[number] = nameArr;
    },
    setRemainingGuesses: (state, action) => {
      const { payload } = action;
      if (!state.remainingGuesses[payload]) {
        state.remainingGuesses[payload] = 6;
        return;
      }
      state.remainingGuesses[payload] -= 1;
    },
    RESET_GUESS_ELEVEN: (state) => {
      return initialState;
    },
  },
});

export const toggleGameActive = guessElevenSlice.actions.toggleGameActive;
export const toggleIntroDone = guessElevenSlice.actions.toggleIntroDone;
export const createStartingXI = guessElevenSlice.actions.createStartingXI;
export const addGuessedPlayer = guessElevenSlice.actions.addGuessedPlayer;
export const setModalOpen = guessElevenSlice.actions.setModalOpen;
export const setCurrentPlayer = guessElevenSlice.actions.setCurrentPlayer;
export const setGuessedData = guessElevenSlice.actions.setGuessedData;
export const setCurrentWordGuess = guessElevenSlice.actions.setCurrentWordGuess;
export const setGreenData = guessElevenSlice.actions.setGreenData;
export const setNameToBeFound = guessElevenSlice.actions.setNameToBeFound;
export const setRemainingGuesses = guessElevenSlice.actions.setRemainingGuesses;
export const removeGuessedData = guessElevenSlice.actions.removeGuessedData;
export const RESET_GUESS_ELEVEN = guessElevenSlice.actions.RESET_GUESS_ELEVEN;
export default guessElevenSlice.reducer;
