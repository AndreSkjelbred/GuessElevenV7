import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  guessCount: 0,
  hiddenPlayerData: [{}],
  searchIsOpen: false,
  score: 0,
  highscore: 0,
};

const hiddenSlice = createSlice({
  name: "hidden",
  initialState,
  reducers: {
    incrementHiddenGuessCount: (state, action) => {
      if (action.payload) {
        state.guessCount = 100;
        return;
      }
      ++state.guessCount;
    },
    incrementHiddenScore: (state) => {
      state.score += 1;
    },
    incrementHiddenHighscore: (state, action) => {
      const { payload } = action;
      state.highscore = payload;
    },
    resetHidden: () => {
      return initialState;
    },
    createHiddenPlayerData: (state, action) => {
      const { payload } = action;

      state.hiddenPlayerData = payload;
    },
    setSearchOpen: (state, action) => {
      const { payload } = action;
      state.searchIsOpen = payload;
    },
  },
});
export const incrementHiddenGuessCount =
  hiddenSlice.actions.incrementHiddenGuessCount;
export const resetHidden = hiddenSlice.actions.resetHidden;
export const setSearchOpen = hiddenSlice.actions.setSearchOpen;
export const incrementHiddenScore = hiddenSlice.actions.incrementHiddenScore;
export const incrementHiddenHighscore =
  hiddenSlice.actions.incrementHiddenHighscore;
export const createHiddenPlayerData =
  hiddenSlice.actions.createHiddenPlayerData;

export default hiddenSlice.reducer;
