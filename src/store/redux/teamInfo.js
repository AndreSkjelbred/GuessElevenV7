import { createSlice } from "@reduxjs/toolkit";

const teamInfoSlice = createSlice({
  name: "teamInfoSlice",
  initialState: {
    teamLogo: "",
    teamName: "",
    gameDate: "",
    startingXI: {},
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

      state.startingXI = data.startxi;

      state.teamLogo = data.logo;

      state.opponent = data.opponent[0].name;

      state.opponentLogo = data.opponent[0].logo;

      state.stadium = data.stadium;

      state.league = data.league;

      state.teamName = data.team[0].name;

      state.home = data.team[0].side;

      state.gameDate = data.date;

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
