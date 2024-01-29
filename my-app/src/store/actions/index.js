import { ACTIONS_REDUX } from "../../constants";

export function setCurrentUserAction(payload) {
  return {
    type: ACTIONS_REDUX.SET_CURRENT_USER,
    payload: payload.currentUser,
  };
}

export function setUserListAction(payload) {
  return {
    type: ACTIONS_REDUX.SET_USER_LIST,
    payload: payload.userList,
  };
}

export function setSelectedUserAction(payload) {
  return {
    type: ACTIONS_REDUX.SET_SELECTED_USER,
    payload: payload.selectedUser,
  };
}
