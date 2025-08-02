import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

//Get user from local storage(token), by parsing it to JSON hence localstorege only strings
const user = JSON.parse(localStorage.getItem("user"));
//inital state
const initialState = {
  user: user ? user : null, //if user is available in localStorage use it else set it to null
  isError: false, //checks error we get from server
  isSuccess: false,
  isLoading: false,
  message: "",
};
//Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      //make request
      return await authService.register(user);
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
//Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    //make request
    return await authService.login(user);
  } catch (error) {
    //check all the available errors in different places
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    //return the error message as a payload
    return thunkAPI.rejectWithValue(message);
  }
});
//Logout
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

//define slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  //the action(reducer functions) defined here are Not async functions
  reducers: {
    //regular reducer which resets state to the default(intial) values
    //we dispatch it after certain task, for example after user registers
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  //for async functions
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        //for pending/fetching data
        state.isLoading = true;
      })
      //when fullfilled and we get data(action)  that comes from register fucntion above
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        //set error message to the payload
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        //for pending/fetching data
        state.isLoading = true;
      })
      //when fullfilled and we get data(action)  that comes from register fucntion above
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        //set error message to the payload
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});
//export reducer functions/actions to make them available for components
export const { reset } = authSlice.actions;
//export the reducer, to be used in store
export default authSlice.reducer;
