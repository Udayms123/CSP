// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Dashboard from "./pages/dashboard.jsx";
import ProfilePage from './pages/ProfilePage';
import ChangePassword from './pages/change.jsx'; 
import EntryPage from './pages/entry_page.jsx'; 
import DemoPage from './pages/Demo.jsx'; 
import ForgotPassword from './pages/forgot_passwd.jsx'; 








import './index.css';
import './styles/profile.css';
import './styles/header.css';
import './styles/login.css';
// import './styles/ChangePassword.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <BrowserRouter>
      <Routes>
        
         <Route path="/" element={<EntryPage />} />
         <Route path="/login" element={<App />} />
         <Route path="/demo" element={<DemoPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> 
        {/* <Route path="/forgot-password" element={<Dashboard />} />  */}
         <Route path="/profile" element={<ProfilePage />} />
           <Route path="/change-password" element={<ChangePassword />} />
           

           

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);




