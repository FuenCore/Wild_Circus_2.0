import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import Main from "../components/Main";
import Login from "../components/auth/Login";
import { AuthContext }  from "../components/auth/Auth";
import AdminMain from "../components/adminPanel/AdminMain";
import AddClown from "../components/adminPanel/AddClown";
import AddHistory from "../components/adminPanel/AddHistory";
import AddPlace from "../components/adminPanel/AddPlace";
import UserList from "../components/adminPanel/UserList";
import Profile from "../components/Profile";
import SignUp from "../components/auth/SignUp"
import ChatPage from "../components/ChatPage";

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
                <Route path="/AddClown" component={AddClown}/>
                <Route path="/AddHistory" component={AddHistory}/>
                <Route path="/AddPlace" component={AddPlace}/>
                <Route path="/UserList" component={UserList}/>
                <Route path="/profile" component={Profile} />
                <Route path="/signup" component={SignUp} />
                <Route path="/chat" component={ChatPage} />
                <Redirect to ="/Login"/>
                </Switch>
        </Router>
        </AuthContext.Provider>
    )
}

export default Routes;