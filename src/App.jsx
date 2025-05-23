


import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate from react-router-dom
import SocialLogin from "./components/SocialLogin";
import InputField from "./components/InputField";

const App = () => {
  const navigate = useNavigate(); // Initialize navigate

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
      // If validation is successful, navigate to the Dashboard page
      console.log("Logging in with:", { username, password });
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      
      <SocialLogin />
      <h2 className="form-title">Customer Support Portal</h2>
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
          onClick={() => navigate("/forgot-password")} // Navigate to the forgot password page
        >
          Forgot password?
        </a>
        <button type="submit" className="login-button">Log In</button>
         <p className="signup-prompt">
      Don&apos;t have an account? <a href="#" className="signup-link">Sign up</a>
    </p>
      </form>
    </div>
  );
};

export default App;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import SocialLogin from "./components/SocialLogin";
// import InputField from "./components/InputField";
// import "./styles/login_page.css"; // Ensure this path matches your project structure

// const App = () => {
//   const navigate = useNavigate();

//   const [role, setRole] = useState("user"); // 'user' or 'admin'
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({ username: "", password: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let valid = true;
//     let newErrors = { username: "", password: "" };

//     if (username.trim().length < 3) {
//       newErrors.username = "Username must be at least 3 characters";
//       valid = false;
//     }

//     if (password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//       valid = false;
//     }

//     setErrors(newErrors);

//     if (valid) {
//       console.log(`Logging in as ${role}:`, { username, password });
//       if (role === "admin") {
//         navigate("/admin/dashboard");
//       } else {
//         navigate("/dashboard");
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <SocialLogin />

//       <div className="role-toggle">
//         <button
//           className={`user-login-button ${role === "user" ? "active" : ""}`}
//           onClick={() => setRole("user")}
//         >
//           User Login
//         </button>
//         <button
//           className={`admin-login-button ${role === "admin" ? "active" : ""}`}
//           onClick={() => setRole("admin")}
//         >
//           Admin Login
//         </button>
//       </div>

//       <h2 className="form-title">
//         {role === "admin" ? "Admin Portal" : "Customer Support Portal"}
//       </h2>

//       <form className="login-form" onSubmit={handleSubmit}>
//         <InputField
//           type="text"
//           placeholder="Username"
//           icon="person"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           error={errors.username}
//         />
//         <InputField
//           type="password"
//           placeholder="Password"
//           icon="lock"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           error={errors.password}
//         />

//         <a
//           href="#"
//           className="forgot-password-link"
//           onClick={() => navigate("/forgot-password")}
//         >
//           Forgot password?
//         </a>

//         <button type="submit" className="login-button">
//           Log In
//         </button>

//         <p className="signup-prompt">
//           Don&apos;t have an account?{" "}
//           <a href="#" className="signup-link">Sign up</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default App;
