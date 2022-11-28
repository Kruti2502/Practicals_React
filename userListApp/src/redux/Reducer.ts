import {
  FETCH_USERS_LIST,
  FETCH_USERS_LIST_SUCCESS,
  FETCH_USERS_LIST_FAILURE,
  UserActionsTypes,
  StateInterface,
} from "./ActionTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const reducer = (
  state: StateInterface = initialState,
  action: UserActionsTypes
) => {
  switch (action.type) {
    case FETCH_USERS_LIST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_LIST_SUCCESS:
      return {
        loading: false,
        users: action.users,
        error: "",
      };
    case FETCH_USERS_LIST_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
