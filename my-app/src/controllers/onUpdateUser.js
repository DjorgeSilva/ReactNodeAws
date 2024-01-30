export const onUpdateUser = async (data) => {
  const { id } = data;
  try {
    const resp = await fetch(
      `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/user/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => res.json());
    return resp;
  } catch (error) {
    console.error(error);
  }
};
