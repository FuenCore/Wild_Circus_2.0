import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import Main from "../components/Main";
import Login from "../components/auth/Login";
import  PrivateRoute  from "../components/auth/PrivateRoute";
import AuthContext  from "../components/auth/Auth";
import BgMatrix from "../components/BgMatrix";
import AdminMain from "../components/adminPanel/AdminMain"

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
                <PrivateRoute path="/Main" component={Main} />
                <PrivateRoute path="/Login" component={Login} />
                <PrivateRoute path="/Admin" component={AdminMain} />
                <Route path="/matrix" component={BgMatrix} />
                </Switch>
        </Router>
        </AuthContext.Provider>
    )
}

export default Routes;