import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from './Auth'; 

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userHook = React.useContext(AuthContext);
  
  return (
    <Route
      {...rest}
      render={props => (userHook ? <Component {...props} /> : <Redirect to="/Login" />)}
    />
  );
};

export default PrivateRoute;
