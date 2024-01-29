export default async function registerUserPost(data) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/user`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
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
