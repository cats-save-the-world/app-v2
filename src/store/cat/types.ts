export enum CatStatusEnum {
  IDLE = "idle",
  RUNNING = "running",
  HITTING = "hitting",
}

export enum CatDirectionEnum {
  LEFT = "left",
  RIGHT = "right",
}

export interface IState {
  angle: number;
  status: CatStatusEnum;
  direction: CatDirectionEnum;
}
