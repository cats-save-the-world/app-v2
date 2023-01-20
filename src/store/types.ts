import store from "./index";

export type StateType = ReturnType<typeof store.getState>;

export enum StorageKeysEnum {
  CREDENTIALS = "credentials",
}
