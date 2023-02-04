export enum GameEventTypeEnum {
  AUTH = "auth",
  STATE = "state",
  CONTROL = "control",
  GAME_OVER = "game_over",
}

export interface IGameEvent {
  type: GameEventTypeEnum;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}
