import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IState } from "./types";

const slice = createSlice({
  name: "game",
  initialState: {
    id: null,
  },
  reducers: {
    setGameId(state: IState, action: PayloadAction<string | null>) {
      state.id = action.payload;
    },
  },
});

export const { setGameId } = slice.actions;
export default slice.reducer;
