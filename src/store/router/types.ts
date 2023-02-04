export enum ViewEnum {
  LOADING = "loading",
  AUTH_USERNAME = "authUsername",
  AUTH_REGISTER = "authRegister",
  AUTH_LOGIN = "authLogin",
  MAIN = "main",
  GAME = "game",
  GAME_OVER = "gameOver",
}

export interface IState {
  view: ViewEnum;
}
