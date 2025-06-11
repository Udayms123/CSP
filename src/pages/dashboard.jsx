



// import { useState } from "react";
// import Header from "../components/header";
// import PopupForm from "../components/PopupForm";
// import "../styles/dashboard.css";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const Dashboard = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(5);
//   const [showPopup, setShowPopup] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredProjects, setFilteredProjects] = useState(null);

//   const [projects, setProjects] = useState([
//     { id: 1, name: 'DCN', customer: 'Project A', description: 'Description A', startDate: '2025-01-01', endDate: '2025-12-31', warranty: '1 year', status: 'Completed', owner: 'Uday' },
//     { id: 2, name: 'DGQA', customer: 'Project A', description: 'Description Bescription B ', startDate: '2025-02-01', endDate: '2025-11-30', warranty: '2 years', status: 'In Progress', owner: 'Uday' },
//     { id: 3, name: 'PKI', customer: 'Project A', description: 'Description C', startDate: '2025-03-01', endDate: '2025-09-30', warranty: '1 year', status: 'Pending', owner: 'Uday' },
//     { id: 4, name: 'ESign', customer: 'Project A', description: 'Description D', startDate: '2025-04-01', endDate: '2025-09-30', warranty: '1 year', status: 'Completed', owner: 'mahith' },
//     { id: 5, name: 'ICMR', customer: 'Project A', description: 'Description E', startDate: '2025-05-01', endDate: '2025-08-31', warranty: '1.5 years', status: 'In Progress', owner: 'seshan' },
//     { id: 6, name: 'Project F', customer: 'Project A', description: 'Description F', startDate: '2025-06-01', endDate: '2025-07-31', warranty: '2 years', status: 'Completed', owner: 'Uday' },
//     { id: 7, name: 'Project G', customer: 'Project A', description: 'Description G', startDate: '2025-07-01', endDate: '2025-10-30', warranty: '1 year', status: 'Pending', owner: 'Uday' },
//   ]);

//   const displayedProjects = filteredProjects ?? projects;

//   const totalPages = Math.ceil(displayedProjects.length / itemsPerPage);
//   const currentProjects = displayedProjects.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePageChange = (page) => {
//     if (page < 1 || page > totalPages) return;
//     setCurrentPage(page);
//   };

//   const handleStatusChange = (id, newStatus) => {
//     const updated = projects.map(p => p.id === id ? { ...p, status: newStatus } : p);
//     setProjects(updated);
//     if (filteredProjects) {
//       const updatedFiltered = filteredProjects.map(p => p.id === id ? { ...p, status: newStatus } : p);
//       setFilteredProjects(updatedFiltered);
//     }
//   };

//   const handleCreateNewClick = () => setShowPopup(true);
//   const handleClosePopup = () => setShowPopup(false);

//   const handleAddProject = (newProject) => {
//     const nextId = projects.length ? Math.max(...projects.map(p => p.id)) + 1 : 1;
//     const updated = [...projects, { ...newProject, id: nextId }];
//     setProjects(updated);
//     setFilteredProjects(null); // Clear any filters
//   };

//   // const handleSearchClick = () => {
//   //   const filtered = projects.filter(project =>
//   //     project.name.toLowerCase().includes(searchTerm.toLowerCase()),
//   //     //  project.customer.toLowerCase().includes(searchTerm.toLowerCase())
//   //   );
//   //   setFilteredProjects(filtered);
//   //   setCurrentPage(1);
//   // };

//   const handleSearchClick = () => {
//   const filtered = projects.filter(project =>
//     ['name', 'customer', 'owner'].some(key =>
//       project[key].toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );
//   setFilteredProjects(filtered);
//   setCurrentPage(1);
// };


//   const statusCount = projects.reduce((acc, project) => {
//     acc[project.status] = (acc[project.status] || 0) + 1;
//     return acc;
//   }, {});

//   const pieData = Object.keys(statusCount).map(status => ({
//     name: status,
//     value: statusCount[status]
//   }));

//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

