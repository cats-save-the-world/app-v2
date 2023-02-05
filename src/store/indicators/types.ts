export interface IIndicator {
  id: string;
  label: number;
  x: number;
  y: number;
}

export interface IState {
  indicators: IIndicator[];
}
