import { combineReducers, createStore } from "redux";
import userStoreReducer from "./reducers";

const rootReducer = combineReducers({ userStore: userStoreReducer });
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
