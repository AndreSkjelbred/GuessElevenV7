import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  guessCount: 0,
  higherPlayerData1: {},
  higherPlayerData2: {},
  higherPlayerData3: {},
};

const higherSlice = createSlice({
  name: "higher",
  initialState,
  reducers: {
    incrementHigherGuessCount: (state, action) => {
      if (action.payload) {
        state.guessCount = 100;
        return;
      }
      ++state.guessCount;
    },
    resetHigher: () => {
      return initialState;
    },
    createHigherPlayerData1: (state, action) => {
      const { payload } = action;

      state.higherPlayerData1 = payload;
    },
    createHigherPlayerData2: (state, action) => {
      const { payload } = action;

      state.higherPlayerData2 = payload;
    },
    createHigherPlayerData3: (state, action) => {
      const { payload } = action;

      state.higherPlayerData3 = payload;
    },
  },
});
export const incrementHigherGuessCount =
  higherSlice.actions.incrementHigherGuessCount;
export const resetHigher = higherSlice.actions.resetHigher;
export const createHigherPlayerData1 =
  higherSlice.actions.createHigherPlayerData1;
export const createHigherPlayerData2 =
  higherSlice.actions.createHigherPlayerData2;
export const createHigherPlayerData3 =
  higherSlice.actions.createHigherPlayerData3;
export default higherSlice.reducer;
