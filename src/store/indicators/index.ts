import { IIndicator, IState } from "./types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "indicators",
  initialState: { indicators: [] },
  reducers: {
    addIndicator(state: IState, action: PayloadAction<IIndicator>) {
      state.indicators.push(action.payload);
    },
    removeIndicator(state: IState, action: PayloadAction<string>) {
      state.indicators = state.indicators.filter(
        (score: IIndicator) => score.id !== action.payload
      );
    },
  },
});

export const { addIndicator, removeIndicator } = slice.actions;
export default slice.reducer;
