import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import { useAuth } from './Auth';
import './Login.css';

const Login = ({ dispatch }, props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const { setAuthTokens } = useAuth();

  const postLogin = () => {
    axios
      .post(`http://localhost:5000/api/auth/login`, {
        username,
        pass
      })
      .then(res => {
        setAuthTokens(res.data.token);
        setIsLoggedIn(true);
    //     dispatch({
    //       type: 'GET_LICENCE',
    //       payload: res.data.user[0].licence_nbr
    //     });
    //     dispatch({
    //       type: 'GET_IS_ADMIN',
    //       payload: res.data.user[0].is_admin
    //     });
    //     dispatch({
    //       type: 'GET_IS_SUPER',
    //       payload: res.data.user[0].is_super
    //     });

    //     setIsError(true);
    //   })
    //   .catch(e => {
    //     setIsError(true);
      });
  };

  if (isLoggedIn) {
    return <Redirect to="/Main" />;
  }
  return (
    <div className="Login_container">
      {/* <div className="loginForm-logo">FC</div>

      <div className="login-spread">
        <div className="loginForm-form">
          <input
            name="email"
            className="loginForm-input"
            type="email"
            placeholder="Email"
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            name="password"
            className="loginForm-input"
            type="password"
            placeholder="Mot de passe"
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <button className="loginForm-btn" text="Connexion" onClick={() => postLogin()} />
        </div>
        <div>
        </div>
        <div className="subscribe-shape">
          <button
            className="firstCo-btn"
            type="button"
            rootLink="/Subscribe"
            text="S'inscrire"
          />
        </div>
      </div> */}
      <input name="username" className="Login_username" type="username" placeholder="Nom de compte" onChange={(e) => setUsername(e.target.value)}/>
      <input name="password" className="Login_password" type="password" placeholder="Mot de passe" onChange={(e) => setPass(e.target.value)}/>
      <button className="Login_button" onClick={() => postLogin()}>Connexion</button>
    </div>
  );
};
// }
// const mapStateToProps = store => {
//   return { url: store.todos.url };
// };

// export default connect(mapStateToProps, null)(Login);

export default Login;
