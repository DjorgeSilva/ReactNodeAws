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

export function removeUserAction(payload) {
  return {
    type: ACTIONS_REDUX.REMOVE_USER,
    payload: payload.id,
  };
}

export function addUserAction(payload) {
  return {
    type: ACTIONS_REDUX.ADD_USER,
    payload: payload.user,
  };
}

export function updateUserAction(payload) {
  return {
    type: ACTIONS_REDUX.UPDATE_USER,
    payload: payload.user,
  };
}
