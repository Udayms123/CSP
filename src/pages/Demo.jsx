// src/pages/DemoPage.jsx or src/components/DemoPage.jsx

const DemoPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Welcome to the Demo Page!</h1>
      <p>This is the demo area after a successful admin login.</p>
    </div>
  );
};

export default DemoPage;






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

//   // ✅ Fetch from local API
//   useEffect(() => {
//     fetch("http://localhost:8080/api/projects")
//       .then((res) => res.json())
//       .then((data) => {
//         // const formatted = data.map((project) => ({
//            const formatted = data.map((project, idx) => ({
//           id: project.id,
//           name: project.name,
//           customer: project.customer,
//           description: project.description,
//           startDate: project.startDate,
//           endDate: project.endDate,
//           warranty: project.warranty,
//           status: project.status,
//           owner: project.owner,
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

//     fetch(`http://localhost:8080/api/projects/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ status: newStatus }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Status updated on server:", data);
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

//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   const statusCount = projects.reduce((acc, project) => {
//     acc[project.status] = (acc[project.status] || 0) + 1;
//     return acc;
//   }, {});

//   const pieData = Object.keys(statusCount).map((status) => ({
//     name: status,
//     value: statusCount[status],
//   }));

//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA00FF"];

//   if (loading) return <div style={{ padding: 40 }}>Loading projects...</div>;

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
//             style={{
//               padding: "10px 15px",
//               marginLeft: "10px",
//               fontSize: "16px",
//             }}
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
//               <th>Start Date</th>
//               <th>End Date</th>
//               <th>Warranty</th>
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
//                     <option value="Active">Active</option>
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

//          {/* Pagination */}
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
