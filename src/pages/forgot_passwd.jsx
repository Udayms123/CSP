// src/pages/forgot_passwd.jsx

const ForgotPassword = () => {
  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <p>Enter your email to reset your password.</p>
      <form>
        <input type="email" placeholder="Email address" required />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword; // ✅ THIS LINE is required
