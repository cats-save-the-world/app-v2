export interface IEnemy {
  id: string;
  angle: number;
  distance: number;
}

export interface IState {
  enemies: IEnemy[];
}
