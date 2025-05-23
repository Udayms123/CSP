import React, { useState } from "react";
// import './dashboard.css'; 

const PopupForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    warranty: "",
    status: "Pending",
    owner: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Create New Ticket</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Project Name" onChange={handleChange} required />
          <textarea name="description" placeholder="Description" onChange={handleChange} required />
          <input type="date" name="startDate" onChange={handleChange} required />
          <input type="date" name="endDate" onChange={handleChange} required />
          <input name="warranty" placeholder="Warranty" onChange={handleChange} required />
          <input name="owner" placeholder="Owner" onChange={handleChange} required />
          <select name="status" onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="On Hold">On Hold</option>
          </select>
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
