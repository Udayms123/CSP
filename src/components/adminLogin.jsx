



import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "./InputField";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "", auth: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let newErrors = { username: "", password: "", auth: "" };

    if (username.trim().length < 3) {
      newErrors.username = "Username must be at least 3 characters";
      valid = false;
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    // If basic validation fails, show errors and return early
    if (!valid) {
      setErrors(newErrors);
      return;
    }

    // Check hardcoded admin credentials
    const validAdmin = {
      username: "admin",
      password: "admin123"
    };

    if (username === validAdmin.username && password === validAdmin.password) {
      console.log("Logging in as admin:", { username, password });
      navigate("/demo"); // Navigate to demo page
    } else {
      newErrors.auth = "Invalid username or password";
      setErrors(newErrors);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <InputField
        type="text"
        placeholder="Admin Username"
        icon="person"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={errors.username}
      />
      <InputField
        type="password"
        placeholder="Admin Password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
      />
      {errors.auth && <p className="error-message">{errors.auth}</p>}

     

      <button
        type="button"
        className="login-button"
        onClick={() => navigate("/demo")}
>
        Log In as Admin
        </button>


    </form>
  );
};

export default AdminLogin;
