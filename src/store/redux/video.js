import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initIntro: false,
  videoIsPlaying: false,
  introDone: false,
  videoDoneLoading: false,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setInitIntro: (state, action) => {
      const { payload } = action;
      state.initIntro = payload;
    },
    setVideoIsPlaying: (state, action) => {
      const { payload } = action;
      state.videoIsPlaying = payload;
    },
    setIntroDone: (state, action) => {
      const { payload } = action;
      state.introDone = payload;
    },
    resetVideo: (state) => {
      state.introDone = state.videoIsPlaying = state.initIntro = false;
    },
    setVideoDoneLoading: (state) => {
      state.videoDoneLoading = !state.videoDoneLoading;
    },
    RESET_VIDEO: (state) => {
      return initialState;
    },
  },
});

export const setInitIntro = videoSlice.actions.setInitIntro;
export const setVideoIsPlaying = videoSlice.actions.setVideoIsPlaying;
export const setIntroDone = videoSlice.actions.setIntroDone;
export const setVideoDoneLoading = videoSlice.actions.setVideoDoneLoading;
export const resetVideo = videoSlice.actions.resetVideo;
export const RESET_VIDEO = videoSlice.actions.RESET_VIDEO;
export default videoSlice.reducer;
