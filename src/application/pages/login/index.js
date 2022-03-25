import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";
import "./Login.css";

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let crediential = {
      email: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(login(crediential, setLoading));
  };
  return (
    <div className="login-form-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Login</h3>
        <input
          type="text"
          id="username"
          placeholder="Email"
          ref={usernameRef}
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
          ref={passwordRef}
        />

        {loading ? (
          <button>Loading...</button>
        ) : (
          <button type="submit">Login</button>
        )}
      </form>
    </div>
  );
}

export default Login;
