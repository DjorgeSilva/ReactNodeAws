export default async function getUsers() {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/users`
    )
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
    return response;
  } catch (error) {
    return error;
  }
}
