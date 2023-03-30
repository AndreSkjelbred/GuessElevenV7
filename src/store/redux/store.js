import { configureStore } from "@reduxjs/toolkit";
import guessElevenReducer from "./guessEleven";
import teamInfoReducer from "./teamInfo";
import videoReducer from "./video";
import careerReducer from "./career";
import loadingReducer from "./loading";
import hiddenReducer from "./hidden";
import higherReducer from "./higher";

export const store = configureStore({
  reducer: {
    guessEleven: guessElevenReducer,
    teamInfo: teamInfoReducer,
    video: videoReducer,
    career: careerReducer,
    loading: loadingReducer,
    hidden: hiddenReducer,
    higher: higherReducer,
  },
});
