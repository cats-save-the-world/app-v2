import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IState, BottomSheetEnum, ICredentials } from "./types";
import { loadFromStorage, saveToStorage, removeFromStorage } from "../utils";
import { StorageKeysEnum } from "../types";

const slice = createSlice({
  name: "auth",
  initialState: {
    bottomSheet: null,
    username: "",
    credentials: loadFromStorage(StorageKeysEnum.CREDENTIALS),
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

      if (action.payload) {
        saveToStorage(StorageKeysEnum.CREDENTIALS, action.payload);
      } else {
        removeFromStorage(StorageKeysEnum.CREDENTIALS);
      }
    },
  },
});

export const { setBottomSheet, setUsername, setCredentials } = slice.actions;
export default slice.reducer;
