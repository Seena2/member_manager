import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import memberService from "./memberService";

const initialState = {
  members: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Create/Register member using createAsyncThunk, w/c takes action name and async function as argument
export const createMember = createAsyncThunk(
  "members/create",
  async (memberData, thunkAPI) => {
    try {
      //get token from the auth state
      const token = thunkAPI.getState().auth.user.token;
      return await memberService.createMember(memberData, token);
    } catch (error) {
      //check all the available errors in different places
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      //return the error message as a payload
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Get member Data
//we used underscore  becouse we don't pass any data
export const getMember = createAsyncThunk(
  "members/getAll",
  async (_, thunkAPI) => {
    try {
      //get token from the auth state
      const token = thunkAPI.getState().auth.user.token;
      return await memberService.getMember(token);
    } catch (error) {
      //check all the available errors in different places
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      //return the error message as a payload
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//Delete member
export const deleteMember = createAsyncThunk(
  "members/delete",
  async (id, thunkAPI) => {
    try {
      //get token from the auth state
      const token = thunkAPI.getState().auth.user.token;
      return await memberService.deleteMember(id, token);
    } catch (error) {
      //check all the available errors in different places
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      //return the error message as a payload
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    //reset values to initial state, unlike user in auth w/c persists
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createMember.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.members.push(action.payload);
      })
      .addCase(createMember.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; //set in 'catch' of createMember method above
      })
      //get member
      .addCase(getMember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMember.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.members = action.payload;
      })
      .addCase(getMember.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; //set in 'catch' of createMember method above
      })
      //delete member
      .addCase(deleteMember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteMember.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.members = state.members.filter(
          (member) => member._id !== action.payload.id
        );
      })
      .addCase(deleteMember.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; //set in 'catch' of createMember method above
      });
  },
});
export const { reset } = memberSlice.actions;
export default memberSlice.reducer;
