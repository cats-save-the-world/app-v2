export interface IGameResults {
  score: number;
}

export interface ISkins {
  cat: string;
}

export interface ICreateGame {
  gameId: string;
  skins: ISkins;
}
