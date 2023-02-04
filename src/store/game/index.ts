import { IState } from "./types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "game",
  initialState: {
    id: null,
    score: 0,
  },
  reducers: {
    resetGame(state: IState) {
      state.id = null;
      state.score = 0;
    },
    setGameId(state: IState, action: PayloadAction<string | null>) {
      state.id = action.payload;
    },
    setScore(state: IState, action: PayloadAction<number>) {
      state.score = action.payload;
    },
  },
});

export const { setGameId, setScore, resetGame } = slice.actions;
export default slice.reducer;
