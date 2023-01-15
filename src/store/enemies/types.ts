export interface IEnemy {
  id: string;
  angle: number;
  distance: number;
  type: "simple" | "heavy" | "light" | "twisted";
}

export interface IState {
  enemies: IEnemy[];
}
