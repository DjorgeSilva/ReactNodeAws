import { EMPTY_STRING } from "../../constants";
import registerUserPost from "../../controllers/registerUserPost";

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
