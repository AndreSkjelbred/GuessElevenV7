import { createSlice } from "@reduxjs/toolkit";

const teamInfoSlice = createSlice({
  name: "teamInfoSlice",
  initialState: {
    teamLogo: "",
    teamName: "",
    gameDate: "",
    G: [],
    D: [],
    M: [],
    F: [],
    league: "",
    stadium: "",
    opponent: "",
    opponentLogo: "",
    home: "",
    isTeamInfoModalOpen: true,
  },
  reducers: {
    initNewRound: (state, action) => {
      const data = action.payload;

      if (!data) {
        return;
      }
      if (!Object.keys(data).length) {
        return;
      }

      state.G = data.info.G;
      state.D = data.info.D;
      state.M = data.info.M;
      state.F = data.info.F;

      state.teamLogo = data.info.team.logo;

      state.opponent = data.info.opponent.name;

      state.opponentLogo = data.info.opponent.logo;

      state.stadium = data.info.stadium;

      state.league = data.info.cup;

      state.teamName = data.info.team.name;

      state.home = data.info.team.side;

      state.gameDate = data.info.date;

      return;
    },

    setTeamLogo: (state, action) => {
      const { payload } = action;
      state.teamLogo = payload;
    },
    setTeamName: (state, action) => {
      const { payload } = action;
      state.teamName = payload;
    },
    setGameDate: (state, action) => {
      const { payload } = action;
      state.gameDate = payload;
    },
    setLeague: (state, action) => {
      const { payload } = action;
      state.league = payload;
    },
    setStadium: (state, action) => {
      const { payload } = action;
      state.stadium = payload;
    },
    setOpponent: (state, action) => {
      const { payload } = action;
      state.opponent = payload;
    },
    setHome: (state, action) => {
      const { payload } = action;
      state.home = payload;
    },
    setIsTeamInfoModalOpen: (state, action) => {
      state.isTeamInfoModalOpen = !state.isTeamInfoModalOpen;
    },
    setOpponentLogo: (state, action) => {
      state.opponentLogo = action.payload;
    },
  },
});

export const initNewRound = teamInfoSlice.actions.initNewRound;
export const setTeamLogo = teamInfoSlice.actions.setTeamLogo;
export const setTeamName = teamInfoSlice.actions.setTeamName;
export const setGameDate = teamInfoSlice.actions.setGameDate;
export const setLeague = teamInfoSlice.actions.setLeague;
export const setStadium = teamInfoSlice.actions.setStadium;
export const setHome = teamInfoSlice.actions.setHome;
export const setOpponent = teamInfoSlice.actions.setOpponent;
export const setIsTeamInfoModalOpen =
  teamInfoSlice.actions.setIsTeamInfoModalOpen;
export const setOpponentLogo = teamInfoSlice.actions.setOpponentLogo;
export default teamInfoSlice.reducer;
