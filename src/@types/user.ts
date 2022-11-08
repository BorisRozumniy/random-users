export interface IUser {
  id: {
    name: string;
    value: string;
  };
  name: {
    title: "Mr" | "Ms";
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

export interface UsersState {
  users: IUser[];
  usersError: Error | null;
  usersLoading: boolean;
}

export enum ActionKind {
  GET_REQUEST_USERS_START = 'GET_REQUEST_USERS_START',
  GET_REQUEST_USERS_SUCCESS = 'GET_REQUEST_USERS_SUCCESS',
  GET_REQUEST_USERS_ERROR = 'GET_REQUEST_QUESTIONNAIRES_ERROR',
}

export type ACTIONTYPE =
  | { type: ActionKind.GET_REQUEST_USERS_START }
  | { type: ActionKind.GET_REQUEST_USERS_SUCCESS; payload: IUser[] }
  | { type: ActionKind.GET_REQUEST_USERS_ERROR; payload: any }
