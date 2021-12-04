// Start describing what that component looks like
import React from "react";
// Let's stick to a "one page" react project where we keep the header and footer
// and change the "view" or the middle section based on use case

// Importing the other components
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Animal from "./AnimalComponent";
import Home from "./Home/HomeComponent";
import Logout from "./Admin/LogoutComponent";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Admin from "./Admin/AdminComponent";

// This is a Component. Remember components are functions
const Main = ({ user, setUser }) => {
  return (
    // All components must be wrapped in a div or React.Fragment
    <div>
      {/* Note components are Capitalize like H*eader or F*ooter */}
      <Header setUser={setUser} user={user} />
      <Switch>
        <Route path="/home" component={Home} />
        {/* <Route path="/requests" component={Request} /> */}
        <Route path="/animal" component={Animal} />
        <Route path="/admin" component={Admin} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
};

// TO use components ELSEWHERE you have to export it (gonna be called in APP)
export default withRouter(Main);
