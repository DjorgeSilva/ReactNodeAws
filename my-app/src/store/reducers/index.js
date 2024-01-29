import { ACTIONS_REDUX } from "../../constants";

const initialState = {
  currentUser: {},
  userList: [],
  selectedUser: {},
};

const userStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_REDUX.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case ACTIONS_REDUX.SET_USER_LIST:
      return {
        ...state,
        userList: action.payload,
      };
    case ACTIONS_REDUX.SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
    default:
      return state;
  }
};
export default userStoreReducer;
