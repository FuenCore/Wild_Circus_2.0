import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import Main from "../components/Main";
import Login from "../components/auth/Login";
import { AuthContext }  from "../components/auth/Auth";
import AdminMain from "../components/adminPanel/AdminMain";
import Profile from "../components/Profile";

const Routes = () => {

    const [ authTokens, setAuthTokens ] = useState();
    const [ dataAuth, setDataAuth ] = useState();
    const [ userInfo, setUserInfo ] = useState();


    const setTokens = data => {
        localStorage.setItem('tokens', JSON.stringify(data));
        setAuthTokens(data);
    }

    return(
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens, dataAuth, setDataAuth, userInfo, setUserInfo }}>
        <Router>
            <Switch>
                <Route path="/Main" component={Main} />
                <Route path="/Login" component={Login} />
                <Route path="/Admin" component={AdminMain} />
                <Route path="/profile" component={Profile} />
                </Switch>
        </Router>
        </AuthContext.Provider>
    )
}

export default Routes;