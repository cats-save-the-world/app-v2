export interface IEnemy {
  id: string;
  angle: number;
  distance: number;
  type: "simple" | "heavy" | "light" | "twisted";
  score: number;
  alive: boolean;
}

export interface IState {
  enemies: IEnemy[];
}
