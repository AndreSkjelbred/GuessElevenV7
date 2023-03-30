import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const setLoading = loadingSlice.actions.setLoading;

export default loadingSlice.reducer;
