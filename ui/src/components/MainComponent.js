// Start describing what that component looks like
// import React from "react";
// Let's stick to a "one page" react project where we keep the header and footer
// and change the "view" or the middle section based on use case
import React, { useState, useEffect } from "react";
// Importing the other components
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Animal from "./AnimalComponent";
import Home from "./HomeComponent";
import Logout from "./LogoutComponent";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Admin from "./AdminComponent";

// This is a Component. Remember components are functions
const Main = ({ user, setUser }) => {
    // Creating States in animal.
    // pass them as props
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    return (
        // All components must be wrapped in a div or React.Fragment
        <div>
            {/* Note components are Capitalize like H*eader or F*ooter */}
            <Header setUser={setUser} user={user} />
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/animal" component={Animal} />
                <Route path="/admin" component={Admin} />
                {/* <Route path="/search" component={Search} /> */}
                {/* <Route path="/animalstatus" component={AnimalStatus} /> */}
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    );
};

// TO use components ELSEWHERE you have to export it (gonna be called in APP)
export default withRouter(Main);
