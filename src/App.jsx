

// import { useState } from "react";
// import SocialLogin from "./components/SocialLogin";
// import AdminLogin from "./components/adminLogin";
// import UserLogin from "./components/UserLogin";
// import './styles/app.css'; 


// const App = () => {
//   const [loginMode, setLoginMode] = useState("user");

//   return (
//     <div className="login-container">
//         <SocialLogin />
     
      

//       <div className="mode-toggle">
//         <button
//           className={loginMode === "user" ? "active" : ""}
//           onClick={() => setLoginMode("user")}
//         >
//           User
//         </button>
//         <button
//           className={loginMode === "admin" ? "active" : ""}
//           onClick={() => setLoginMode("admin")}
//         >
//           Admin
//         </button>
//       </div>

    
//       <h2 className="form-title">
//         {loginMode === "admin" ? "Admin Portal" : "Customer Support Portal"}
//       </h2>

//       {loginMode === "admin" ? <AdminLogin /> : <UserLogin />}
//     </div>
//   );
// };

// export default App;




import { useState } from "react";
import SocialLogin from "./components/SocialLogin";
import AdminLogin from "./components/adminLogin";
import UserLogin from "./components/UserLogin";





import ProjectFetcher from "./components/ProjectFetcher";



const App = () => {
  const [loginMode, setLoginMode] = useState("user");

  return (
    <div className="login-container">
     
            <SocialLogin />
              {/* <ProjectFetcher /> */}
            <h2 className="form-title">
      Customer support Portal
      </h2>

     
      <div className="mode-toggle">
        <button
          className={`toggle-button ${loginMode === "user" ? "active" : ""}`}
          onClick={() => setLoginMode("user")}
        >
          User
        </button>
        <button
          className={`toggle-button ${loginMode === "admin" ? "active" : ""}`}
          onClick={() => setLoginMode("admin")}
        >
          Admin
        </button>
      </div>

    


      {/* <h2 className="form-title">
        {loginMode === "admin" ? "Admin Portal" : "Customer Support Portal"}
      </h2> */}

    
      {loginMode === "admin" ? <AdminLogin /> : <UserLogin />}
    </div>
  );
};

export default App;
