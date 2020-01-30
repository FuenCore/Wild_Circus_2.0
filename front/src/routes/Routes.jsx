import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import Main from "../components/Main";
import Login from "../components/auth/Login";
import { PrivateRoute } from "../components/auth/PrivateRoute";
import { AuthContext } from "../components/auth/Auth";
import PlacePage from "../components/PlacePage";
import ArtistPage from "../components/ArtistPage";
import HistoryPage from "../components/HistoryPage";

const Routes = () => {

    const [ authTokens, setAuthTokens ] = useState();
    const [  dataAuth, setDataAuth ] = useState();

    const setTokens = data => {
        localStorage.setItem('tokens', JSON.stringify(data));
        setAuthTokens(data);
    }

    return(
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens, dataAuth, setDataAuth }}>
        <Router>
            <Switch>
                <Route exact path="/Main" component={Main} />
                {/* <Route path="/Login" component={Login} />
                <Route path="/Place" component={PlacePage} />
                <Route path="/Team" component={ArtistPage} />
                <Route path="/History" component={HistoryPage}/> */}
                </Switch>
        </Router>
        </AuthContext.Provider>
    )
}

export default Routes;