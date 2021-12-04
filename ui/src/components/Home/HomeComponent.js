import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchAnimal from "./SearchAnimal";

function Home() {
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <React.Fragment>
      <SearchAnimal user={user} />
    </React.Fragment>
  );
}

export default Home;
