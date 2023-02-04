import { IState, CatStatusEnum, CatDirectionEnum } from "./types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cat",
  initialState: {
    angle: 0,
    status: CatStatusEnum.IDLE,
    direction: CatDirectionEnum.RIGHT,
  },
  reducers: {
    setCat(state: IState, action: PayloadAction<IState>) {
      const { angle, status, direction } = action.payload;
      state.angle = angle;
      state.status = status;
      state.direction = direction;
    },
  },
});

export const { setCat } = slice.actions;
export default slice.reducer;
