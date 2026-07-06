import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Login() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    // User Login
    if (
      category === "user" &&
      name === "user" &&
      pass === "1234"
    ) {
      navigate("/user");
      return;
    }

    // Admin Login
    if (
      category === "admin" &&
      name === "admin" &&
      pass === "admin123"
    ) {
      navigate("/admin");
      return;
    }

    alert("Invalid Username or Password");
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Surya & Co</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-label">Type :</label>

          <select
            className="login-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <label className="login-label">Name :</label>

          <input
            className="login-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Username"
          />

          <label className="login-label">Password :</label>

          <input
            className="login-input"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Enter Password"
          />

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;