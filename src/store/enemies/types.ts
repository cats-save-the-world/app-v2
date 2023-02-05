export enum EnemyTypeEnum {
  SIMPLE = "simple",
  HEAVY = "heavy",
  LIGHT = "light",
  TWISTED = "twisted",
  HEALING = "healing",
}

export interface IEnemy {
  id: string;
  angle: number;
  distance: number;
  type: EnemyTypeEnum;
  score: number;
  alive: boolean;
}

export interface IState {
  enemies: IEnemy[];
}
