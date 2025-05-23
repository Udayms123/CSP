// // src/pages/changepassword.jsx

// import React from 'react';
// import Header from "../components/header";

// const ChangePassword = () => {
//   return (
//  <>
//      <Header />
      
//      <div className="change-password-page">
//        <h2>Change Password</h2>
//        <form className="change-password-form">
//          <div>
//            <label htmlFor="currentPassword">Current Password</label>
//           <input type="password" id="currentPassword" name="currentPassword" />
//         </div>
//         <div>
//           <label htmlFor="newPassword">New Password</label>
//            <input type="password" id="newPassword" name="newPassword" />
//          </div>
//          <div>
//           <label htmlFor="confirmPassword">Confirm New Password</label>
//           <input type="password" id="confirmPassword" name="confirmPassword" />
//          </div>
//          <button type="submit">Update Password</button>
//      </form>
//      </div>
//        </>
//   );
// };

// export default ChangePassword;


// src/pages/changepassword.jsx

import React from 'react';
import Header from "../components/header";
import "../styles/ChangePassword.css"; 

const ChangePassword = () => {
  return (
    <>
      <Header />

      <div className="change-password-container">
        <h2>Change Password</h2>
        <form className="change-password-form">
          <div className="form-group">
            <label htmlFor="currentPassword">Current Password</label>
            <input type="password" id="currentPassword" name="currentPassword" />
          </div>

          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input type="password" id="newPassword" name="newPassword" />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" />
          </div>

          <button type="submit" className="submit-btn">Update Password</button>
          {/* <button className="cancel-btn" onClick={() => setIsEditing(false)}></button> */}
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
