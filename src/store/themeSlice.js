import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState: {
    value: false,
  },
  reducers: {
    change: (state, action) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { change } = themeSlice.actions;

export default themeSlice.reducer;
