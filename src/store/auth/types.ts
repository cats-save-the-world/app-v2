export interface ICredentials {
  username: string;
  password: string;
}

export interface IState {
  credentials: ICredentials | null;
}
