import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IState } from "./types";

const slice = createSlice({
  name: "planet",
  initialState: {
    damage: 0,
    prevDamage: null,
  },
  reducers: {
    setPlanet(state: IState, action: PayloadAction<number>) {
      state.prevDamage = state.damage;
      state.damage = action.payload;
    },
  },
});

export const { setPlanet } = slice.actions;
export default slice.reducer;
