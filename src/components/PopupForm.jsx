// import React, { useState } from "react";

// const PopupForm = ({ onClose, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     customerName: "",
//     description: "",
//     startDate: "",
//     endDate: "",
//     warranty: "",
//     warrantyFrom: "",
//     status: "Pending",
//     owner: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:8080/api/projects", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit data");
//       }

//       const result = await response.json();
//       console.log("Submitted successfully:", result);

//       if (onSubmit) onSubmit(result);
//       onClose();
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Submission failed. Try again.");
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <h2>Create New Ticket</h2>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Project Name
//             <input name="name" placeholder="Project Name" onChange={handleChange} required />
//           </label>

//           <label>
//             Customer Name
//             <input name="customerName" placeholder="Customer Name" onChange={handleChange} required />
//           </label>

//           <label>
//             Description
//             <textarea name="description" placeholder="Description" onChange={handleChange} required />
//           </label>

//           <label>
//             Ticket Closing Date
//             <input type="date" name="endDate" onChange={handleChange} required />
//           </label>

//           <h5 style={{ marginTop: "16px" }}>Project Timeline & Warranty Info</h5>
//           <div className="form-row">
//             <label>
//               From
//               <input type="date" name="warrantyFrom" onChange={handleChange} required />
//             </label>
//             <label>
//               To
//               <input type="date" name="warrantyEnd" onChange={handleChange} required />
//             </label>
//           </div>

//           <label>
//             Owner
//             <input name="owner" placeholder="Owner" onChange={handleChange} required />
//           </label>

//           <label>
//             Status
//             <select name="status" onChange={handleChange}>
//               <option value="Pending">Pending</option>
//               <option value="In Progress">In Progress</option>
//               <option value="Completed">Completed</option>
//               <option value="On Hold">On Hold</option>
//             </select>
//           </label>

//           <div className="modal-buttons">
//             <button type="submit">Submit</button>
//             <button type="button" onClick={onClose}>Cancel</button>
//           </div>
//         </form>
//       </div>

//       <style jsx>{`
//         .modal-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: rgba(0, 0, 0, 0.5);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 1000;
//         }

//         .modal {
//           background: #fff;
//           padding: 20px;
//           border-radius: 12px;
//           max-width: 500px;
//           width: 90%;
//           max-height: 90vh;
//           overflow-y: auto;
//           box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
//         }

//         form {
//           display: flex;
//           flex-direction: column;
//         }

//         input, textarea, select {
//           margin: 8px 0;
//           padding: 8px;
//           border: 1px solid #ccc;
//           border-radius: 6px;
//         }

//         textarea {
//           resize: vertical;
//         }

//         label {
//           display: flex;
//           flex-direction: column;
//           margin-bottom: 10px;
//           font-weight: 500;
//         }

//         .form-row {
//           display: flex;
//           gap: 16px;
//           margin: 8px 0;
//           flex-wrap: wrap;
//         }

//         .form-row label {
//           flex: 1;
//           min-width: 45%;
//         }

//         .modal-buttons {
//           display: flex;
//           justify-content: space-between;
//           margin-top: 12px;
//         }

//         .modal-buttons button {
//           padding: 8px 16px;
//           border: none;
//           border-radius: 6px;
//           cursor: pointer;
//         }

//         .modal-buttons button[type="submit"] {
//           background-color: #0070f3;
//           color: white;
//         }

//         .modal-buttons button[type="button"] {
//           background-color: #ccc;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PopupForm;





import React, { useState } from "react";

const getCurrentDate = () => {
  return new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"
};

