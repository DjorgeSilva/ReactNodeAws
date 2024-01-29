export const onDeleteUser = async (id) => {
  try {
    const resp = await fetch(
      `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/user/${id}`,
      {
        method: "DELETE",
      }
    ).then((res) => res.json());
    return resp;
  } catch (error) {
    console.error(error);
  }
};
