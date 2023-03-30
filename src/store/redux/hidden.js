import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  guessCount: 0,
  hiddenPlayerData: [{}],
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
    resetHidden: () => {
      return initialState;
    },
    createHiddenPlayerData: (state, action) => {
      const { payload } = action;

      state.hiddenPlayerData = payload;
    },
  },
});
export const incrementHiddenGuessCount =
  hiddenSlice.actions.incrementHiddenGuessCount;
export const resetHidden = hiddenSlice.actions.resetHidden;
export const createHiddenPlayerData =
  hiddenSlice.actions.createHiddenPlayerData;

export default hiddenSlice.reducer;
