

// // import { FaUser } from 'react-icons/fa';
// // import { Link } from 'react-router-dom';

// // const Header = () => {
// //   return (
// //     <header className="dashboard-header">
// //       <div className="header-container">
// //         <div className="header-left">
// //           <img src="/BelLogo.png" alt="Logo" className="header-logo" />
// //         </div>
// //         <div className="header-center">
// //           <h1>Customer Support Portal</h1>
// //         </div>
// //         <div className="header-right">
// //           <h4>Uday  </h4>
// //           <Link to="/profile" aria-label="User Profile" className="profile-btn">
// //             <FaUser size={20} />
// //           </Link>
         
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;


// import { FaUser } from 'react-icons/fa';
// import { FaChevronDown } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="dashboard-header">
//       <div className="header-container">
//         <div className="header-left">
//           <img src="/BelLogo.png" alt="Logo" className="header-logo" />
//         </div>
//         <div className="header-center">
//           <h1>Customer Support Portal</h1>
//         </div>
//         <div className="header-right">
//           <h4>Uday</h4>

//           <div className="profile-dropdown-wrapper">
//             {/* Keep existing profile button unchanged */}
//             <Link to="/profile" aria-label="User Profile" className="profile-btn">
//               <FaUser size={20} />
//             </Link>

//             {/* New dropdown trigger and menu */}
//             <div className="dropdown-toggle">
//               <FaChevronDown size={14} />
//               <div className="dropdown-menu">
//                 <Link to="/profile">Profile</Link>
//                 <Link to="/change-password">Change Password</Link>
//                 <Link to="/logout">Logout</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;




import { FaUser, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="dashboard-header">
      <div className="header-container">
        <div className="header-left">
          <img src="/BelLogo.png" alt="Logo" className="header-logo" />
        </div>
        <div className="header-center">
          <h1>Customer Support Portal</h1>
        </div>
        <div className="header-right">
          <h4>Uday M S</h4>

          <div
            className="profile-dropdown-wrapper"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link to="/profile" aria-label="User Profile" className="profile-btn">
              <FaUser size={20} />
            </Link>

            <div className="dropdown-wrapper">
              <div className="dropdown-toggle">
                {dropdownOpen ? (
                  <FaChevronUp size={14} className="dropdown-icon" />
                ) : (
                  <FaChevronDown size={14} className="dropdown-icon" />
                )}
              </div>

              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/profile">Profile</Link>
                  <Link to="/change-password">ChangePassword</Link>
                  <Link to="/">Logout</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
