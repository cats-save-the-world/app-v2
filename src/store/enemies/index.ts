import { IEnemy, IState } from "./types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "enemies",
  initialState: { enemies: [] },
  reducers: {
    setEnemies(state: IState, action: PayloadAction<IEnemy[]>) {
      state.enemies = action.payload;
    },
    resetEnemies(state: IState) {
      state.enemies = [];
    },
  },
});

export const { setEnemies, resetEnemies } = slice.actions;
export default slice.reducer;
