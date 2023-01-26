export interface IEnemyScore {
  id: string;
  score: number;
  x: number;
  y: number;
}

export interface IState {
  scores: IEnemyScore[];
}
