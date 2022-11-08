import { Dispatch } from "react";
import { ActionKind, ACTIONTYPE, IUser } from "../../@types/user";
import { apiUrls } from "../../urls/apiUrls";

type Params = {
  dispatch: Dispatch<ACTIONTYPE>,
  numberOfUsers?: number
}

type Data = {
  results: IUser[];
  info: any;
};

export const getRequestUsers = ({ dispatch, numberOfUsers = 20 }: Params) => {
  dispatch({ type: ActionKind.GET_REQUEST_USERS_START })
  fetch(apiUrls.users + `?results=${numberOfUsers}`)
    .then((res) => res.json())
    .then((data: Data) => {
      dispatch({ type: ActionKind.GET_REQUEST_USERS_SUCCESS, payload: data.results });
    })
    .catch((error) => {
      console.log("error", error);
      dispatch({ type: ActionKind.GET_REQUEST_USERS_ERROR, payload: error })
    })
}
