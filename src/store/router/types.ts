export enum ViewEnum {
  LOADING = "loading",
  AUTH_USERNAME = "authUsername",
  AUTH_REGISTER = "authRegister",
  AUTH_LOGIN = "authLogin",
  MAIN = "main",
  GAME = "game",
}

export interface IState {
  view: ViewEnum;
}
