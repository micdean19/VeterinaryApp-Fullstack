import React from "react";
import { Link } from "react-router-dom";
function Home() {
    return (
        <React.Fragment>
            <div>Home Page</div>
            <p> Note that we need to specify the router</p>
            <Link to="/Animal">Click here To go to animal route</Link>
        </React.Fragment>
    );
}

export default Home;