//   return (
//     <div>
//       <Header />
//       <main className="dashboard-content">

      

//         {/* Pie Chart with Legend */}
//         <div className="chart-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', marginBottom: '40px' }}>
//           <ResponsiveContainer width="80%" height={300}>
//              <h3>Project Status Overview</h3>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}
//                 fill="#8884d8"
//                 label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
//               >
//                 {pieData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>

//           {/* Legend */}
//           <div className="status-legend">
//             <h4>Status Summary</h4>
//             <ul style={{ listStyleType: 'none', padding: 0 }}>
//               {pieData.map((entry, index) => (
//                 <li key={index} style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
//                   <div style={{
//                     width: '12px',
//                     height: '12px',
//                     backgroundColor: COLORS[index % COLORS.length],
//                     marginRight: '10px',
//                     borderRadius: '50%',
//                   }}></div>
//                   <span>{entry.name}: {entry.value}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Create New Button */}
//         <div className="create-new-container">
//           <button className="create-new-button" onClick={handleCreateNewClick}>
//             Create New
//           </button>
//         </div>
//         {showPopup && (
//           <PopupForm onClose={handleClosePopup} onSubmit={handleAddProject} />
//         )}





//           {/* Search Bar */}
//         <div style={{ textAlign: "center", margin: "20px 0" }}>
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={{ padding: "10px", width: "300px", fontSize: "16px" }}
//           />
//           <button
//             onClick={handleSearchClick}
//             style={{ padding: "10px 15px", marginLeft: "10px", fontSize: "16px" }}
//           >
//             Search
//           </button>
//         </div>



//         {/* Projects Table */}
//         <table className="projects-table">
//           <thead>
//             <tr>
//               <th>Sl No</th>
//               <th>Project Name</th>
//               <th>Customer Name</th>
//               <th>Ticket Description</th>
            
//               <th>End Date</th>
//               <th>Warrenty From</th>
//               <th>Warranty End</th>
//               <th>Owner</th>
//               <th>Status</th>
//               <th>Modify</th>

//             </tr>
//           </thead>
//           <tbody>
//             {currentProjects.map((project, index) => (
//               <tr key={project.id}>
//                 <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
//                 <td>{project.name}</td>
//                 <td>{project.customer}</td>
//                 <td>{project.description}</td>
//                 <td>{project.startDate}</td>
//                 <td>{project.endDate}</td>
//                 <td>{project.warranty}</td>
//                 <td>{project.owner}</td>
//                 <td>
//                   <select
//                     value={project.status}
//                     onChange={(e) => handleStatusChange(project.id, e.target.value)}
//                   >
//                     <option value="Completed">Completed</option>
//                     <option value="In Progress">In Progress</option>
//                     <option value="Pending">Pending</option>
//                     <option value="On Hold">On Hold</option>
//                   </select>
//                 </td>
//                  <td>{project.modify}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="pagination-controls">
//           <div className="items-per-page">
//             <label>Items per page: </label>
//             <select value={itemsPerPage} onChange={(e) => {
//               setItemsPerPage(Number(e.target.value));
//               setCurrentPage(1);
//             }}>
//               <option value={5}>5</option>
//               <option value={10}>10</option>
//               <option value={15}>15</option>
//               <option value={20}>20</option>
//             </select>
//           </div>

//           <div className="pagination">
//             <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
//               Previous
//             </button>
//             <span>{currentPage} of {totalPages}</span>
//             <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
//               Next
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;





