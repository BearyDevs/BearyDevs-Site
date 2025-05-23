import { createSlice } from "@reduxjs/toolkit";

const maximizedSlice = createSlice({
  name: "maximized",
  initialState: false,
  reducers: {
    setMaximized(_state, action) {
      return action.payload;
    },
  },
});

export const { setMaximized } = maximizedSlice.actions;
export default maximizedSlice.reducer;
