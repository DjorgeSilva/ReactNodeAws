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
    case ACTIONS_REDUX.REMOVE_USER:
      const updatedUserList = state.userList.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        userList: updatedUserList,
      };

    default:
      return state;
  }
};
export default userStoreReducer;
