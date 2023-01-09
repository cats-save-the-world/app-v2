import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IState } from "./types";

const slice = createSlice({
  name: "planet",
  initialState: {
    damage: 0,
    prevDamage: null,
  },
  reducers: {
    setPlanet(state: IState, action: PayloadAction<IState>) {
      state.prevDamage = state.damage;
      state.damage = action.payload.damage;
    },
  },
});

export const { setPlanet } = slice.actions;
export default slice.reducer;
