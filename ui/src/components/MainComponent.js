// Start describing what that component looks like
import React from "react";
// Let's stick to a "one page" react project where we keep the header and footer
// and change the "view" or the middle section based on use case

// Importing the other components
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Animal from "./AnimalComponent";
import Home from "./HomeComponent";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// This is a Component. Remember components are functions
function Main() {
    return (
        // All components must be wrapped in a div or React.Fragment
        <div>
            {/* Note components are Capitalize like H*eader or F*ooter */}
            <Header />
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/animal" component={Animal} />
                {/* <Route path="/animalstatus" component={AnimalStatus} /> */}
                {/* <Route path="/animalstatus" component={AnimalStatus} /> */}
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    );
}

// TO use components ELSEWHERE you have to export it (gonna be called in APP)
export default withRouter(Main);
