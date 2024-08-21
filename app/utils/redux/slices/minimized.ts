import { createSlice } from "@reduxjs/toolkit";

const minimizedSlice = createSlice({
  name: "minimized",
  initialState: false,
  reducers: {
    setMinimized(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setMinimized } = minimizedSlice.actions;
export default minimizedSlice.reducer;
