import { CatDirectionEnum, CatSkinEnum, CatStatusEnum, IState } from "./types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cat",
  initialState: {
    skin: CatSkinEnum.BOOTS,
    angle: 0,
    status: CatStatusEnum.IDLE,
    direction: CatDirectionEnum.RIGHT,
  },
  reducers: {
    setCatSkin(state: IState, action: PayloadAction<CatSkinEnum>) {
      state.skin = action.payload;
    },
    setCat(
      state: IState,
      action: PayloadAction<{
        angle: number;
        status: CatStatusEnum;
        direction: CatDirectionEnum;
      }>
    ) {
      const { angle, status, direction } = action.payload;
      state.angle = angle;
      state.status = status;
      state.direction = direction;
    },
  },
});

export const { setCat, setCatSkin } = slice.actions;
export default slice.reducer;