// import { useEffect, useState } from "react";
// import Header from "../components/header";
// import PopupForm from "../components/PopupForm";
// import "../styles/dashboard.css";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const Dashboard = () => {
//   const [projects, setProjects] = useState([]);
//   const [filteredProjects, setFilteredProjects] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(5);
//   const [showPopup, setShowPopup] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

 
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         const formatted = data.map((user, idx) => ({
//           id: user.id,
//           name: user.username,
//           customer: user.company.name,
//           description: user.company.catchPhrase,
//           startDate: "2025-01-01",
//           endDate: "2025-12-31",
//           warranty: "1 year",
//           status: idx % 3 === 0 ? "Completed" : idx % 3 === 1 ? "In Progress" : "Pending",
//           owner: user.name,
//         }));
//         setProjects(formatted);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   const displayedProjects = filteredProjects ?? projects;
//   const totalPages = Math.ceil(displayedProjects.length / itemsPerPage);
//   const currentProjects = displayedProjects.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePageChange = (page) => {
//     if (page < 1 || page > totalPages) return;
//     setCurrentPage(page);
//   };

//   const handleStatusChange = (id, newStatus) => {
//     const updated = projects.map((p) =>
//       p.id === id ? { ...p, status: newStatus } : p
//     );
//     setProjects(updated);
//     if (filteredProjects) {
//       const updatedFiltered = filteredProjects.map((p) =>
//         p.id === id ? { ...p, status: newStatus } : p
//       );
//       setFilteredProjects(updatedFiltered);
//     }
//   };

//   const handleCreateNewClick = () => setShowPopup(true);
//   const handleClosePopup = () => setShowPopup(false);

//   const handleAddProject = (newProject) => {
//     const nextId = projects.length ? Math.max(...projects.map((p) => p.id)) + 1 : 1;
//     const updated = [...projects, { ...newProject, id: nextId }];
//     setProjects(updated);
//     setFilteredProjects(null);
//   };

//   const handleSearchClick = () => {
//     const filtered = projects.filter((project) =>
//       ["name", "customer", "owner"].some((key) =>
//         project[key]?.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );
//     setFilteredProjects(filtered);
//     setCurrentPage(1);
//   };

//   const statusCount = projects.reduce((acc, project) => {
//     acc[project.status] = (acc[project.status] || 0) + 1;
//     return acc;
//   }, {});

//   const pieData = Object.keys(statusCount).map((status) => ({
//     name: status,
//     value: statusCount[status],
//   }));

//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

//   return (
//     <div>
//       <Header />
//       <main className="dashboard-content">
//         {/* Chart */}
//         <div className="chart-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "40px", marginBottom: "40px" }}>
//           <ResponsiveContainer width="80%" height={300}>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}
//                 fill="#8884d8"
//                 label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
//               >
//                 {pieData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>

//           <div className="status-legend">
//             <h4>Status Summary</h4>
//             <ul style={{ listStyleType: "none", padding: 0 }}>
//               {pieData.map((entry, index) => (
//                 <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
//                   <div
//                     style={{
//                       width: "12px",
//                       height: "12px",
//                       backgroundColor: COLORS[index % COLORS.length],
//                       marginRight: "10px",
//                       borderRadius: "50%",
//                     }}
//                   ></div>
//                   <span>{entry.name}: {entry.value}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Create New */}
//         <div className="create-new-container">
//           <button className="create-new-button" onClick={handleCreateNewClick}>
//             Create New
//           </button>
//         </div>
//         {showPopup && <PopupForm onClose={handleClosePopup} onSubmit={handleAddProject} />}

//         {/* Search */}
//         <div style={{ textAlign: "center", margin: "20px 0" }}>
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={{ padding: "10px", width: "300px", fontSize: "16px" }}
//           />
//           <button onClick={handleSearchClick} style={{ padding: "10px 15px", marginLeft: "10px", fontSize: "16px" }}>
//             Search
//           </button>
//         </div>

//         {/* Table */}
//         <table className="projects-table">
//           <thead>
//             <tr>
//               <th>Sl No</th>
//               <th>Project Name</th>
//               <th>Customer Name</th>
//               <th>Ticket Description</th>
//               <th>End Date</th>
//               <th>Warrenty From</th>
//               <th>Warranty End</th>
//               <th>Owner</th>
//               <th>Status</th>
//               <th>Modify</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentProjects.map((project, index) => (
//               <tr key={project.id}>
//                 <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
//                 <td>{project.name}</td>
//                 <td>{project.customer}</td>
//                 <td>{project.description}</td>
//                 <td>{project.startDate}</td>
//                 <td>{project.endDate}</td>
//                 <td>{project.warranty}</td>
//                 <td>{project.owner}</td>
//                 <td>
//                   <select
//                     value={project.status}
//                     onChange={(e) => handleStatusChange(project.id, e.target.value)}
//                   >
//                     <option value="Completed">Completed</option>
//                     <option value="In Progress">In Progress</option>
//                     <option value="Pending">Pending</option>
//                     <option value="On Hold">On Hold</option>
//                   </select>
//                 </td>
//                 <td>—</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="pagination-controls">
//           <div className="items-per-page">
//             <label>Items per page: </label>
//             <select
//               value={itemsPerPage}
//               onChange={(e) => {
//                 setItemsPerPage(Number(e.target.value));
//                 setCurrentPage(1);
//               }}
//             >
//               <option value={5}>5</option>
//               <option value={10}>10</option>
//               <option value={15}>15</option>
//               <option value={20}>20</option>
//             </select>
//           </div>
//           <div className="pagination">
//             <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
//               Previous
//             </button>
//             <span>{currentPage} of {totalPages}</span>
//             <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
//               Next
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;





// import { useEffect, useState } from "react";
// import Header from "../components/header";
// import PopupForm from "../components/PopupForm";
// import "../styles/dashboard.css";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const Dashboard = () => {
//   const [projects, setProjects] = useState([]);
//   const [filteredProjects, setFilteredProjects] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(5);
//   const [showPopup, setShowPopup] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);

//   // ✅ Dummy API fetch
//   useEffect(() => {
//   fetch("http://localhost:8080/api/projects")
//     .then((res) => res.json())
//     .then((data) => {
//       const formatted = data.map((project) => ({
//         id: project.id,
//         name: project.name,
//         customer: project.customer,
//         description: project.description,
//         startDate: project.startDate,
//         endDate: project.endDate,
//         warranty: project.warranty,
//         status: project.status,
//         owner: project.owner,
//       }));
//       setProjects(formatted);
//     })
//     .catch((error) => console.error("Fetch error:", error))
//     .finally(() => setLoading(false));
// }, []);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         const formatted = data.map((user, idx) => ({
//           id: user.id,
//           name: user.username,
//           customer: user.company.name,
//           description: user.company.catchPhrase,
//           startDate: "2025-01-01",
//           endDate: "2025-12-31",
//           warranty: "1 year",
//           status: idx % 3 === 0 ? "Completed" : idx % 3 === 1 ? "In Progress" : "Pending",
//           owner: user.name,
//         }));
//         setProjects(formatted);
//       })
//       .catch((error) => console.error("Fetch error:", error))
//       .finally(() => setLoading(false));
//   }, []);

//   const displayedProjects = filteredProjects ?? projects;
//   const totalPages = Math.ceil(displayedProjects.length / itemsPerPage);
//   const currentProjects = displayedProjects.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   // ✅ Simulated server-side update (dummy PATCH)
//   const handleStatusChange = (id, newStatus) => {
//     const updated = projects.map((p) =>
//       p.id === id ? { ...p, status: newStatus } : p
//     );
//     setProjects(updated);
//     if (filteredProjects) {
//       const updatedFiltered = filteredProjects.map((p) =>
//         p.id === id ? { ...p, status: newStatus } : p
//       );
//       setFilteredProjects(updatedFiltered);
//     }

//     // 🔄 Simulate API update (doesn't persist with JSONPlaceholder)
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ status: newStatus }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Status updated on server (simulated):", data);
//       })
//       .catch((err) => console.error("Error updating status:", err));
//   };

//   const handleCreateNewClick = () => setShowPopup(true);
//   const handleClosePopup = () => setShowPopup(false);

//   const handleAddProject = (newProject) => {
//     const nextId = projects.length ? Math.max(...projects.map((p) => p.id)) + 1 : 1;
//     const updated = [...projects, { ...newProject, id: nextId }];
//     setProjects(updated);
//     setFilteredProjects(null);
//   };

//   const handleSearchClick = () => {
//     const filtered = projects.filter((project) =>
//       ["name", "customer", "owner"].some((key) =>
//         project[key]?.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );
//     setFilteredProjects(filtered);
//     setCurrentPage(1);
//   };

//   const statusCount = projects.reduce((acc, project) => {
//     acc[project.status] = (acc[project.status] || 0) + 1;
//     return acc;
//   }, {});

//   const pieData = Object.keys(statusCount).map((status) => ({
//     name: status,
//     value: statusCount[status],
//   }));

//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

//   if (loading) return <div style={{ padding: 40 }}>Loading projects...</div>;

//   return (
//     <div>
//       <Header />
//       <main className="dashboard-content">
//         {/* Chart */}
//         <div className="chart-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "40px", marginBottom: "40px" }}>
//           <ResponsiveContainer width="80%" height={300}>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}
//                 fill="#8884d8"
//                 label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
//               >
//                 {pieData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>

//           <div className="status-legend">
//             <h4>Status Summary</h4>
//             <ul style={{ listStyleType: "none", padding: 0 }}>
//               {pieData.map((entry, index) => (
//                 <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
//                   <div
//                     style={{
//                       width: "12px",
//                       height: "12px",
//                       backgroundColor: COLORS[index % COLORS.length],
//                       marginRight: "10px",
//                       borderRadius: "50%",
//                     }}
//                   ></div>
//                   <span>{entry.name}: {entry.value}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Create New */}
//         <div className="create-new-container">
//           <button className="create-new-button" onClick={handleCreateNewClick}>
//             Create New
//           </button>
//         </div>
//         {showPopup && <PopupForm onClose={handleClosePopup} onSubmit={handleAddProject} />}

//         {/* Search */}
//         <div style={{ textAlign: "center", margin: "20px 0" }}>
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={{ padding: "10px", width: "300px", fontSize: "16px" }}
//           />
//           <button onClick={handleSearchClick} style={{ padding: "10px 15px", marginLeft: "10px", fontSize: "16px" }}>
//             Search
//           </button>
//         </div>

//         {/* Table */}
//         <table className="projects-table">
//           <thead>
//             <tr>
//               <th>Sl No</th>
//               <th>Project Name</th>
//               <th>Customer Name</th>
//               <th>Ticket Description</th>
//               <th>End Date</th>
//               <th>Warrenty From</th>
//               <th>Warranty End</th>
//               <th>Owner</th>
//               <th>Status</th>
//               <th>Modify</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentProjects.map((project, index) => (
//               <tr key={project.id}>
//                 <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
//                 <td>{project.name}</td>
//                 <td>{project.customer}</td>
//                 <td>{project.description}</td>
//                 <td>{project.startDate}</td>
//                 <td>{project.endDate}</td>
//                 <td>{project.warranty}</td>
//                 <td>{project.owner}</td>
//                 <td>
//                   <select
//                     value={project.status}
//                     onChange={(e) => handleStatusChange(project.id, e.target.value)}
//                   >
//                     <option value="Completed">Completed</option>
//                     <option value="In Progress">In Progress</option>
//                     <option value="Pending">Pending</option>
//                     <option value="On Hold">On Hold</option>
//                   </select>
//                 </td>
//                 <td>—</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="pagination-controls">
//           <div className="items-per-page">
//             <label>Items per page: </label>
//             <select
//               value={itemsPerPage}
//               onChange={(e) => {
//                 setItemsPerPage(Number(e.target.value));
//                 setCurrentPage(1);
//               }}
//             >
//               <option value={5}>5</option>
//               <option value={10}>10</option>
//               <option value={15}>15</option>
//               <option value={20}>20</option>
//             </select>
//           </div>
//           <div className="pagination">
//             <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
//               Previous
//             </button>
//             <span>{currentPage} of {totalPages}</span>
//             <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
//               Next
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;


// import { useEffect, useState } from "react";
// import Header from "../components/header";
// import PopupForm from "../components/PopupForm";
// import "../styles/dashboard.css";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const Dashboard = () => {
//   const [projects, setProjects] = useState([]);
//   const [filteredProjects, setFilteredProjects] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(5);
//   const [showPopup, setShowPopup] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:8080/api/projects")
//       .then((res) => {
//         if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//         return res.json();
//       })
//       .then((data) => {
//         // Assuming backend returns array of projects with these fields
//         const formatted = data.map((project, idx) => ({
//           id: project.id,
//           name: project.name,
//           customer: project.customerName,
//           description: project.description,
//           startDate: project.endDate,
//           endDate: project.warrantyFrom,
//           warranty: project.warrantyEnd,
//           status: project.status,
//           owner: project.owner,
//         }));
//         setProjects(formatted);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   const displayedProjects = filteredProjects ?? projects;
//   const totalPages = Math.ceil(displayedProjects.length / itemsPerPage);
//   const currentProjects = displayedProjects.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handleStatusChange = (id, newStatus) => {
//     const updated = projects.map((p) =>
//       p.id === id ? { ...p, status: newStatus } : p
//     );
//     setProjects(updated);
//     if (filteredProjects) {
//       const updatedFiltered = filteredProjects.map((p) =>
//         p.id === id ? { ...p, status: newStatus } : p
//       );
//       setFilteredProjects(updatedFiltered);
//     }
//     const handleDeleteProject = (id) => {
//   if (!window.confirm("Are you sure you want to delete this project?")) return;

//   fetch(`http://localhost:8080/api/projects/${id}`, {
//     method: "DELETE"
//   })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Failed to delete: ${res.status}`);
//       // Remove from state
//       setProjects((prev) => prev.filter((p) => p.id !== id));
//       if (filteredProjects) {
//         setFilteredProjects((prev) => prev.filter((p) => p.id !== id));
//       }
//     })
//     .catch((err) => {
//       console.error("Delete error:", err);
//       alert("Failed to delete project.");
//     });
//   };

   
//     fetch(`http://localhost:8080/api/projects/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ status: newStatus }),
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error(`Failed to update status: ${res.status}`);
//         return res.json();
//       })
//       .then((data) => {
//         console.log("Status updated on server:", data);
//       })
//       .catch((err) => {
//         console.error("Error updating status:", err);
//       });
//   };

//   const handleCreateNewClick = () => setShowPopup(true);
//   const handleClosePopup = () => setShowPopup(false);

//   const handleAddProject = (newProject) => {
//     const nextId = projects.length ? Math.max(...projects.map((p) => p.id)) + 1 : 1;
//     const updated = [...projects, { ...newProject, id: nextId }];
//     setProjects(updated);
//     setFilteredProjects(null);
//   };

//   const handleSearchClick = () => {
//     const filtered = projects.filter((project) =>
//       ["name", "customer", "owner"].some((key) =>
//         project[key]?.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );
//     setFilteredProjects(filtered);
//     setCurrentPage(1);
//   };

//   const handlePageChange = (page) => {
//     if (page < 1 || page > totalPages) return;
//     setCurrentPage(page);
//   };

//   const statusCount = projects.reduce((acc, project) => {
//     acc[project.status] = (acc[project.status] || 0) + 1;
//     return acc;
//   }, {});

//   const pieData = Object.keys(statusCount).map((status) => ({
//     name: status,
//     value: statusCount[status],
//   }));

//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

//   if (loading) return <div style={{ padding: 40 }}>Loading projects...</div>;
//   if (error) return <div style={{ padding: 40, color: "red" }}>Error: {error}</div>;

//   return (
//     <div>
//       <Header />
//       <main className="dashboard-content">
//         {/* Chart */}
//         <div
//           className="chart-container"
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: "40px",
//             marginBottom: "40px",
//           }}
//         >
//           <ResponsiveContainer width="80%" height={280}>
//             <h3>Project Status Overview</h3>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}
//                 fill="#8884d8"
//                 label={({ name, percent }) =>
//                   `${name} (${(percent * 100).toFixed(0)}%)`
//                 }
//               >
//                 {pieData.map((entry, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={COLORS[index % COLORS.length]}
//                   />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>

//           <div className="status-legend">
//             <h4>Status Summary</h4>
//             <ul style={{ listStyleType: "none", padding: 0 }}>
//               {pieData.map((entry, index) => (
//                 <li
//                   key={index}
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     marginBottom: "8px",
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: "12px",
//                       height: "12px",
//                       backgroundColor: COLORS[index % COLORS.length],
//                       marginRight: "10px",
//                       borderRadius: "50%",
//                     }}
//                   ></div>
//                   <span>
//                     {entry.name}: {entry.value}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Create New */}
//         <div className="create-new-container">
//           <button className="create-new-button" onClick={handleCreateNewClick}>
//             Create New
//           </button>
//         </div>
//         {showPopup && (
//           <PopupForm onClose={handleClosePopup} onSubmit={handleAddProject} />
//         )}

//         {/* Search */}
//         <div style={{ textAlign: "center", margin: "20px 0" }}>
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={{ padding: "10px", width: "300px", fontSize: "16px" }}
//           />
//           <button
//             onClick={handleSearchClick}
//             style={{ padding: "10px 15px", marginLeft: "10px", fontSize: "16px" }}
//           >
//             Search
//           </button>
//         </div>

//         {/* Table */}
//         <table className="projects-table">
//           <thead>
//             <tr>
//               <th>Sl No</th>
//               <th>Project Name</th>
//               <th>Customer Name</th>
//               <th>Ticket Description</th>
              
//               <th> Ticket End Date</th>
//               <th>Warranty From</th>
//               <th>Warranty End</th>
//               <th>Owner</th>
//               <th>Status</th>
//               <th>Modify</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentProjects.map((project, index) => (
//               <tr key={project.id}>
//                 <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
//                 <td>{project.name}</td>
//                 <td>{project.customer}</td>
//                 <td>{project.description}</td>
//                 <td>{project.startDate}</td>
//                 <td>{project.endDate}</td>
//                 <td>{project.warranty}</td>
//                 <td>{project.owner}</td>
//                 <td>
//                   <select
//                     value={project.status}
//                     onChange={(e) =>
//                       handleStatusChange(project.id, e.target.value)
//                     }
//                   >
//                     <option value="Completed">Completed</option>
//                     <option value="In Progress">In Progress</option>
//                     <option value="Pending">Pending</option>
//                     <option value="On Hold">On Hold</option>
//                     <option value="Active">Active</option>
//                   </select>
//                 </td>
//                 <td>
//                   hi
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="pagination-controls">
//           <div className="items-per-page">
//             <label>Items per page: </label>
//             <select
//               value={itemsPerPage}
//               onChange={(e) => {
//                 setItemsPerPage(Number(e.target.value));
//                 setCurrentPage(1);
//               }}
//             >
//               <option value={5}>5</option>
//               <option value={10}>10</option>
//               <option value={15}>15</option>
//               <option value={20}>20</option>
//             </select>
//           </div>
//           <div className="pagination">
//             <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//             >
//               Previous
//             </button>
//             <span>
//               {currentPage} of {totalPages}
//             </span>
//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;




import { useEffect, useState } from "react";
import Header from "../components/header";
import PopupForm from "../components/PopupForm";
import "../styles/dashboard.css";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaTrash } from "react-icons/fa";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [showPopup, setShowPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/projects")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        // Assuming backend returns array of projects with these fields
        const formatted = data.map((project, idx) => ({
          id: project.id,
          name: project.name,
          customer: project.customerName,
          description: project.description,
          startDate: project.endDate,
          endDate: project.warrantyFrom,
          warranty: project.warrantyEnd,
          status: project.status,
          owner: project.owner,
        }));
        setProjects(formatted);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const displayedProjects = filteredProjects ?? projects;
  const totalPages = Math.ceil(displayedProjects.length / itemsPerPage);
  const currentProjects = displayedProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleStatusChange = (id, newStatus) => {
    const updated = projects.map((p) =>
      p.id === id ? { ...p, status: newStatus } : p
    );
    setProjects(updated);
    if (filteredProjects) {
      const updatedFiltered = filteredProjects.map((p) =>
        p.id === id ? { ...p, status: newStatus } : p
      );
      setFilteredProjects(updatedFiltered);
    }

    fetch(`http://localhost:8080/api/projects/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to update status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("Status updated on server:", data);
      })
      .catch((err) => {
        console.error("Error updating status:", err);
      });
  };

  const handleDeleteProject = (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    fetch(`http://localhost:8080/api/projects/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to delete: ${res.status}`);
        // Remove from state
        setProjects((prev) => prev.filter((p) => p.id !== id));
        if (filteredProjects) {
          setFilteredProjects((prev) => prev.filter((p) => p.id !== id));
        }
      })
      .catch((err) => {
        console.error("Delete error:", err);
        alert("Failed to delete project.");
      });
  };

  const handleCreateNewClick = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  const handleAddProject = (newProject) => {
    const nextId = projects.length ? Math.max(...projects.map((p) => p.id)) + 1 : 1;
    const updated = [...projects, { ...newProject, id: nextId }];
    setProjects(updated);
    setFilteredProjects(null);
  };

  const handleSearchClick = () => {
    const filtered = projects.filter((project) =>
      ["name", "customer", "owner"].some((key) =>
        project[key]?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredProjects(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const statusCount = projects.reduce((acc, project) => {
    acc[project.status] = (acc[project.status] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.keys(statusCount).map((status) => ({
    name: status,
    value: statusCount[status],
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  if (loading) return <div style={{ padding: 40 }}>Loading projects...</div>;
  if (error) return <div style={{ padding: 40, color: "red" }}>Error: {error}</div>;

  return (
    <div>
      <Header />
      <main className="dashboard-content">
        
        <div
          className="chart-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          <ResponsiveContainer width="80%" height={280}>
            <h3>Project Status Overview</h3>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label={({ name, percent }) =>
                  `${name} (${(percent * 100).toFixed(0)}%)`
                }
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="status-legend">
            <h4>Status Summary</h4>
             <p><strong>Total: </strong>{projects.length}</p>

            <ul style={{ listStyleType: "none", padding: 0 , marginTop: "5px"}}>
              {pieData.map((entry, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      backgroundColor: COLORS[index % COLORS.length],
                      marginRight: "10px",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <span>
                    {entry.name}: {entry.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Create New */}
        <div className="create-new-container">
          <button className="create-new-button" onClick={handleCreateNewClick}>
            Create New
          </button>
        </div>
        {showPopup && (
          <PopupForm onClose={handleClosePopup} onSubmit={handleAddProject} />
        )}

        {/* Search */}
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: "10px", width: "300px", fontSize: "16px" }}
          />
          <button
            onClick={handleSearchClick}
            style={{ padding: "10px 15px", marginLeft: "10px", fontSize: "16px" }}
          >
            Search
          </button>
        </div>

        {/* Table */}
        <table className="projects-table">
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Project Name</th>
              <th>Customer Name</th>
              <th>Ticket Description</th>
              <th>Ticket End Date</th>
              <th>Warranty From</th>
              <th>Warranty End</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentProjects.map((project, index) => (
              <tr key={project.id}>
                <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                <td>{project.name}</td>
                <td>{project.customer}</td>
                <td>{project.description}</td>
                <td>{project.startDate}</td>
                <td>{project.endDate}</td>
                <td>{project.warranty}</td>
                <td>{project.owner}</td>
                <td>
                  <select
                    value={project.status}
                    onChange={(e) =>
                      handleStatusChange(project.id, e.target.value)
                    }
                  >
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Pending">Pending</option>
                    <option value="On Hold">On Hold</option>
                    <option value="Active">Active</option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteProject(project.id)}
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      color: "#e00",
                    }}
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination-controls">
          <div className="items-per-page">
            <label>Items per page: </label>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
