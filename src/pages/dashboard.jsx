

import { useState } from "react";
import Header from "../components/header";
import PopupForm from "../components/PopupForm";
// import './dashboard.css'; 
import '../styles/dashboard.css';


const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [showPopup, setShowPopup] = useState(false);

  const [projects, setProjects] = useState([
    { id: 1, name: 'Project A', customer: 'Project A', description: 'Description A', startDate: '2025-01-01', endDate: '2025-12-31', warranty: '1 year', status: 'Completed', owner: 'Uday' },
    { id: 2, name: 'Project B', customer: 'Project A', description: 'Description B', startDate: '2025-02-01', endDate: '2025-11-30', warranty: '2 years', status: 'In Progress', owner: 'Uday' },
    { id: 3, name: 'Project C', customer: 'Project A', description: 'Description C', startDate: '2025-03-01', endDate: '2025-09-30', warranty: '1 year', status: 'Pending', owner: 'Uday' },
    { id: 4, name: 'Project D', customer: 'Project A', description: 'Description D', startDate: '2025-04-01', endDate: '2025-09-30', warranty: '1 year', status: 'Completed' , owner: 'mahith'},
    { id: 5, name: 'Project E', customer: 'Project A', description: 'Description E', startDate: '2025-05-01', endDate: '2025-08-31', warranty: '1.5 years', status: 'In Progress', owner: 'seshan' },
    { id: 6, name: 'Project F', customer: 'Project A', description: 'Description F', startDate: '2025-06-01', endDate: '2025-07-31', warranty: '2 years', status: 'Completed', owner: 'Uday' },
    { id: 7, name: 'Project G', customer: 'Project A', description: 'Description G', startDate: '2025-07-01', endDate: '2025-10-30', warranty: '1 year', status: 'Pending', owner: 'Uday' },

  ]);

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const currentProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleStatusChange = (id, newStatus) => {
    const updated = projects.map(p => p.id === id ? { ...p, status: newStatus } : p);
    setProjects(updated);
  };

  const handleCreateNewClick = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  const handleAddProject = (newProject) => {
    const nextId = projects.length ? Math.max(...projects.map(p => p.id)) + 1 : 1;
    setProjects([...projects, { ...newProject, id: nextId }]);
  };

  return (
    <div>
      <Header />
      <main className="dashboard-content">
        {/* <p>Welcome to your dashboard!</p> */}

        {/* Create New Button */}
        <div className="create-new-container">
          <button className="create-new-button" onClick={handleCreateNewClick}>
            Create New
          </button>
        </div>

        {/* Show Modal Dialog */}
        {showPopup && (
          <PopupForm onClose={handleClosePopup} onSubmit={handleAddProject} />
        )}
         {/* <div className="table-header">
          <h3>Welcome to your dashboard!</h3>
         </div> */}
         
        {/* Projects Table */}
        <table className="projects-table">
          
          <thead>
            <tr>
              
              <th>Sl No</th>
              <th>Project Name</th>
              <th>Customer Name</th>
              <th>Ticket Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Warranty</th>
              <th>Owner</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentProjects.map((project) => (
              <tr key={project.id}>
                <td>{project.id}</td>
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
                    onChange={(e) => handleStatusChange(project.id, e.target.value)}
                  >
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Pending">Pending</option>
                    <option value="On Hold">On Hold</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination-controls">
          <div className="items-per-page">
            <label>Items per page: </label>
            <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div>

          <div className="pagination">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </button>
            <span>{currentPage} of {totalPages}</span>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;


// import { useEffect, useState } from "react";
// import axios from "axios";
// import Header from "../components/header";
// import PopupForm from "../components/PopupForm";
// import "./dashboard.css";

// const Dashboard = () => {
//   const [projects, setProjects] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(5);
//   const [showPopup, setShowPopup] = useState(false);

//   //with backend intigration
//   // Fetch projects from backend
//   useEffect(() => {
//     axios.get("http://localhost:5000/projects")
//       .then((res) => setProjects(res.data))
//       .catch((err) => console.error("Error fetching projects:", err));
//   }, []);

//   const totalPages = Math.ceil(projects.length / itemsPerPage);
//   const currentProjects = projects.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePageChange = (page) => {
//     if (page < 1 || page > totalPages) return;
//     setCurrentPage(page);
//   };

//   const handleStatusChange = (id, newStatus) => {
//     axios.put(`http://localhost:5000/projects/${id}`, { status: newStatus })
//       .then(() => {
//         const updated = projects.map(p =>
//           p.id === id ? { ...p, status: newStatus } : p
//         );
//         setProjects(updated);
//       })
//       .catch((err) => console.error("Error updating status:", err));
//   };

//   const handleCreateNewClick = () => setShowPopup(true);
//   const handleClosePopup = () => setShowPopup(false);

//   const handleAddProject = (newProject) => {
//     axios.post("http://localhost:5000/projects", newProject)
//       .then((res) => {
//         setProjects([...projects, res.data]);
//         setShowPopup(false);
//       })
//       .catch((err) => console.error("Error adding project:", err));
//   };

//   return (
//     <div>
//       <Header />
//       <main className="dashboard-content">
//         <p>Welcome to your dashboard!</p>

//         {/* Create New Button */}
//         <div className="create-new-container">
//           <button className="create-new-button" onClick={handleCreateNewClick}>
//             Create New
//           </button>
//         </div>

//         {/* Popup Form */}
//         {showPopup && (
//           <PopupForm onClose={handleClosePopup} onSubmit={handleAddProject} />
//         )}

//         {/* Projects Table */}
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
//             </tr>
//           </thead>
//           <tbody>
//             {currentProjects.map((project) => (
//               <tr key={project.id}>
//                 <td>{project.id}</td>
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
//                   </select>
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
//               onChange={(e) => setItemsPerPage(Number(e.target.value))}
//             >
//               <option value={5}>5</option>
//               <option value={10}>10</option>
//               <option value={15}>15</option>
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
