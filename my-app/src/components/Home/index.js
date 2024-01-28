import React from "react";

function Home() {
  const onClick = () => {
    const newUser = {
      id: "new id",
      name: "Jorge",
      email: "jorge18@gmail.com",
      profilePath: "my-app/src/assets/logo-stefanini.png",
    };
  };

  return (
    <div>
      <button onClick={onClick}>Add user</button>
    </div>
  );
}

export default Home;
