import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  guessCount: 0,
  playerData: [{}],
};

const careerSlice = createSlice({
  name: "career",
  initialState,
  reducers: {
    incrementGuessCount: (state, action) => {
      if (action.payload) {
        state.guessCount = 100;
        return;
      }
      ++state.guessCount;
    },
    resetCareer: () => {
      return initialState;
    },
    createPlayerData: (state, action) => {
      const { payload } = action;
      state.playerData = [payload];
    },
  },
});

export const incrementGuessCount = careerSlice.actions.incrementGuessCount;
export const resetCareer = careerSlice.actions.resetCareer;
export const createPlayerData = careerSlice.actions.createPlayerData;

export default careerSlice.reducer;
