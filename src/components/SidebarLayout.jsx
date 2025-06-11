// import { Outlet, Link, useLocation } from 'react-router-dom';
// import { Home, User, Key, LogOut } from 'lucide-react';
// import { useState } from 'react';

// const navItems = [
//   { name: "Dashboard", icon: <Home size={20} />, path: "/dashboard" },
//   { name: "Profile", icon: <User size={20} />, path: "/profile" },
//   { name: "Change Password", icon: <Key size={20} />, path: "/change-password" },
//   { name: "Logout", icon: <LogOut size={20} />, path: "/login" },
// ];

// export default function SidebarLayout() {
//   const [collapsed, setCollapsed] = useState(false);
//   const location = useLocation();

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside
//         className={`${
//           collapsed ? "w-16" : "w-64"
//         } transition-all duration-300 bg-white shadow-lg`}
//       >
//         <div className="flex items-center justify-between p-4 border-b">
//           {!collapsed && <span className="font-bold text-lg">MyApp</span>}
//           <button onClick={() => setCollapsed(!collapsed)} className="text-gray-500">
//             ☰
//           </button>
//         </div>
//         <nav className="mt-4">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               className={`flex items-center px-4 py-2 hover:bg-gray-200 ${
//                 location.pathname === item.path ? "bg-gray-300 font-semibold" : ""
//               }`}
//             >
//               <span className="mr-3">{item.icon}</span>
//               {!collapsed && <span>{item.name}</span>}
//             </Link>
//           ))}
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 overflow-auto">
//         <Outlet /> {/* This renders the child route */}
//       </main>
//     </div>
//   );
// }



// import './SidebarLayout.css';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, User, Key, LogOut } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { name: "Dashboard", icon: <Home size={20} />, path: "/dashboard" },
  { name: "Profile", icon: <User size={20} />, path: "/profile" },
  { name: "Change Password", icon: <Key size={20} />, path: "/change-password" },
  { name: "Logout", icon: <LogOut size={20} />, path: "/login" },
];

export default function SidebarLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="layout">
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          {!collapsed && <span>MyApp</span>}
          <button onClick={() => setCollapsed(!collapsed)}>☰</button>
        </div>
        <nav className="nav">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              {!collapsed && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
