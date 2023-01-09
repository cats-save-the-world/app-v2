import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IEnemy, IState } from "./types";

const slice = createSlice({
  name: "enemies",
  initialState: { enemies: [] },
  reducers: {
    setEnemies(state: IState, action: PayloadAction<IEnemy[]>) {
      state.enemies = action.payload;
    },
  },
});

export const { setEnemies } = slice.actions;
export default slice.reducer;
