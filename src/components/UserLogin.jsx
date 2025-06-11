import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";

const UserLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let newErrors = { username: "", password: "" };

    if (username.trim().length < 3) {
      newErrors.username = "Username must be at least 3 characters";
      valid = false;
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log("Logging in as user:", { username, password });
      navigate("/dashboard");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>


      <InputField
        type="text"
        placeholder="Username"
        icon="person"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={errors.username}
      />
      <InputField
        type="password"
        placeholder="Password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
      />
      <a
        href="#"
        className="forgot-password-link"
        onClick={() => navigate("/forgot-password")}
      >
        Forgot password?
      </a>
      {/* <button type="submit" className="login-button">Log In</button> */}
       <button
        type="button"
        className="login-button"
        onClick={() => navigate("/dashboard")}
>
        Log In
        </button>
      
    </form>
  );
};

export default UserLogin;
