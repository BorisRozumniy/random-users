import { ActionKind as ActionKind, ACTIONTYPE, UsersState } from "../../@types/user";

export const initialState: UsersState = {
  users: [],
  usersError: null,
  usersLoading: false
}

export const reducer = (state: UsersState, action: ACTIONTYPE) => {
  switch (action.type) {

    case ActionKind.GET_REQUEST_USERS_START:
      return {
        ...state,
        usersError: null,
        usersLoading: true,
      };

    case ActionKind.GET_REQUEST_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        usersLoading: false,
      };

    case ActionKind.GET_REQUEST_USERS_ERROR:
      return {
        ...state,
        usersError: action.payload,
        usersLoading: false,
      };

    default:
      return state;
  }
};
