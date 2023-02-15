export enum CatStatusEnum {
  IDLE = "idle",
  RUNNING = "running",
  HITTING = "hitting",
}

export enum CatDirectionEnum {
  LEFT = "left",
  RIGHT = "right",
}

export enum CatSkinEnum {
  BOOTS = "boots",
  BELLA = "bella",
  TIGER = "tiger",
  LUNA = "luna",
  SHADOW = "shadow",
}

export interface IState {
  skin: CatSkinEnum | null;
  angle: number;
  status: CatStatusEnum;
  direction: CatDirectionEnum;
}
