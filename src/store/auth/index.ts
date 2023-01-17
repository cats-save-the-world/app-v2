import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICredentials, IState } from "./types";

const slice = createSlice({
  name: "auth",
  initialState: {
    credentials: null,
  },
  reducers: {
    setCredentials(state: IState, action: PayloadAction<ICredentials>) {
      state.credentials = action.payload;
    },
  },
});

export const { setCredentials } = slice.actions;
export default slice.reducer;
