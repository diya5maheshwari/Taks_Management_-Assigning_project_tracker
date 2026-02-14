import { useState } from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import API from "../api/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:5000/api/auth/login", {
          email: email,
          password: password,
        },
        {withCredentials: true }
      );

      // const response = await API.post("/api/auth/login", {
      //   email,
      //   password,
      // });

      console.log(response.data);
      alert(response.data.message);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Welcome Back</h1>
        <p>Please login to your account</p>

        <form onSubmit={handleLogin}>
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

          <button type="submit">Login</button>
        </form>

        <p className="register-text">
          Don’t have an account?{" "}
          <Link to="/register" className="register-text">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
