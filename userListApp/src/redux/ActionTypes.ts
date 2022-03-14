export const FETCH_USERS_LIST = "FETCH_USERS_LIST";
export const FETCH_USERS_LIST_SUCCESS = "FETCH_USERS_LIST_SUCCESS";
export const FETCH_USERS_LIST_FAILURE = "FETCH_USERS_LIST_FAILURE";
export interface FetchUserDataInterface {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
}
export interface StateInterface {
  loading: boolean;
  users: FetchUserDataInterface[];
  error: string;
}

interface FetchUsersInterface extends StateInterface {
  type: typeof FETCH_USERS_LIST;
}
interface FetchUsersSuccessInterface extends StateInterface {
  type: typeof FETCH_USERS_LIST_SUCCESS;
}
interface FetchUsersFailureInterface extends StateInterface {
  type: typeof FETCH_USERS_LIST_FAILURE;
}

export type UserActionsTypes =
  | FetchUsersInterface
  | FetchUsersFailureInterface
  | FetchUsersSuccessInterface;
