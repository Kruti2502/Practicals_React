import axios from "axios";
import { Dispatch } from "redux";
import {
  FETCH_USERS_LIST,
  FETCH_USERS_LIST_SUCCESS,
  FETCH_USERS_LIST_FAILURE,
  UserActionsTypes,
  FetchUserDataInterface,
} from "./ActionTypes";

interface AxiosResponseInterface {
  data: FetchUserDataInterface[];
  page: number;
  per_page: number;
  support: {
    text: string;
    url: string;
  };
  total: number;
  total_pages: number;
}
interface AxiosErrorInterface {
  name: string;
  message: string;
  stack?: string;
}

const fetchUsersRequest = (): UserActionsTypes => {
  return {
    type: FETCH_USERS_LIST,
    loading: true,
    users: [],
    error: "",
  };
};
const fetchUsersSuccess = (
  users: FetchUserDataInterface[]
): UserActionsTypes => {
  return {
    type: FETCH_USERS_LIST_SUCCESS,
    loading: false,
    users: users,
    error: "",
  };
};
const fetchUsersFailure = (error: string): UserActionsTypes => {
  return {
    type: FETCH_USERS_LIST_FAILURE,
    loading: false,
    users: [],
    error: error,
  };
};

export const fetchUsers = (pageNumber: number) => {
  return (dispatch: Dispatch<UserActionsTypes>) => {
    dispatch(fetchUsersRequest());
    axios
      .get<AxiosResponseInterface>(
        `https://reqres.in/api/users?page=${pageNumber}`
      )
      .then((response) => {
        const users = response.data.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error: AxiosErrorInterface) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
