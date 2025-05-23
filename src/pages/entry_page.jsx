// import React from "react";
// import { useNavigate } from "react-router-dom";
// import '../styles/entry_page.css';


import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/entry_page.css';

const EntryPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login"); // <-- Replace with your actual route
  };

  return (
    <div className="entry-page">
      <div className="entry-container">
        <div className="divider" />

        <div className="entry-right">
          <img
            src="/BelLogo.png"
            alt="Logo"
            className="entry-logo"
          />
        </div>


        <div className="entry-left">
             {/* <img
            src="/BelLogo.png"
            // alt="Logo"
            className="service-logo"
          /> */}
          <h1 className="entry-title">Welcome to Customer Service Portal</h1>
          <button className="login-button" 
           onClick={() => navigate("/login")}
          >



            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;




// const EntryPage = () => {
//      const navigate = useNavigate();
//   return (
//     <div className="entry-page">
//       <div className="entry-container">
//         <div className="divider" />
        


//            {/* Left Section */}
//          <div className="entry-right">
//           <img
//             src="/BelLogo.png" 
//             alt="Logo"
//             className="entry-logo"
//           />
//         </div>

      
//           {/* Right Section */}
       
//         <div className="entry-left">
//           <h1 className="entry-title">Welcome to Customer Service Portal</h1>
//           <button className="login-button">Login</button>
//         </div>

      
//       </div>
//     </div>
//   );
// };

// export default EntryPage;
