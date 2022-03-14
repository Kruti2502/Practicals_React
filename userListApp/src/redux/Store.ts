import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import reducer from "./Reducer";
import { UserActionsTypes } from "./ActionTypes";

const rootReducer = combineReducers({ reducer });
export type RootStore = ReturnType<typeof rootReducer>;

const store = createStore<RootStore, UserActionsTypes, {}, {}>(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<RootStore, UserActionsTypes>)
);
export default store;
