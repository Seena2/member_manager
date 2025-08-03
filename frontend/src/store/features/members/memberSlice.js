import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  members: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    //reset values to initial state, unlike user in auth w/c persists
    reset: (state) => initialState,
  },
});

export const { reset } = memberSlice.actions;
export default memberSlice.reducer;
