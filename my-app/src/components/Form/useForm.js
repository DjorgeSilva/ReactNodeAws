import { EMPTY_STRING } from "../../constants";
import { onUpdateUser } from "../../controllers/onUpdateUser";
import registerUserPost from "../../controllers/registerUserPost";
import { addUserAction, updateUserAction } from "../../store/actions";

export const onSaveNewUser = async (user) => {
  try {
    const { id, name, age, job, email } = user;
    if (
      id !== EMPTY_STRING &&
      name !== EMPTY_STRING &&
      age !== EMPTY_STRING &&
      job !== EMPTY_STRING &&
      email !== EMPTY_STRING
    ) {
      return await registerUserPost(user);
    }
  } catch (error) {
    console.error(error);
  }
};

export const onMountUser = async (selectedUser, user, dispatch) => {
  if (selectedUser) {
    //  update selected user
    const resp = await onUpdateUser(user);
    if (resp.success) {
      dispatch(
        updateUserAction({
          user: user,
        })
      );
    }
  } else {
    // add new user
    const resp = await onSaveNewUser(user);
    if (resp.success) {
      dispatch(
        addUserAction({
          user,
        })
      );
    }
  }
};
