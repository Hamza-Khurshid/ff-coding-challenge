import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/actions/auth";
import "./SignUp.css";

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  console.log({ endpoint: process.env.REACT_APP_END_POINT });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let crediential = {
      email: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(signup(crediential, setLoading));
  };
  return (
    <div className="signup-form-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Sign Up</h3>
        <input
          type="text"
          id="signup-username"
          placeholder="Username/Email"
          ref={usernameRef}
        />

        <input
          type="password"
          id="signup-password"
          placeholder="Password"
          ref={passwordRef}
        />
        <input
          type="password"
          id="signup-confirm-password"
          placeholder="Confirm Password"
          ref={confirmPasswordRef}
        />

        {loading ? (
          <button>Loading...</button>
        ) : (
          <button type="submit">Sign Up</button>
        )}
      </form>
    </div>
  );
}

export default Login;
