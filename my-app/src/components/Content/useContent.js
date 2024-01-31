import { onDeleteUser } from "../../controllers/onDeleteUser";
import { removeUserAction, setSelectedUserAction } from "../../store/actions";

export const onDeleteClick = async (dispatch, id) => {
  await onDeleteUser(id);
  dispatch(
    removeUserAction({
      id,
    })
  );
};

export const onUpdateClick = async (dispatch, selectedUser) => {
  dispatch(setSelectedUserAction({ selectedUser }));
};
