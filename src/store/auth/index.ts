import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IState, BottomSheetEnum, ICredentials } from "./types";

const slice = createSlice({
  name: "auth",
  initialState: {
    bottomSheet: null,
    username: "",
    credentials: null,
  },
  reducers: {
    setBottomSheet(
      state: IState,
      action: PayloadAction<BottomSheetEnum | null>
    ) {
      state.bottomSheet = action.payload;

      if (action.payload === null) {
        state.username = "";
      }
    },
    setUsername(state: IState, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setCredentials(state: IState, action: PayloadAction<ICredentials | null>) {
      state.credentials = action.payload;
    },
  },
});

export const { setBottomSheet, setUsername, setCredentials } = slice.actions;
export default slice.reducer;