const PopupForm = ({ onClose, onSubmit }) => {
  const currentDate = getCurrentDate();

  const [formData, setFormData] = useState({
    name: "",
    customerName: "",
    description: "",
    startDate: currentDate,
    endDate: "",
    warrantyFrom: currentDate,
    warrantyEnd: currentDate,
    status: "Pending",
    owner: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const result = await response.json();
      console.log("Submitted successfully:", result);

      if (onSubmit) onSubmit(result);
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed. Try again.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Create New Ticket</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Project Name
            <input name="name" placeholder="Project Name" onChange={handleChange} required />
          </label>

          <label>
            Customer Name
            <input name="customerName" placeholder="Customer Name" onChange={handleChange} required />
          </label>

          <label>
            Description
            <textarea name="description" placeholder="Description" onChange={handleChange} required />
          </label>

          <label>
            Ticket Closing Date
            <input type="date" name="endDate" onChange={handleChange} required />
          </label>

          <h5 style={{ marginTop: "16px" }}>Project Timeline & Warranty Info</h5>
          <div className="form-row">
            <label>
              From
              <input
                type="date"
                name="warrantyFrom"
                value={formData.warrantyFrom}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              To
              <input
                type="date"
                name="warrantyEnd"
                value={formData.warrantyEnd}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          {/* <label>
            Start Date
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </label> */}

          <label>
            Owner
            <input name="owner" placeholder="Owner" onChange={handleChange} required />
          </label>

          <label>
            Status
            <select name="status" onChange={handleChange}>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="On Hold">On Hold</option>
            </select>
          </label>

          <div className="modal-buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
       <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          max-width: 500px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        }

        form {
          display: flex;
          flex-direction: column;
        }

        input, textarea, select {
          margin: 8px 0;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 6px;
        }

        textarea {
          resize: vertical;
        }

        label {
          display: flex;
          flex-direction: column;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .form-row {
          display: flex;
          gap: 16px;
          margin: 8px 0;
          flex-wrap: wrap;
        }

        .form-row label {
          flex: 1;
          min-width: 45%;
        }

        .modal-buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 12px;
        }

        .modal-buttons button {
          padding: 8px 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        .modal-buttons button[type="submit"] {
          background-color: #0070f3;
          color: white;
        }

        .modal-buttons button[type="button"] {
          background-color: #ccc;
        }
      `}</style>

     
    </div>
  );
};

export default PopupForm;



// import React, { useState } from "react";

// const PopupForm = ({ onClose, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     customerName: "",
//     description: "",
//     endDate: "",
//     warrantyFrom: "",
//     warrantyEnd: "",
//     status: "Pending",
//     owner: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//     onClose();
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <h2>Create New Ticket</h2>

//         <form onSubmit={handleSubmit}>
//           {/* Project Details */}
//           <h2 className="section-title">Project Details</h2>
//           <input name="name" placeholder="Project Name" onChange={handleChange} required />
//           <input name="Customer Name" placeholder="Customer Name" onChange={handleChange} required />
         

//           <textarea
//             name="description"
//             placeholder="Description"
//             onChange={handleChange}
//             required
//           />

//           {/* Ticket Closing */}
//           <h5 className="section-title">Ticket Closing Date</h5>
//           <input
//             type="date"
//             name="endDate"
//             onChange={handleChange}
//             required
//           />

//           {/* Warranty Info */}
//           <h5 className="section-title">Project Timeline & Warranty Info</h5>
//           <div className="form-row">
//             <label>
//               From -
//               <input
//                 type="date"
//                 name="warrantyFrom"
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <label>
//               To -
//               <input
//                 type="date"
//                 name="warrantyEnd"
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//           </div>

//           {/* Owner & Status */}
//           <h5 className="section-title">Ownership</h5>
//           <input
//             name="owner"
//             placeholder="Owner"
//             onChange={handleChange}
//             required
//           />

//           <h5 className="section-title">Status</h5>
//           <select name="status" onChange={handleChange}>
//             <option value="Pending">Pending</option>
//             <option value="In Progress">In Progress</option>
//             <option value="Completed">Completed</option>
//             <option value="On Hold">On Hold</option>
//           </select>

//           {/* Buttons */}
//           <div className="modal-buttons">
//             <button type="submit">Submit</button>
//             <button type="button" onClick={onClose}>
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* CSS in JSX */}
//       <style jsx>{`
//         .modal-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: rgba(0, 0, 0, 0.5);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 1000;
//         }

//         .modal {
//           background: #fff;
//           padding: 20px;
//           border-radius: 12px;
//           max-width: 600px;
//           width: 90%;
//           box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
//         }

//         .section-title {
//           margin: 16px 0 8px;
//           font-size: 16px;
//           font-weight: 600;
//           color: #333;
//         }

//         form {
//           display: flex;
//           flex-direction: column;
//         }

//         .form-row {
//           display: flex;
//           gap: 16px;
//           margin: 8px 0;
//           flex-wrap: wrap;
//         }

//         .form-row input,
//         .form-row select,
//         .form-row textarea,
//         .form-row label {
//           flex: 1;
//           min-width: 45%;
//         }

//         input,
//         textarea,
//         select {
          
//         }

//         textarea {
//           width: 100%;
//         }

//         label {
//           display: flex;
//           flex-direction: column;
//           font-weight: 500;
//         }

//         .modal-buttons {
//           display: flex;
//           justify-content: space-between;
//           margin-top: 16px;
//         }

//         .modal-buttons button {
//           padding: 8px 16px;
//           border: none;
//           border-radius: 6px;
//           cursor: pointer;
//         }

//         .modal-buttons button[type="submit"] {
//           background-color: #0070f3;
//           color: white;
//         }

//         .modal-buttons button[type="button"] {
//           background-color: #ccc;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PopupForm;
