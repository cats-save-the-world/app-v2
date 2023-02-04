import { ViewEnum, IState } from "./types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "router",
  initialState: {
    view: ViewEnum.LOADING,
  },
  reducers: {
    setView(state: IState, action: PayloadAction<ViewEnum>) {
      state.view = action.payload;
    },
  },
});

export const { setView } = slice.actions;
export default slice.reducer;
