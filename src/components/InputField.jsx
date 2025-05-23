// import { useState } from "react";

// const InputField = ({ type, placeholder, icon }) => {
//   // State to toggle password visibility
//   const [isPasswordShown, setIsPasswordShown] = useState(false);

//   return (
//     <div className="input-wrapper">
//       <input
//         type={isPasswordShown ? 'text' : type}
//         placeholder={placeholder}
//         className="input-field"
//         required
//       />
//       <i className="material-symbols-rounded">{icon}</i>
//       {type === 'password' && (
//         <i onClick={() => setIsPasswordShown(prevState => !prevState)} className="material-symbols-rounded eye-icon">
//           {isPasswordShown ? 'visibility' : 'visibility_off'}
//         </i>
//       )}
//     </div>
//   )
// }

// export default InputField;

// const InputField = ({ type, placeholder, icon, value, onChange, error }) => {
//   return (
//     <div className="input-wrapper">
//       <input
//         type={type}
//         placeholder={placeholder}
//         className="input-field"
//         value={value}
//         onChange={onChange}
//         required
//       />
//       <i className={`icon-${icon}`}></i>
//       {error && <div className="error-message">{error}</div>}
//     </div>
//   );
// };

// export default InputField;



// import { useState } from "react";

// const InputField = ({ type, placeholder, icon }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const isPassword = type === "password";
//   const inputType = isPassword && showPassword ? "text" : type;

//   return (
//     <div className="input-wrapper">
//       <input
//         type={inputType}
//         placeholder={placeholder}
//         className="input-field"
//         required
//       />
//       <i className={`icon-${icon}`}></i>
//       {isPassword && (
//         <i
//           className="eye-icon"
//           onClick={() => setShowPassword(!showPassword)}
//         >
//           {showPassword ?'visibility' : 'visibility_off'} {/* Or use an icon font */}
//         </i>
//       )}
//     </div>
//   );
// };

// export default InputField;


import { useState } from 'react';

const InputField = ({ type, placeholder, icon }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword && isPasswordShown ? 'text' : type;

  return (
    <div className="input-wrapper">
      <input
        type={inputType}
        placeholder={placeholder}
        className="input-field"
        required
      />
      
      {/* Left icon */}
      <i className="material-symbols-rounded">{icon}</i>

      {/* Password visibility toggle */}
      {isPassword && (
        <i
          onClick={() => setIsPasswordShown(prev => !prev)}
          className="material-symbols-rounded eye-icon"
        >
          {isPasswordShown ? 'visibility' : 'visibility_off'}
        </i>
      )}
    </div>
  );
};

export default InputField;
