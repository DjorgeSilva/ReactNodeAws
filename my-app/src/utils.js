import getUsers from "./controllers/getUsers";

export const onLoadUsers = async () => {
  try {
    const resp = await getUsers();
    console.log(resp);
    if (resp && resp.success && resp.data) {
      const { data } = resp;
      return data;
    }
  } catch (e) {
    console.error(e);
  }
};
