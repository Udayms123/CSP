
// import Header from "../components/header";
// const ProfilePage = () => {
//   return (
//     <>
//       <Header />
//       <div className="profile-page">
//         <h2>User Profile</h2>
//         <p>This is the profile page content.</p>
//       </div>
//     </>
//   );
// };

// export default ProfilePage;
import { useState } from "react";
import Header from "../components/header";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Uday M S",
    username: "udayms",
    email: "uday@bel.com",
    contact: "+919742922285",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // TODO: Add API call to save updated data
    alert("Changes saved!");
    setIsEditing(false);
  };

  return (
    <>
      <Header />
      <div className="profile-container">
        <div className="profile-header">
          <span className="toggle-link">
            <span
              className={!isEditing ? "active" : ""}
              onClick={() => setIsEditing(false)}
            >
              Profile
            </span>{" "}
            /{" "}
            <span
              className={isEditing ? "active" : ""}
              onClick={() => setIsEditing(true)}
            >
              Update Profile
            </span>
          </span>
        </div>

        <div className="profile-card">
          {/* <h2>{isEditing ? "Update Profile" : "User Profile"}</h2> */}

          {/* Name */}
          <div className="profile-item">
            <label>Name:</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
              />
            ) : (
              <p>{user.name}</p>
            )}
          </div>

          {/* Username */}
          <div className="profile-item">
            <label>Username:</label>
            {isEditing ? (
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputChange}
              />
            ) : (
              <p>{user.username}</p>
            )}
          </div>

          {/* Email */}
          <div className="profile-item">
            <label>Email:</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
              />
            ) : (
              <p>{user.email}</p>
            )}
          </div>

          {/* Contact Number */}
          <div className="profile-item">
            <label>Contact Number:</label>
            {isEditing ? (
              <input
                type="text"
                name="contact"
                value={user.contact}
                onChange={handleInputChange}
              />
            ) : (
              <p>{user.contact}</p>
            )}
          </div>

          {/* Save Button (only in edit mode) */}
          {isEditing && (
            <div className="profile-actions">
              <button className="save-btn" onClick={handleSave}>
                Save Changes
              </button>
              <button className="cancel-btn" onClick={() => setIsEditing(false)}>
               Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
