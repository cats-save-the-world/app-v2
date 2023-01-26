import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IEnemyScore, IState } from "./types";

const slice = createSlice({
  name: "enemyScores",
  initialState: { scores: [] },
  reducers: {
    addEnemyScore(state: IState, action: PayloadAction<IEnemyScore>) {
      state.scores.push(action.payload);
    },
    removeEnemyScore(state: IState, action: PayloadAction<string>) {
      state.scores = state.scores.filter(
        (score: IEnemyScore) => score.id !== action.payload
      );
    },
  },
});

export const { addEnemyScore, removeEnemyScore } = slice.actions;
export default slice.reducer;
