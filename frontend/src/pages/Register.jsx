import React, { useState } from "react";
import "../css/Register.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelRegister = async (e) => {
    e.preventDefault();
    try {
      //  const response=await axios.post('http://localhost:5000/api/auth/register',{
      //   name:name,
      //   email:email,
      //   password:password
      //  });
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        { name, email, password },
        { withCredentials: true },
      );

      console.log(response.data);
      alert(response.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <div className="register-page">
      <div className="register-box">
        <h1>Create Account</h1>
        <p>Register to start managing your tasks</p>

        <form onSubmit={handelRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>

        <p className="login-text">
          Already have an account?{" "}
          <Link to="/login" className="login-text">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
