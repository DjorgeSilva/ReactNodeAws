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
    case ACTIONS_REDUX.REMOVE_USER: {
      return {
        ...state,
        userList: state.userList.filter((user) => user.id !== action.payload),
      };
    }
    case ACTIONS_REDUX.ADD_USER: {
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    }
    case ACTIONS_REDUX.UPDATE_USER: {
      return {
        ...state,
        userList: state.userList.map((user) => {
          if (user.id === action.payload.id) {
            return { ...action.payload };
          }
          return user;
        }),
      };
    }

    default:
      return state;
  }
};
export default userStoreReducer;
