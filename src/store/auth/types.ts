export enum BottomSheetEnum {
  USERNAME = "username",
  NEW_USER = "newUser",
  SIGN_IN = "signIn",
  SIGN_UP = "signUp",
}

export interface ICredentials {
  username: string;
  password: string;
}

export interface IState {
  bottomSheet: BottomSheetEnum | null;
  username: string;
  credentials: ICredentials | null;
}
