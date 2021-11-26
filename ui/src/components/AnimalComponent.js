import React from "react";
// import reactDom from "react-dom";
import { Link } from "react-router-dom";
function Animal() {
    return (
        <React.Fragment>
            <div>Animal Page</div>
            <p> Note that we need to specify the router</p>
            <Link to="/home">Click here To home</Link>
        </React.Fragment>
    );
}

export default Animal;
