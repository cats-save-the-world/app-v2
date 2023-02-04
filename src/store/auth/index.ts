import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StorageKeysEnum } from "../types";
import { loadFromStorage, removeFromStorage, saveToStorage } from "../utils";
import { BottomSheetEnum, ICredentials, IState } from "./types";

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
      state.username = "";
      state.credentials = action.payload;

      if (action.payload) {
        saveToStorage(StorageKeysEnum.CREDENTIALS, action.payload);
      } else {
        removeFromStorage(StorageKeysEnum.CREDENTIALS);
      }
    },
    logout(state: IState) {
      state.username = "";
      state.credentials = null;
      removeFromStorage(StorageKeysEnum.CREDENTIALS);
    },
  },
});

export const { setBottomSheet, setUsername, setCredentials, logout } =
  slice.actions;
export default slice.reducer;
